export function StatusSection() {
  return (
    <section className="py-6 lg:py-8 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="trading-card">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">🎉 响应式布局升级</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-3 lg:p-4">
              <div className="text-2xl lg:text-3xl mb-2">💻</div>
              <div className="font-medium text-gray-900 dark:text-white">桌面端导航</div>
              <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">Header水平布局</div>
            </div>
            <div className="p-3 lg:p-4">
              <div className="text-2xl lg:text-3xl mb-2">📱</div>
              <div className="font-medium text-gray-900 dark:text-white">移动端侧边栏</div>
              <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">滑动菜单</div>
            </div>
            <div className="p-3 lg:p-4">
              <div className="text-2xl lg:text-3xl mb-2">🎨</div>
              <div className="font-medium text-gray-900 dark:text-white">主题切换</div>
              <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">深浅色主题</div>
            </div>
            <div className="p-3 lg:p-4">
              <div className="text-2xl lg:text-3xl mb-2">⚡</div>
              <div className="font-medium text-gray-900 dark:text-white">性能优化</div>
              <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">Next.js 14.2.3</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-600/20 rounded-lg">
            <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 dark:text-blue-400">
              <span>✨</span>
              <span className="font-medium">新布局设计：桌面端Header导航 + 移动端侧边栏，实现最佳用户体验</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 