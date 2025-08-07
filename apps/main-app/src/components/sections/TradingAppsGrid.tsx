const tradingApps = [
  {
    title: '现货交易',
    description: '实时买卖加密货币，支持限价和市价订单',
    href: '/spot',
    icon: '📈',
    status: 'Available',
    features: ['实时行情', '深度图表', '订单簿'],
    bgGradient: 'from-success-500/20 to-success-600/10'
  },
  {
    title: '合约交易',
    description: '杠杆交易和风险管理工具',
    href: '/futures',
    icon: '⚡',
    status: 'Coming Soon',
    features: ['杠杆交易', '止盈止损', '风险控制'],
    bgGradient: 'from-warning-500/20 to-warning-600/10'
  },
  {
    title: '理财产品',
    description: '数字资产增值和收益计算',
    href: '/earn',
    icon: '💰',
    status: 'Coming Soon',
    features: ['存币生息', '流动性挖矿', '收益统计'],
    bgGradient: 'from-primary-500/20 to-primary-600/10'
  },
  {
    title: '个人仪表盘',
    description: '资产管理和交易数据分析',
    href: '/dashboard',
    icon: '📊',
    status: 'Coming Soon',
    features: ['资产概览', '交易记录', '收益分析'],
    bgGradient: 'from-secondary-500/20 to-secondary-600/10'
  },
];

export function TradingAppsGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        交易应用
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tradingApps.map((app, index) => (
          <div
            key={index}
            className={`trading-card hover-lift cursor-pointer group bg-gradient-to-br ${app.bgGradient} relative overflow-hidden`}
          >
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                {app.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{app.title}</h3>
              <p className="text-sm text-default-600 mb-4 line-clamp-2">{app.description}</p>
              
              <div className="space-y-2 mb-6">
                {app.features.map((feature, idx) => (
                  <div key={idx} className="text-xs text-default-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                  app.status === 'Available' 
                    ? 'bg-success/20 text-success border border-success/30' 
                    : 'bg-default/20 text-default-600 border border-default/30'
                }`}>
                  {app.status === 'Available' ? '可用' : '即将推出'}
                </span>
                <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1">
                  {app.status === 'Available' ? '进入' : '敬请期待'}
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-primary/20 backdrop-blur-sm">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            App Router 优势
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2 p-3 bg-content1/50 rounded-xl">
              <span>🚀</span>
              <span>更快的导航</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-content1/50 rounded-xl">
              <span>📦</span>
              <span>自动代码分割</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-content1/50 rounded-xl">
              <span>🔄</span>
              <span>流式渲染</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-content1/50 rounded-xl">
              <span>⚡</span>
              <span>服务端组件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 