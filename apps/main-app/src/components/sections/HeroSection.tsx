export function HeroSection() {
  return (
    <section className="py-8 lg:py-16 px-4 lg:px-6 gradient-bg hero-glow">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Phoenix Trading Dashboard
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            基于 Next.js 14.2.3 + React 18.3.1 的现代化交易平台
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition-colors text-white shadow-lg">
            开始交易
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="trading-card hover-lift">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">总市值</div>
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">$2.1T</div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Market Cap</div>
          </div>
          <div className="trading-card hover-lift">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">BTC 占比</div>
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">42.3%</div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">BTC Dominance</div>
          </div>
          <div className="trading-card hover-lift">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">BTC 价格</div>
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold price-up">$43,250</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">+2.45% ↗</div>
          </div>
          <div className="trading-card hover-lift">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">ETH 价格</div>
            <div className="text-xl lg:text-2xl xl:text-3xl font-bold price-up">$2,621</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">+1.82% ↗</div>
          </div>
        </div>
      </div>
    </section>
  );
} 