'use client';

import { useState } from 'react';
import { Locale } from '../../middleware';
import { MainHeader } from '../../components/layout/MainHeader';
import { MainSidebar } from '../../components/layout/MainSidebar';
import { HeroSection } from '../../components/sections/HeroSection';
import { StatusSection } from '../../components/sections/StatusSection';

interface HomePageProps {
  params: { locale: Locale };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
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
        {/* Hero Section */}
        <HeroSection locale={locale} />
        
        {/* Status Section */}
        <StatusSection locale={locale} />
      </main>
    </div>
  );
} 