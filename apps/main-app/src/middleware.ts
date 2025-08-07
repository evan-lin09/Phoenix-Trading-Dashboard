import { NextRequest, NextResponse } from 'next/server';

// 支持的语言列表
export const locales = ['en', 'zh', 'ja', 'ko'] as const;
export type Locale = typeof locales[number];

// 默认语言
export const defaultLocale: Locale = 'en';

// 获取浏览器首选语言
function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  // 解析 Accept-Language 头
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, q = '1'] = lang.trim().split(';q=');
      return {
        locale: locale.toLowerCase(),
        quality: parseFloat(q)
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // 查找匹配的语言
  for (const { locale } of languages) {
    // 完全匹配
    if (locales.includes(locale as Locale)) {
      return locale as Locale;
    }
    
    // 语言代码匹配（如 zh-CN -> zh）
    const langCode = locale.split('-')[0];
    if (locales.includes(langCode as Locale)) {
      return langCode as Locale;
    }
  }

  return defaultLocale;
}

// 获取路径中的语言代码
function getLocaleFromPathname(pathname: string): { locale: Locale | null; pathnameWithoutLocale: string } {
  const segments = pathname.split('/');
  const maybeLocale = segments[1];

  if (locales.includes(maybeLocale as Locale)) {
    return {
      locale: maybeLocale as Locale,
      pathnameWithoutLocale: '/' + segments.slice(2).join('/')
    };
  }

  return {
    locale: null,
    pathnameWithoutLocale: pathname
  };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('pathname', pathname);
  
  // 跳过静态资源和API路由
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const { locale, pathnameWithoutLocale } = getLocaleFromPathname(pathname);

  // 如果已经有语言前缀，继续处理
  if (locale) {
    // 设置语言头信息，供后续组件使用
    const response = NextResponse.next();
    response.headers.set('x-locale', locale);
    return response;
  }

  // 没有语言前缀，需要重定向
  const detectedLocale = getLocaleFromAcceptLanguage(
    request.headers.get('accept-language')
  );

  // 构建新的URL
  const newUrl = new URL(`/${detectedLocale}${pathnameWithoutLocale}`, request.url);
  
  // 保持查询参数
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // 匹配所有路径，除了静态资源
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}; 