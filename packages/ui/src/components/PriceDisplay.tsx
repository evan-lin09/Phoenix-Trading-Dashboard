import React from 'react';

interface PriceDisplayProps {
  price: string | number;
  change?: string | number;
  className?: string;
}

export function PriceDisplay({ price, change, className }: PriceDisplayProps) {
  const changeNum = typeof change === 'string' ? parseFloat(change) : change;
  const isPositive = changeNum && changeNum > 0;
  const isNegative = changeNum && changeNum < 0;

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-bold text-lg">${price}</span>
      {change && (
        <span className={`text-sm ${
          isPositive ? 'text-bull' : isNegative ? 'text-bear' : 'text-foreground'
        }`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      )}
    </div>
  );
} 