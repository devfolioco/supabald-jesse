// Use the section 1 from page.tsx here

import Image from 'next/image';
import Ui from '../Ui';
import PrimaryButton from '../PrimaryButton';

const HomeSection = () => {
  return (
    <section className="flex flex-col items-center px-4">
      <Image
        src="/nft.gif"
        width="0"
        height="0"
        alt="NFT"
        className="w-[262px] h-[262px] md:w-[328px] md:h-[328px] mt-20 mb-6"
        unoptimized
      />
      <div className="max-width-[560px] text-center">
        <h1 className="text-[56px] md:text-[68px] hero-heading mb-[16px]">let’s get Jesse bald!</h1>
        <Ui>Participate in the buildathon. Get more assets on Base.</Ui>
        <Ui>Help us get Jesse bald.</Ui>
      </div>
      <PrimaryButton className="mt-8">Register Now</PrimaryButton>
    </section>
  );
};

export default HomeSection;
