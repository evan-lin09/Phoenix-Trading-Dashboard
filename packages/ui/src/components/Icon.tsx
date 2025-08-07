import { Icon as IconifyIcon, IconProps as IconifyIconProps } from '@iconify/react';
import { forwardRef } from 'react';

export interface IconProps extends Omit<IconifyIconProps, 'icon'> {
  /** 图标名称，支持 Iconify 的所有图标集 */
  name: string;
  /** 图标大小，可以是数字（px）或字符串 */
  size?: number | string;
  /** 图标颜色 */
  color?: string;
  /** 自定义类名 */
  className?: string;
}

/**
 * 统一的图标组件
 * 基于 @iconify/react 封装，提供一致的图标使用方式
 * 
 * @example
 * // 基础使用
 * <Icon name="heroicons:home" />
 * 
 * // 自定义大小和颜色
 * <Icon name="heroicons:user" size={24} color="#3B82F6" />
 * 
 * // 使用 CSS 类
 * <Icon name="heroicons:cog" className="text-gray-500 hover:text-gray-700" />
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 20, color, className, style, ...props }, ref) => {
    const iconStyle = {
      ...style,
      ...(color && { color }),
      ...(typeof size === 'number' && { fontSize: `${size}px` }),
      ...(typeof size === 'string' && { fontSize: size }),
    };

    return (
      <IconifyIcon
        ref={ref}
        icon={name}
        style={iconStyle}
        className={className}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

// 预定义的交易平台常用图标
export const TradingIcons = {
  // 用户相关
  global: 'heroicons:globe-alt',
  // 交易相关
  chart: 'heroicons:chart-bar',
  chartLine: 'heroicons:chart-line',
  trendUp: 'heroicons:trending-up',
  trendDown: 'heroicons:trending-down',
  
  // 币种相关
  bitcoin: 'cryptocurrency:btc',
  ethereum: 'cryptocurrency:eth',
  usdt: 'cryptocurrency:usdt',
  
  // 操作相关
  buy: 'heroicons:arrow-trending-up',
  sell: 'heroicons:arrow-trending-down',
  exchange: 'heroicons:arrow-path',
  
  // 导航相关
  home: 'heroicons:home',
  user: 'heroicons:user',
  settings: 'heroicons:cog-6-tooth',
  menu: 'heroicons:bars-3',
  close: 'heroicons:x-mark',
  
  // 状态相关
  success: 'heroicons:check-circle',
  error: 'heroicons:x-circle',
  warning: 'heroicons:exclamation-triangle',
  info: 'heroicons:information-circle',
  
  // 主题相关
  sun: 'heroicons:sun',
  moon: 'heroicons:moon',
  
  // 工具相关
  search: 'heroicons:magnifying-glass',
  filter: 'heroicons:funnel',
  refresh: 'heroicons:arrow-path',
  download: 'heroicons:arrow-down-tray',
  upload: 'heroicons:arrow-up-tray',
} as const;

export type TradingIconName = keyof typeof TradingIcons;

/**
 * 交易平台预定义图标组件
 * 
 * @example
 * <TradingIcon name="bitcoin" size={24} />
 * <TradingIcon name="chart" className="text-blue-500" />
 */
export interface TradingIconProps extends Omit<IconProps, 'name'> {
  name: TradingIconName;
}

export const TradingIcon = forwardRef<SVGSVGElement, TradingIconProps>(
  ({ name, ...props }, ref) => {
    return <Icon ref={ref} name={TradingIcons[name]} {...props} />;
  }
);

TradingIcon.displayName = 'TradingIcon'; 