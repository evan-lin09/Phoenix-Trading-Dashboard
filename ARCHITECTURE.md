# 🏗️ Phoenix Trading Dashboard - 架构设计

## 📋 项目概述

Phoenix Trading Dashboard 是一个现代化的交易平台，采用微前端架构，参考[币安交易所](https://www.binance.com/zh-CN)的设计理念。

## 🛠️ 技术栈

### 核心技术
- **Framework**: Next.js 15.4.4 (App Router + SSR)
- **Runtime**: React 19.0 (最新版本)
- **UI Library**: HeroUI (官方推荐)
- **Language**: TypeScript 5.0+
- **Build Tool**: Turborepo (Monorepo)
- **Package Manager**: pnpm 10.13.1

### 功能特性
- 🌍 **国际化**: i18next + react-i18next
- 🎨 **主题系统**: next-themes + HeroUI themes
- ⚡ **SSR渲染**: 首页快速响应
- 🔄 **微前端**: Module Federation
- 📱 **响应式**: 移动端适配

## 🏛️ 应用架构

### 主应用 (main-app)
- **职责**: 布局、路由、认证、国际化、主题
- **技术**: Next.js 15 SSR + App Router
- **端口**: 3000

### 子应用

#### 1. 现货交易 (spot-trading)
- **功能**: 现货买卖、订单簿、K线图
- **端口**: 3001
- **特色**: 实时数据流、高频交互

#### 2. 合约交易 (futures-trading)  
- **功能**: 期货合约、杠杆交易、风险管理
- **端口**: 3002
- **特色**: 复杂交易逻辑、风控

#### 3. 理财产品 (earn)
- **功能**: 存币生息、DeFi产品、收益统计
- **端口**: 3003
- **特色**: 收益计算、产品推荐

#### 4. 个人面板 (dashboard)
- **功能**: 资产概览、交易记录、设置
- **端口**: 3004  
- **特色**: 数据可视化、个性化

## 📦 共享包设计

### packages/ui
- HeroUI组件封装
- 自定义业务组件
- 图标库和样式

### packages/i18n
- 多语言资源文件
- 国际化工具函数
- 语言切换逻辑

### packages/theme
- 主题配置
- CSS变量管理
- 明暗主题切换

### packages/types
- TypeScript类型定义
- API接口类型
- 公共数据模型

### packages/utils
- 工具函数库
- 格式化函数
- 常量定义

## 🚀 部署策略

### 开发环境
```bash
# 启动所有应用
pnpm dev

# 单独启动应用
pnpm dev:main    # 主应用
pnpm dev:spot    # 现货交易
pnpm dev:futures # 合约交易
pnpm dev:earn    # 理财产品
pnpm dev:dashboard # 个人面板
```

### 生产环境
- **主应用**: Vercel (SSR优化)
- **子应用**: 独立部署 (支持独立发版)
- **CDN**: 静态资源加速

## 🎯 性能优化

### SSR优化
- 首页服务端渲染
- 关键数据预取
- SEO优化

### 微前端优化
- 按需加载子应用
- 共享依赖去重
- 代码分割优化

### 交互优化
- 实时数据流
- 乐观更新
- 骨架屏加载

## 📊 参考设计

基于[币安交易所](https://www.binance.com/zh-CN)的设计理念：
- 专业的交易界面
- 清晰的信息层级
- 高效的操作流程
- 优秀的用户体验 