// Use the section 1 from page.tsx here

import Image from 'next/image';
import Ui from '../Ui';
import PrimaryButton from '../PrimaryButton';
import OutlinedButton from '../OutlinedButton';

const HomeSection = () => {
  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-0">
      <Image
        src="/nft.gif"
        width="0"
        height="0"
        alt="NFT"
        className="w-[262px] h-[262px] md:w-[328px] md:h-[328px] mt-20 mb-6"
        unoptimized
      />
      <div className="max-width-[560px] text-center flex flex-col items-center">
        <h1 className="text-[56px] md:text-[68px] hero-heading mb-[16px]">let’s get Jesse bald!</h1>
        <Ui className="max-w-[326px] md:max-w-[523px] lg:max-w-[643px]">
          Build the next based experience at the Onchain Summer Buildathon and watch Jesse go bald ;)
        </Ui>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[16px] md:gap-[24px] mt-8">
        <PrimaryButton className="w-full">Register Now</PrimaryButton>
        <OutlinedButton className="w-full">Why would he go bald?</OutlinedButton>
      </div>
    </section>
  );
};

export default HomeSection;
