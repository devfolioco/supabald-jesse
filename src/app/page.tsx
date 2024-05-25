import Image from 'next/image';
import './styles/app.css';
import Ui from './components/Ui';
import PrimaryButton from './components/PrimaryButton';
import OnchainTypography from './components/OnchainTypography';
import StepItem from './components/StepItem';
import Video from './components/Video';
import SecondaryButton from './components/SecondaryButton';
import Footer from './components/Footer';
import { getFrameMetadata } from 'frog/next';
import type { Metadata } from 'next';
import HomeSection from './components/sections/HomeSection';
import TypographySection from './components/sections/TypographySection';

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api`);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-screen bg-grid">
      <HomeSection />
      <TypographySection />
      <section className="mt-24 md:mt-44">
        <div className="flex flex-col md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-12 max-w-screen-lg px-4 lg:px-0">
          <h1 className="text-[44px] md:text-[48px] hero-heading ">Register for the buildathon on Devfolio.</h1>
          <div className="flex flex-col gap-14">
            <Ui>
              Jesse has committed to shaving his head when Base reaches 10 Billion TVL. We need your help to make it
              happen. Jesse has committed to shaving his head when Base reaches 10 Billion TVL. Jesse has committed to
              shaving his head when Base reaches 10 Billion TVL.
            </Ui>
            <PrimaryButton className="w-full">Register now on Devfolio</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="mt-[100px] w-screen">
        <div className="flex flex-col items-center px-4">
          <h1 className="text-[44px] hero-heading">How to claim your NFT</h1>
          <Ui className="max-w-[471px] md:text-center my-[16px]">
            Show off your NFT by letting everyone know about your contribution.
          </Ui>

          <div className="grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-[32px]">
            <StepItem step={1} label="onchain-summer.devfolio.co" image="/steps/1.png" />
            <StepItem step={2} label="Stake 0.002 ETH" image="/steps/2.png" />
            <StepItem step={3} label="Claim your NFT" image="/steps/3.png" />
            <StepItem step={4} label="Build!  🛠️" image="/steps/4.png" />
          </div>
        </div>
      </section>

      <section className="mt-[100px]">
        <h1 className="text-[44px] md:text-[68px] hero-heading text-center">Jesse in his own words...</h1>
        <div className="w-full h-[calc(var(--video-height)/2)]"></div>
      </section>

      <section className="flex flex-col items-center bg-white w-full px-4 md:px-16 md:pb-16 relative -top-[calc(var(--video-height)/2)]">
        <div className="px-32 my-16">
          <Video />
        </div>
        <SecondaryButton className="">Register now at Devfolio</SecondaryButton>
      </section>

      <section className="bg-white relative pt-16">
        <OnchainTypography />
      </section>
    </main>
  );
}
