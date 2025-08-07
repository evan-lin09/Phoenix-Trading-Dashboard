import { redirect } from 'next/navigation';
import { defaultLocale } from '../middleware';

// 根路由重定向到默认语言
export default function RootPage() {
  redirect(`/${defaultLocale}`);
} 