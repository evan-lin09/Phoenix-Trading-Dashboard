import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { Locale, locales } from '../middleware';

export const metadata: Metadata = {
  title: 'Phoenix Trading Dashboard',
  description: 'Modern cryptocurrency trading platform with Next.js 14.2.3 & React 18.3.1',
  keywords: 'trading, cryptocurrency, blockchain, finance, Phoenix',
  authors: [{ name: 'evan.lin' }],
};

// 生成静态参数
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 