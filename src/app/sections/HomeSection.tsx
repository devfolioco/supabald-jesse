import Image from 'next/image';
import Ui from '../components/Ui';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Link from 'next/link';

const HomeSection = ({ registrationUrl }: { registrationUrl: string }) => {
  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-0">
      <Image
        src="/nft.gif"
        width="0"
        height="0"
        alt="NFT"
        className="w-[262px] h-[262px] md:w-[328px] md:h-[328px] mt-8 mb-6"
        unoptimized
      />
      <div className="max-width-[560px] lg:max-w-[643px] text-center flex flex-col items-center">
        <Heading className="mb-[16px]">
          Let’s get <br className="block md:hidden" />
          Jesse bald!
        </Heading>
        <Ui className="max-w-[326px] md:max-w-[523px] lg:max-w-[643px]">
          Build the next based experience at the Onchain Summer Buildathon and watch{' '}
          <Link className="underline" target="_blank" href="https://jesse.xyz">
            Jesse
          </Link>{' '}
          go bald ;)
        </Ui>
      </div>
      <div className="w-full grid grid-rows-2 md:grid-cols-2 gap-[16px] md:gap-[24px] mt-[68px] md:mt-8 ">
        <Button href={registrationUrl} variant="primary" className="w-full">
          Register now
        </Button>
        <Button href="#why" sameTab variant="outlined" className="w-full">
          Why would he go bald?
        </Button>
      </div>
    </section>
  );
};

export default HomeSection;
