# Phoenix UI 图标系统

基于 `@iconify/react` 构建的统一图标管理系统，为 Phoenix Trading Dashboard 提供一致的图标使用体验。

## 🚀 特性

- ✅ **统一管理** - 所有图标在 `packages/ui` 中集中管理
- ✅ **类型安全** - 完整的 TypeScript 支持
- ✅ **预定义图标** - 交易平台常用图标预设
- ✅ **灵活自定义** - 支持 Iconify 的所有图标集
- ✅ **性能优化** - 按需加载，体积小巧

## 📦 安装

图标已在 `@phoenix/ui` 包中配置，无需额外安装。

## 🎯 基础使用

### 1. 导入图标组件

```tsx
import { Icon, TradingIcon } from '@phoenix/ui';
```

### 2. 使用预定义的交易图标

```tsx
// 基础使用
<TradingIcon name="bitcoin" />

// 自定义大小和样式
<TradingIcon name="chart" size={24} className="text-blue-500" />

// 更多示例
<TradingIcon name="trendUp" size={20} />
<TradingIcon name="menu" size={16} />
<TradingIcon name="sun" className="text-yellow-500" />
```

### 3. 使用通用图标组件

```tsx
// 使用任意 Iconify 图标
<Icon name="heroicons:home" size={20} />
<Icon name="lucide:settings" color="#3B82F6" />
<Icon name="mdi:account" className="hover:text-blue-500" />
```

## 📋 预定义图标列表

### 交易相关
- `chart` - 柱状图
- `chartLine` - 折线图  
- `trendUp` - 上涨趋势
- `trendDown` - 下跌趋势

### 币种相关
- `bitcoin` - 比特币
- `ethereum` - 以太坊
- `usdt` - USDT

### 操作相关
- `buy` - 买入
- `sell` - 卖出
- `exchange` - 交换

### 导航相关
- `home` - 首页
- `user` - 用户
- `settings` - 设置
- `menu` - 菜单
- `close` - 关闭

### 状态相关
- `success` - 成功
- `error` - 错误
- `warning` - 警告
- `info` - 信息

### 主题相关
- `sun` - 太阳/浅色主题
- `moon` - 月亮/深色主题

### 工具相关
- `search` - 搜索
- `filter` - 筛选
- `refresh` - 刷新
- `download` - 下载
- `upload` - 上传

## 🛠️ API 参考

### Icon 组件

```tsx
interface IconProps {
  name: string;           // Iconify 图标名称
  size?: number | string; // 图标大小 (默认: 20)
  color?: string;         // 图标颜色
  className?: string;     // CSS 类名
}
```

### TradingIcon 组件

```tsx
interface TradingIconProps {
  name: TradingIconName;  // 预定义图标名称
  size?: number | string; // 图标大小 (默认: 20)
  color?: string;         // 图标颜色
  className?: string;     // CSS 类名
}
```

## 🎨 样式定制

### 使用 Tailwind 类

```tsx
<TradingIcon 
  name="bitcoin" 
  className="text-orange-500 hover:text-orange-600 transition-colors" 
/>
```

### 使用内联样式

```tsx
<Icon 
  name="heroicons:star" 
  style={{ color: '#FFD700', fontSize: '24px' }} 
/>
```

## 🔍 查找更多图标

访问 [Iconify 图标搜索](https://icon-sets.iconify.design/) 查找更多可用图标：

- **Heroicons**: `heroicons:icon-name`
- **Lucide**: `lucide:icon-name`  
- **Material Design**: `mdi:icon-name`
- **Cryptocurrency**: `cryptocurrency:coin-name`
- **Font Awesome**: `fa:icon-name`

## 📝 最佳实践

1. **优先使用 TradingIcon** - 对于常用的交易相关图标
2. **保持尺寸一致** - 在同一界面区域使用相同尺寸
3. **遵循设计规范** - 与主题色彩和间距保持一致
4. **语义化命名** - 图标名称要直观表达其用途

## 🔧 添加新的预定义图标

如需添加新的常用图标到 `TradingIcons`：

```tsx
// packages/ui/src/components/Icon.tsx
export const TradingIcons = {
  // ... existing icons
  newIcon: 'icon-set:icon-name',
} as const;
```

## 🏗️ 项目集成示例

在应用中的使用示例：

```tsx
// apps/main-app/src/components/Navigation.tsx
import { TradingIcon } from '@phoenix/ui';

export function Navigation() {
  return (
    <nav>
      <a href="/spot">
        <TradingIcon name="chart" size={16} />
        现货交易
      </a>
      <a href="/futures">
        <TradingIcon name="trendUp" size={16} />
        合约交易
      </a>
    </nav>
  );
}
``` 