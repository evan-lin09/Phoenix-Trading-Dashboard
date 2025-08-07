import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from '../middleware';
import { 
  phoenixTranslate, 
  createTranslator, 
  TranslationModule 
} from '../lib/phoenix-translate';

interface UsePhoenixTranslateReturn {
  t: (key: string, interpolations?: Record<string, string | number>) => string;
  locale: Locale;
  isLoading: boolean;
  error: Error | null;
  translations: TranslationModule | null;
}

export function usePhoenixTranslate(locale: Locale): UsePhoenixTranslateReturn {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<TranslationModule | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // 获取不带语言前缀的路径
  const getPathnameWithoutLocale = useCallback((path: string) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'zh', 'ja', 'ko'].includes(segments[0])) {
      return '/' + segments.slice(1).join('/');
    }
    return path;
  }, []);

  const loadTranslations = useCallback(async () => {
    if (!locale) return;

    setIsLoading(true);
    setError(null);

    try {
      const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);
      const translationData = await phoenixTranslate.loadTranslations(locale, pathnameWithoutLocale);
      setTranslations(translationData);
      phoenixTranslate.setLocale(locale);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load translations');
      setError(error);
      console.error('[usePhoenixTranslate] Error loading translations:', error);
    } finally {
      setIsLoading(false);
    }
  }, [locale, pathname, getPathnameWithoutLocale]);

  useEffect(() => {
    loadTranslations();
  }, [loadTranslations]);

  // 创建翻译函数
  const translator = translations ? createTranslator(translations, locale) : null;

  const t = useCallback((key: string, interpolations?: Record<string, string | number>) => {
    if (!translator) {
      console.warn(`[usePhoenixTranslate] Translations not loaded yet for key: ${key}`);
      return key;
    }
    return translator.t(key, interpolations);
  }, [translator]);

  return {
    t,
    locale,
    isLoading,
    error,
    translations,
  };
}

// 便捷的静态翻译Hook（用于服务端组件）
export function useStaticTranslate(locale: Locale, modules: string[]) {
  const [translations, setTranslations] = useState<TranslationModule | null>(null);
  
  useEffect(() => {
    const loadStaticTranslations = async () => {
      try {
        const translationData: TranslationModule = {};
        
        await Promise.all(
          modules.map(async (module) => {
            try {
              const moduleTranslations = await import(`../locales/${locale}/${module}.json`);
              translationData[module] = moduleTranslations.default || moduleTranslations;
            } catch (error) {
              console.warn(`[useStaticTranslate] Module ${module} not found for ${locale}`);
            }
          })
        );
        
        setTranslations(translationData);
        phoenixTranslate.setLocale(locale);
      } catch (error) {
        console.error('[useStaticTranslate] Error loading static translations:', error);
      }
    };

    loadStaticTranslations();
  }, [locale, modules]);

  const translator = translations ? createTranslator(translations, locale) : null;

  const t = useCallback((key: string, interpolations?: Record<string, string | number>) => {
    if (!translator) {
      return key;
    }
    return translator.t(key, interpolations);
  }, [translator]);

  return { t, locale, translations };
} 