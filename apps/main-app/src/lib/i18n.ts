import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 英文资源
const enResources = {
  common: {
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    more: 'More',
  },
  nav: {
    home: 'Home',
    spot: 'Spot Trading',
    futures: 'Futures',
    earn: 'Earn',
    dashboard: 'Dashboard',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
  },
  trading: {
    buy: 'Buy',
    sell: 'Sell',
    price: 'Price',
    amount: 'Amount',
    total: 'Total',
    volume: 'Volume',
    change: 'Change',
    high: 'High',
    low: 'Low',
    market: 'Market',
    limit: 'Limit',
    stop: 'Stop',
  },
  hero: {
    title: 'The World\'s Leading Crypto Trading Platform',
    subtitle: 'Trade Bitcoin, Ethereum, and hundreds of cryptocurrencies',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
  },
  market: {
    overview: 'Market Overview',
    gainers: 'Top Gainers',
    losers: 'Top Losers',
    marketCap: 'Market Cap',
    dominance: 'Dominance',
  }
};

// 中文资源
const zhResources = {
  common: {
    loading: '加载中...',
    error: '错误',
    retry: '重试',
    cancel: '取消',
    confirm: '确认',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    search: '搜索',
    filter: '筛选',
    sort: '排序',
    more: '更多',
  },
  nav: {
    home: '首页',
    spot: '现货交易',
    futures: '合约交易',
    earn: '理财',
    dashboard: '仪表盘',
    profile: '个人资料',
    settings: '设置',
    logout: '退出登录',
  },
  trading: {
    buy: '买入',
    sell: '卖出',
    price: '价格',
    amount: '数量',
    total: '总额',
    volume: '成交量',
    change: '涨跌',
    high: '最高',
    low: '最低',
    market: '市价',
    limit: '限价',
    stop: '止损',
  },
  hero: {
    title: '全球领先的加密货币交易平台',
    subtitle: '交易比特币、以太坊和数百种加密货币',
    getStarted: '立即开始',
    learnMore: '了解更多',
  },
  market: {
    overview: '市场概览',
    gainers: '涨幅榜',
    losers: '跌幅榜',
    marketCap: '市值',
    dominance: '占比',
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enResources,
      zh: zhResources,
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 