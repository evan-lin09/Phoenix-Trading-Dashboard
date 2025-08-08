'use client';

import { useState } from 'react';
import { MainHeader } from './MainHeader';
import { MainSidebar } from './MainSidebar';
import { useLocale } from '@/contexts/LocaleContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { locale } = useLocale();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      {/* Header - 完全独立在最顶部，包含桌面端导航 */}
      <MainHeader onMobileMenuToggle={toggleSidebar} locale={locale} />
      
      {/* 移动端侧边栏 - 桌面端不显示 */}
      <MainSidebar isOpen={sidebarOpen} onClose={closeSidebar} locale={locale} />
      
      {/* Main Content - 桌面端占满整个宽度，移动端正常显示 */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
