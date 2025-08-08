export default function QuickBuyPage() {
  return (
    <div className="py-8 px-4 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="trading-card">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            快速购买
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">购买详情</h2>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">
                  这是快速购买页面，所有页面都会自动继承 MainHeader 和 MainSidebar 布局。
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">布局优势</h2>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>✅ 无需在每个页面重复布局代码</li>
                <li>✅ 导航状态在页面间保持一致</li>
                <li>✅ 更好的用户体验和性能</li>
                <li>✅ 便于维护和更新</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}