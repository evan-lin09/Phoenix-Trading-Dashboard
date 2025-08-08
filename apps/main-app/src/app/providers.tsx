'use client';

import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Locale } from '@/middleware';
import {AppLayout} from "@/components/layout/AppLayout";
import {LocaleProvider} from "@/contexts/LocaleContext";

interface ProvidersProps {
  children: React.ReactNode;
  locale?: Locale;
}

export function Providers({ children, locale = 'en' }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LocaleProvider locale={locale}>
          <AppLayout>
            {children}
          </AppLayout>
        </LocaleProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
} 