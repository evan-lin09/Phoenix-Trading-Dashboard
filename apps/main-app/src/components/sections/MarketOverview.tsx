interface MarketData {
  totalMarketCap: string;
  btcDominance: string;
  ethPrice: string;
  btcPrice: string;
  topGainers: Array<{
    symbol: string;
    price: string;
    change: string;
  }>;
}

interface MarketOverviewProps {
  marketData: MarketData;
}

export function MarketOverview({ marketData }: MarketOverviewProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">市场概览</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="trading-card">
          <h3 className="text-lg font-semibold mb-4">涨幅榜</h3>
          <div className="space-y-3">
            {marketData.topGainers.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{item.symbol}</span>
                <div className="text-right">
                  <div className="font-bold">${item.price}</div>
                  <div className="text-bull text-sm">{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="trading-card">
          <h3 className="text-lg font-semibold mb-4">24h 成交量</h3>
          <div className="text-3xl font-bold text-primary">$2.1B</div>
          <div className="text-sm text-muted-foreground">总交易量</div>
          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <span>BTC/USDT</span>
              <span className="text-bull">+2.4%</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>ETH/USDT</span>
              <span className="text-bull">+1.8%</span>
            </div>
          </div>
        </div>
        
        <div className="trading-card">
          <h3 className="text-lg font-semibold mb-4">活跃交易对</h3>
          <div className="text-3xl font-bold text-primary">1,247</div>
          <div className="text-sm text-muted-foreground">可用交易对</div>
          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <span>现货</span>
              <span>856</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>合约</span>
              <span>391</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 