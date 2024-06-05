import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const nyghtRegular = localFont({
  src: '../fonts/NyghtSerif-Regular.ttf',
  display: 'swap',
});

export const nyghtBold = localFont({
  src: '../fonts/NyghtSerif-Bold.ttf',
  display: 'swap',
});

export const nyghtMedium = localFont({
  src: '../fonts/NyghtSerif-Medium.ttf',
  display: 'swap',
});

export const inter = Inter({ subsets: ['latin'] });
