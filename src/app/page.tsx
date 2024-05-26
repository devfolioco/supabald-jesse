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
        <div className="flex flex-col md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-12 max-w-screen-lg px-6 md:px-8 lg:px-0">
          <h1 className="text-[56px] md:text-[68px] hero-heading max-w-[390px]">Because that's what he said...</h1>
          <div className="flex flex-col gap-14">
            <Ui className="md:max-w-[306px] lg:max-w-[561px]">
              <p>
                In a galaxy not so far away, Jesse committed to shaving his head off when Base hits 10 billion in TVL.
                It's time to hold him accountable.
              </p>
              <br />
              <p>Join the buildathon, create breakout experiences, push Base TVL to the moon, and get Jesse bald.</p>
            </Ui>

            <PrimaryButton className="w-full">
              <span className="block md:hidden lg:block"> Register now on Devfolio </span>
              <span className=" hidden md:block lg:hidden"> Register now </span>
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="mt-[100px] w-screen">
        <div className="flex flex-col items-center px-6 md:px-8">
          <h1 className="text-[56px] md:text-[68px] hero-heading md:text-center">Mint your SupaBald Jesse NFT</h1>
          <Ui className="md:text-center my-[16px] max-w-[345px] md:max-w-[500px] lg:max-w-[763px]">
            For being based and boosting Base TVL, we’ve got a little reward for you!
          </Ui>

          <div className="grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-[32px]">
            <StepItem step={1} label="onchain-summer.devfolio.co" image="/steps/1.png" />
            <StepItem step={2} label="Stake 0.002 ETH" image="/steps/2.png" />
            <StepItem step={3} label="Mint your NFT" image="/steps/3.png" />
            <StepItem step={4} label="Build in the Onchain Summer! 🛠️" image="/steps/4.png" />
          </div>
        </div>
      </section>

      <section className="mt-[100px]">
        <h1 className="text-[56px] md:text-[68px] hero-heading text-center max-w-[345px] md:max-w-[664px] lg:max-w-[950px]">
          That's what he said. We're not making this up.
        </h1>
        <div className="w-full h-[calc(var(--video-height)/2)]"></div>
      </section>

      <section className="flex flex-col items-center bg-white w-full px-6 md:px-8 md:px-16 md:pb-16 relative -top-[calc(var(--video-height)/2)]">
        <div className="px-32 my-16">
          <Video />
        </div>
        <SecondaryButton className="">Register & mint your NFT</SecondaryButton>
      </section>

      <section className="bg-white relative pt-16">
        <OnchainTypography />
      </section>
    </main>
  );
}
