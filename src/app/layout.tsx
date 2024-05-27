import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import ApplePeekArea from './components/ApplePeekArea';
import { inter } from './fonts/fonts';

export const metadata: Metadata = {
  title: 'Let’s get Jesse bald!',
  description: 'Participate in the buildathon. Get more assets on Base. Help us get Jesse bald.',
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

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://letsgetjessebald.com/" />
        <meta property="og:title" content="SupaBald Jesse | Onchain Summer Buildathon" />
        <meta
          property="og:description"
          content="Build the next based experience at the Onchain Summer Buildathon and watch Jesse go bald ;)"
        />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://letsgetjessebald.com/" />
        <meta name="twitter:title" content="SupaBald Jesse | Onchain Summer Buildathon" />
        <meta
          name="twitter:description"
          content="Build the next based experience at the Onchain Summer Buildathon and watch Jesse go bald ;)"
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <body>
        {children}
        <ApplePeekArea />
      </body>
    </html>
  );
}
