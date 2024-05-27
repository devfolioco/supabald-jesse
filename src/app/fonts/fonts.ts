import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const nyghtRegular = localFont({
  src: '../fonts/NyghtSerif-Regular.woff2',
  display: 'swap',
});

export const nyghtBold = localFont({
  src: '../fonts/NyghtSerif-Bold.woff2',
  display: 'swap',
});

export const inter = Inter({ subsets: ['latin'] });
