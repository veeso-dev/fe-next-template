import { Inter } from 'next/font/google';

import './globals.css';
import Head from '@/src/js/components/Head';
import TRANSLATIONS, { getNavigatorLanguage } from '@/src/js/utils/locale';
import CookieBar from '@/src/js/components/CookieBar';
import Footer from '@/src/js/components/Footer';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getNavigatorLanguage();

  return (
    <html lang={getNavigatorLanguage()}>
      <Head />
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={TRANSLATIONS[locale]}>
          <main>{children}</main>
          <Footer />
          <CookieBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
