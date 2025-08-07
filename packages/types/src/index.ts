// 市场数据类型
export interface MarketData {
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

// 交易对类型
export interface TradingPair {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: number;
  change24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
}

// 订单类型
export interface Order {
  id: string;
  symbol: string;
  side: 'buy' | 'sell';
  type: 'market' | 'limit' | 'stop';
  amount: number;
  price?: number;
  status: 'pending' | 'filled' | 'cancelled';
  timestamp: number;
}

// 用户类型
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  preferences: {
    language: 'en' | 'zh';
    theme: 'light' | 'dark' | 'system';
    currency: string;
  };
} 