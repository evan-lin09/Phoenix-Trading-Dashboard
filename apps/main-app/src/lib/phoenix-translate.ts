import { Locale, locales, defaultLocale } from '../middleware';

// 翻译资源类型
export interface TranslationResource {
  [key: string]: string | TranslationResource;
}

// 翻译模块类型
export interface TranslationModule {
  [namespace: string]: TranslationResource;
}

// Phoenix Translate System 配置
interface PhoenixTranslateConfig {
  defaultLocale: Locale;
  locales: readonly Locale[];
  fallbackLocale: Locale;
  debug?: boolean;
}

// 翻译缓存
const translationCache = new Map<string, TranslationModule>();

// 加载状态跟踪
const loadingPromises = new Map<string, Promise<TranslationModule>>();

export class PhoenixTranslateSystem {
  private config: PhoenixTranslateConfig;
  private currentLocale: Locale;

  constructor(config?: Partial<PhoenixTranslateConfig>) {
    this.config = {
      defaultLocale,
      locales,
      fallbackLocale: defaultLocale,
      debug: process.env.NODE_ENV === 'development',
      ...config,
    };
    this.currentLocale = this.config.defaultLocale;
  }

  /**
   * 设置当前语言
   */
  setLocale(locale: Locale): void {
    if (!this.config.locales.includes(locale)) {
      console.warn(`[PhoenixTranslate] Unsupported locale: ${locale}`);
      return;
    }
    this.currentLocale = locale;
    
    if (this.config.debug) {
      console.log(`[PhoenixTranslate] Locale changed to: ${locale}`);
    }
  }

  /**
   * 获取当前语言
   */
  getLocale(): Locale {
    return this.currentLocale;
  }

  /**
   * 动态加载翻译文件
   */
  async loadTranslations(locale: Locale, pathname: string): Promise<TranslationModule> {
    const cacheKey = `${locale}-${pathname}`;
    
    // 检查缓存
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey)!;
    }

    // 检查是否正在加载
    if (loadingPromises.has(cacheKey)) {
      return loadingPromises.get(cacheKey)!;
    }

    // 根据路径确定需要加载的翻译模块
    const modules = this.getRequiredModules(pathname);
    
    const loadingPromise = this.loadModules(locale, modules);
    loadingPromises.set(cacheKey, loadingPromise);

    try {
      const translations = await loadingPromise;
      translationCache.set(cacheKey, translations);
      loadingPromises.delete(cacheKey);
      
      if (this.config.debug) {
        console.log(`[PhoenixTranslate] Loaded translations for ${locale}:`, modules);
      }
      
      return translations;
    } catch (error) {
      loadingPromises.delete(cacheKey);
      console.error(`[PhoenixTranslate] Failed to load translations for ${locale}:`, error);
      
      // 回退到默认语言
      if (locale !== this.config.fallbackLocale) {
        return this.loadTranslations(this.config.fallbackLocale, pathname);
      }
      
      throw error;
    }
  }

  /**
   * 根据路径确定需要的翻译模块
   */
  private getRequiredModules(pathname: string): string[] {
    const segments = pathname.split('/').filter(Boolean);
    const modules = ['common']; // 通用模块总是需要的

    if (segments.length === 0) {
      // 首页
      modules.push('home', 'market', 'hero');
    } else {
      const page = segments[0];
      switch (page) {
        case 'spot':
          modules.push('trading', 'spot', 'market');
          break;
        case 'futures':
          modules.push('trading', 'futures', 'market');
          break;
        case 'earn':
          modules.push('earn', 'products');
          break;
        case 'dashboard':
          modules.push('dashboard', 'portfolio', 'analytics');
          break;
        default:
          modules.push('nav');
      }
    }

    return modules;
  }

  /**
   * 加载多个翻译模块
   */
  private async loadModules(locale: Locale, modules: string[]): Promise<TranslationModule> {
    const translations: TranslationModule = {};

    await Promise.all(
      modules.map(async (module) => {
        try {
          const moduleTranslations = await import(`../locales/${locale}/${module}.json`);
          translations[module] = moduleTranslations.default || moduleTranslations;
        } catch (error) {
          if (this.config.debug) {
            console.warn(`[PhoenixTranslate] Module ${module} not found for ${locale}`);
          }
          
          // 尝试加载回退语言的模块
          if (locale !== this.config.fallbackLocale) {
            try {
              const fallbackTranslations = await import(`../locales/${this.config.fallbackLocale}/${module}.json`);
              translations[module] = fallbackTranslations.default || fallbackTranslations;
            } catch (fallbackError) {
              console.warn(`[PhoenixTranslate] Fallback module ${module} also not found`);
            }
          }
        }
      })
    );

    return translations;
  }

  /**
   * 翻译方法
   */
  translate(
    key: string,
    translations: TranslationModule,
    interpolations?: Record<string, string | number>
  ): string {
    const [namespace, ...keyPath] = key.split('.');
    
    if (!translations[namespace]) {
      if (this.config.debug) {
        console.warn(`[PhoenixTranslate] Namespace ${namespace} not found`);
      }
      return key;
    }

    let value: any = translations[namespace];
    
    for (const segment of keyPath) {
      if (value && typeof value === 'object' && segment in value) {
        value = value[segment];
      } else {
        if (this.config.debug) {
          console.warn(`[PhoenixTranslate] Translation key ${key} not found`);
        }
        return key;
      }
    }

    if (typeof value !== 'string') {
      if (this.config.debug) {
        console.warn(`[PhoenixTranslate] Translation value for ${key} is not a string`);
      }
      return key;
    }

    // 处理插值
    if (interpolations) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
        return interpolations[variable]?.toString() || match;
      });
    }

    return value;
  }

  /**
   * 清除缓存
   */
  clearCache(): void {
    translationCache.clear();
    loadingPromises.clear();
    
    if (this.config.debug) {
      console.log('[PhoenixTranslate] Cache cleared');
    }
  }

  /**
   * 预加载翻译
   */
  async preloadTranslations(locale: Locale, pathname: string): Promise<void> {
    try {
      await this.loadTranslations(locale, pathname);
    } catch (error) {
      console.error(`[PhoenixTranslate] Failed to preload translations:`, error);
    }
  }
}

// 创建全局实例
export const phoenixTranslate = new PhoenixTranslateSystem();

// 便捷的翻译函数
export const createTranslator = (translations: TranslationModule, locale?: Locale) => {
  if (locale) {
    phoenixTranslate.setLocale(locale);
  }
  
  return {
    t: (key: string, interpolations?: Record<string, string | number>) =>
      phoenixTranslate.translate(key, translations, interpolations),
    locale: phoenixTranslate.getLocale(),
  };
}; 