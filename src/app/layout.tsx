import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import ApplePeekArea from './components/ApplePeekArea';
import { inter } from './fonts/fonts';

export const metadata: Metadata = {
  title: 'Let’s get Jesse bald!',
  description: 'Participate in the buildathon. Get more assets on Base. Help us get Jesse bald.',
  openGraph: {
     'type': "website",
     'url': 'https://letsgetjessebald.com/',
     'title': 'SupaBald Jesse',
     'description': 'Build the next based experience at the Onchain Summer Buildathon and watch Jesse go bald ;)',
     images: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SupaBald Jesse',
    description: 'Build the next based experience at the Onchain Summer Buildathon and watch Jesse go bald ;)',
    images: '/og-image.png'
  },
  icons: {
    icon: '/favicon_io/favicon.gif',
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
        <title>SupaBald Jesse</title>
      </Head>
      <body>
        {children}
        <ApplePeekArea />
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}
