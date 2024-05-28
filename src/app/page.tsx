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

// export async function generateMetadata(): Promise<Metadata> {
//   const url = APP_URL
//   const frameMetadata = await getFrameMetadata(`${url}/api`)

//   return {
//     other: frameMetadata,
//   };
// }

export default function Home({ searchParams }: { searchParams: { ref_code?: string } }) {
  const referralCode = searchParams.ref_code;
  const registrationUrl = `https://onchain-summer.devfolio.co${referralCode ? '?ref_code=' + referralCode : ''}`;

  return (
    <>
      <meta name="fc:frame" content="vNext" />
      <meta name="fc:frame:image" content="https://letsgetjessebald.com/nft-fc.gif" />
      <meta name="og:image" content="https://letsgetjessebald.com/nft-fc.gif" />
      <meta name="fc:frame:post_url" content="https://letsgetjessebald.com/api?initialPath=%252Fapi&amp;previousButtonValues=%2523A__l%252C%252C_l" />
      <meta name="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta name="fc:frame:button:1" content="Mint your NFT" />
      <meta name="fc:frame:button:1:action" content="link" />
      <meta name="fc:frame:button:1:target" content="https://letsgetjessebald.com" />
      <meta name="fc:frame:button:2" content="Nominate a fren" />
      <meta name="fc:frame:button:2:action" content="post" />
      <meta name="fc:frame:button:2:target" content="https://letsgetjessebald.com/api/nominate/a442708f-9fbd-4458-b45d-65502427b7fa?initialPath=%252Fapi&amp;previousButtonValues=%2523A__l%252C%252C_l" />
      <meta name="fc:frame:button:3" content="View collection" />
      <meta name="fc:frame:button:3:action" content="link" />
      <meta name="fc:frame:button:3:target" content="https://opensea.io/collection/supabald-jesse" />
      <meta name="frames.js:version" content="0.16.4" />
      <main className="flex flex-col items-center min-h-screen w-screen bg-grid bg-primary">
        {/* Let's get jesse bald */}
        <HomeSection registrationUrl={registrationUrl} />

        {/* Animated Typograhy */}
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
    </>

  );
}
