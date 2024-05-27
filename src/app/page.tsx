import './styles/app.css';
import Ui from './components/Ui';
import OnchainTypography from './components/OnchainTypography';
import StepItem from './components/StepItem';
import Footer from './components/Footer';
import { getFrameMetadata, isFrameRequest } from 'frog/next';
import type { Metadata } from 'next';
import HomeSection from './components/sections/HomeSection';
import TypographySection from './components/sections/TypographySection';
import Button from './components/Button';
import { YoutubePlayer } from './components/YoutubePlayer';

import { APP_URL } from './utils/shared';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const url = APP_URL
  const frameMetadata = await getFrameMetadata(`${url}/api`)

  return {
    other: frameMetadata,
  };
}

export default function Home({ searchParams }: { searchParams: { ref_code?: string } }) {
  const referralCode = searchParams.ref_code;
  const registrationUrl = `https://devfolio.co/onchain-summer/dashboard?${referralCode ? 'ref_code=' + referralCode : ''}`;

  return (
    <main className="flex flex-col items-center min-h-screen w-screen bg-grid">
      <HomeSection registrationUrl={registrationUrl} />
      <TypographySection />
      <section id="why" className="px-6 md:px-8 lg:px-52 mt-24 md:pt-44">
        <div className="flex flex-col md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-12">
          <h1 className="text-[56px] md:text-[68px] hero-heading max-w-[390px]">Because that&apos;s what he said...</h1>
          <div className="flex flex-col gap-14">
            <Ui className="md:max-w-[306px] lg:max-w-[561px]">
              <p>
                In a galaxy not so far away, Jesse committed to shaving his head off when Base hits 10 billion in TVL.
                Join this quest to hold him accountable and claim a SupaBald Jesse NFT for your contribution.
              </p>
              <br />
              <p>
                Participate in the buildathon, create breakout experiences, push Base TVL to the moon, and get Jesse
                bald.
              </p>
            </Ui>

            <Button href={registrationUrl} variant="primary" className="w-full">
              <span className="block md:hidden lg:block"> Register now on Devfolio </span>
              <span className=" hidden md:block lg:hidden"> Register now </span>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 lg:px-52 mt-44 w-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-[56px] md:text-[68px] hero-heading md:text-center">Mint your SupaBald Jesse NFT</h1>
          <Ui className="md:text-center my-[16px] max-w-[345px] md:max-w-[500px] lg:max-w-[763px]">
            For being based and boosting Base TVL, we&apos;ve got a little reward for you!
          </Ui>

          <div className="grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-[32px]">
            <StepItem step={1} label="onchain-summer.devfolio.co" image="/steps/1.png" />
            <StepItem step={2} label="Stake 0.002 ETH" image="/steps/2.png" />
            <StepItem step={3} label="Mint your NFT" image="/steps/3.png" />
            <StepItem step={4} label="Build in the Onchain Summer! 🛠️" image="/steps/4.png" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 lg:px-52 mt-44">
        <h1 className="text-[56px] md:text-[68px] hero-heading md:text-center max-w-[345px] md:max-w-[664px] lg:max-w-[950px] mb-[80px]">
          We&apos;re not making this up. Hear it from Jesse himself!
        </h1>
        <div className="w-full half-video-height"></div>
      </section>

      <section className="bg-white px-6 md:px-8 lg:px-52 bg-grid-white negative-margin-50-video flex flex-col items-center w-full">
        {/* <Video /> */}
        <YoutubePlayer url="https://www.youtube.com/watch?v=12ks-JzqLrE&t=2083s&rel=0" />
      </section>

      <section className="bg-white px-6 md:px-8 lg:px-52 bg-grid-white flex flex-col items-center w-full">
        <Button href={registrationUrl} variant="secondary">
          Register & mint your NFT
        </Button>
        <Footer />
        <OnchainTypography />
      </section>
    </main>
  );
}
