'use client';

import { Button } from '@heroui/react';
import { useTranslation } from 'react-i18next';

export function InteractiveButton() {
  const { t } = useTranslation();

  return (
    <Button 
      color="primary" 
      size="lg"
      className="text-white"
    >
      {t('hero.getStarted', '立即开始交易')}
    </Button>
  );
} 