import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Let’s get Jesse bald!',
  description: 'Participate in the buildathon. Get more assets on Base. Help us get Jesse bald.',
  icons: {
    icon: '/favicon_io/favicon.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon_io/favicon.gif" type="image/gif" />
        <link rel="icon" href="/favicon_io/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
