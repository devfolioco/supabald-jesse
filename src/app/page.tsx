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

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api`);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-screen bg-grid">
      <section className="flex flex-col items-center min-h-screen">
        <Image
          src="/nft.gif"
          width="0"
          height="0"
          alt="NFT"
          className="w-40 h-40 md:w-80 md:h-80 mt-20 mb-6"
          unoptimized
        />
        <div className="max-width-[560px] text-center">
          <h1 className="text-[68px] hero-heading">let’s get Jesse bald!</h1>
          <Ui>Participate in the buildathon. Get more assets on Base.</Ui>
          <Ui>Help us get Jesse bald.</Ui>
        </div>
        <PrimaryButton className="mt-8">Register Now</PrimaryButton>
      </section>

      <section className="mt-16 md:mt-28">
        <OnchainTypography />
      </section>

      <section className="mt-24 md:mt-44">
        <div className="grid grid-rows-2 md:grid-cols-2 gap-4 md:gap-12 max-w-screen-lg px-4 md:px-0">
          <h1 className="text-[48px] hero-heading ">Register for the buildathon on Devfolio.</h1>
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

      <section className="mt-[100px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[68px] hero-heading">How to claim your NFT</h1>
          <Ui className="w-[471px] text-center my-[16px]">
            Show off your NFT by letting everyone know about your contribution.
          </Ui>

          <div className="grid grid-rows-2 grid-cols-2 gap-[32px]">
            <StepItem step={1} label="onchain-summer.devfolio.co" image="/steps/1.png" />
            <StepItem step={2} label="Stake 0.002 ETH" image="/steps/2.png" />
            <StepItem step={3} label="Claim your NFT" image="/steps/3.png" />
            <StepItem step={4} label="Build! 🛠️" image="/steps/4.png" />
          </div>
        </div>
      </section>

      <section className="mt-[100px] pb-[18rem]">
        <h1 className="text-[68px] hero-heading text-center">Jesse in his own words...</h1>
      </section>

      <section className="flex flex-col items-center bg-white w-full p-16">
        <div className="px-32 my-16">
          <Video />
        </div>
        <SecondaryButton className="">Register now</SecondaryButton>
      </section>

      <section className="flex flex-col items-center bg-white w-full p-16 px-48">
        <Footer />
      </section>

      <section className="bg-white relative">
        <OnchainTypography />
      </section>
    </main>
  );
}
