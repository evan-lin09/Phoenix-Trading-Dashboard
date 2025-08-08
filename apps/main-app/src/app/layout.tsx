import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phoenix Trading Dashboard',
  description: 'Modern cryptocurrency trading platform with Next.js 14.2.3 & React 18.3.1',
  keywords: 'trading, cryptocurrency, blockchain, finance, Phoenix',
  authors: [{ name: 'evan.lin' }],
};

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