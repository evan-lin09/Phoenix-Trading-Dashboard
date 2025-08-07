'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';
import { TradingIcon } from '@phoenix/ui';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';

export function HeaderControls() {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center space-x-2">
      <Button size='sm'>Log In</Button>
      <Button color="primary" size='sm'>Sign</Button>
      <TradingIcon name='user' size={20} className="hover:cursor-pointer" />
      <TradingIcon name={theme === 'dark' ? 'sun' : 'moon'} className="hover:cursor-pointer" size={20} onClick={toggleTheme} />
      <TradingIcon name='global' size={20} className="hover:cursor-pointer" onClick={toggleLanguage} />
    </div>
  );
} 