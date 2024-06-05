import './styles/app.css';
import { getFrameMetadata } from 'frog/next';
import type { Metadata } from 'next';
import HomeSection from './sections/HomeSection';
import TypographySection from './sections/TypographySection';
import WhySection from './sections/WhySection';
import MintStepsGridSection from './sections/MintStepsGridSection';
import VideoSection from './sections/VideoSection';
import FooterSection from './sections/FooterSection';

import { APP_URL } from './utils/shared';

export async function generateMetadata(): Promise<Metadata> {
  const url = APP_URL;
  const frameMetadata = await getFrameMetadata(`${url}/api`);

  return {
    other: frameMetadata,
  };
}

export default function Home({ searchParams }: { searchParams: { ref_code?: string } }) {
  const referralCode = searchParams.ref_code;
  const registrationUrl = `https://onchain-summer.devfolio.co${referralCode ? '?ref_code=' + referralCode : ''}`;

  return (
    <main className="flex flex-col items-center min-h-screen w-screen bg-grid bg-primary">
      {/* Let's get jesse bald */}
      <HomeSection registrationUrl={registrationUrl} />

      {/* Animated Typography */}
      <TypographySection />

      {/* Because that's what he said... */}
      <WhySection registrationUrl={registrationUrl} />

      {/* Mint your SupaBald Jesse NFT */}
      <MintStepsGridSection />

      {/* We're not making this up. Hear it from Jesse himself! */}
      <VideoSection />

      {/* Footer & Animated */}
      <FooterSection registrationUrl={registrationUrl} />
    </main>
  );
}
