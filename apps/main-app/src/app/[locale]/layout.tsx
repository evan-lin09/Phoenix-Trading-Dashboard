import { Locale } from '../../middleware';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  return (
    <div data-locale={locale}>
      {children}
    </div>
  );
} 