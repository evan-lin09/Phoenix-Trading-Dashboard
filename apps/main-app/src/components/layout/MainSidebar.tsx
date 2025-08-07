'use client';

import { TradingIcon } from '@phoenix/ui';
import { Locale } from '../../middleware';

interface MainSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  locale: Locale;
}

export function MainSidebar({ isOpen = false, onClose, locale }: MainSidebarProps) {
  return (
    <>
      {/* 移动端遮罩 - 只在移动端且侧边栏打开时显示 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* 侧边栏 - 只在移动端显示，桌面端完全隐藏 */}
      <aside className={`
        w-64 bg-white dark:bg-gray-900 
        border-r border-gray-200 dark:border-gray-700 
        backdrop-blur-sm
        ${!isOpen ? '-translate-x-full' : 'translate-x-0'}
        fixed top-16 bottom-0 left-0 z-40
        transform transition-transform duration-300 ease-in-out
        lg:hidden
      `}>
        <nav className="p-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 px-3">交易应用</div>
            
            <a 
              href="/spot" 
              className="flex items-center px-3 py-2 rounded-lg text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-600/20 font-medium"
              onClick={onClose}
            >
              <TradingIcon name="chart" size={20} className="mr-3" />
              <span>现货交易</span>
              <span className="ml-auto text-xs bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">可用</span>
            </a>
            
            <a 
              href="/futures" 
              className="flex items-center px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={onClose}
            >
              <TradingIcon name="trendUp" size={20} className="mr-3" />
              <span>合约交易</span>
              <span className="ml-auto text-xs bg-gray-100 dark:bg-gray-600/20 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full">即将推出</span>
            </a>
            
            <a 
              href="/earn" 
              className="flex items-center px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={onClose}
            >
              <TradingIcon name="bitcoin" size={20} className="mr-3" />
              <span>理财产品</span>
              <span className="ml-auto text-xs bg-gray-100 dark:bg-gray-600/20 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full">即将推出</span>
            </a>
            
            <a 
              href="/dashboard" 
              className="flex items-center px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={onClose}
            >
              <TradingIcon name="chartLine" size={20} className="mr-3" />
              <span>仪表盘</span>
              <span className="ml-auto text-xs bg-gray-100 dark:bg-gray-600/20 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full">即将推出</span>
            </a>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-3">系统状态</div>
            <div className="space-y-2 text-xs text-gray-400 dark:text-gray-500 px-3">
              <div className="flex items-center gap-2">
                <TradingIcon name="success" size={12} className="text-green-500" />
                图标系统集成
              </div>
              <div className="flex items-center gap-2">
                <TradingIcon name="success" size={12} className="text-blue-500" />
                桌面端水平导航
              </div>
              <div className="flex items-center gap-2">
                <TradingIcon name="success" size={12} className="text-purple-500" />
                移动端侧边栏
              </div>
              <div className="flex items-center gap-2">
                <TradingIcon name="success" size={12} className="text-yellow-500" />
                主题切换正常
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
} 