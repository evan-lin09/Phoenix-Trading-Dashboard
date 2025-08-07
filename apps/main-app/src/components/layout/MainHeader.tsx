'use client';

import Link from 'next/link'
import { HeaderControls } from './HeaderControls';
import { TradingIcon } from '@phoenix/ui';
import { Locale } from '../../middleware';

interface MainHeaderProps {
  onMobileMenuToggle?: () => void;
  locale: Locale;
}

export function MainHeader({ onMobileMenuToggle, locale }: MainHeaderProps) {
  return (
    <header className="main-header h-16 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6 flex items-center justify-between sticky top-0">
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* 移动端菜单按钮 */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <TradingIcon name="menu" size={24} />
          </button>

          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Phoenix
          </div>
          <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">Trading Dashboard</div>
        </div>

        {/* 桌面端水平导航 */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            href="/quick-buy"
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-600/20 hover:bg-blue-200 dark:hover:bg-blue-600/30 transition-colors"
          >
            <TradingIcon name="chart" size={16} className="mr-2" />
            一件买币
          </Link>
          
          <Link
            href="/futures"
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <TradingIcon name="trendUp" size={16} className="mr-2" />
            合约交易
          </Link>
          
          <Link
            href="/earn"
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <TradingIcon name="bitcoin" size={16} className="mr-2" />
            理财产品
          </Link>
          
          <Link
            href="/dashboard"
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <TradingIcon name="chartLine" size={16} className="mr-2" />
            仪表盘
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="hidden lg:inline">Next.js + React + Supabase</span>
        </div>
        <HeaderControls />
      </div>
    </header>
  );
} 