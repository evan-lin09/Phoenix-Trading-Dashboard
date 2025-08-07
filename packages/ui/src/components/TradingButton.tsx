import React from 'react';
import { Button, ButtonProps } from '@heroui/react';

interface TradingButtonProps extends Omit<ButtonProps, 'type' | 'children'> {
  tradingType?: 'buy' | 'sell';
  children: React.ReactNode;
}

export function TradingButton({ 
  tradingType = 'buy', 
  children, 
  className, 
  ...props 
}: TradingButtonProps) {
  const colorMap = {
    buy: 'success',
    sell: 'danger'
  } as const;

  return (
    <Button
      color={colorMap[tradingType]}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
} 