import { Inter } from 'next/font/google';

import './globals.css';
import CookieBar from '@/src/js/components/CookieBar';
import Footer from '@/src/js/components/Footer';
import Topbar from '@/src/js/components/Topbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'it'}>
      <body className={inter.className}>
        <Topbar />
        <main>{children}</main>
        <Footer />
        <CookieBar />
      </body>
    </html>
  );
}
