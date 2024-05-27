import Image from 'next/image';
import Ui from '../components/Ui';
import Button from '../components/Button';
import Heading from '../components/Heading';

const HomeSection = ({ registrationUrl }: { registrationUrl: string }) => {
  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-0 min-h-screen">
      <Image
        src="/nft.gif"
        width="0"
        height="0"
        alt="NFT"
        className="w-[262px] h-[262px] md:w-[328px] md:h-[328px] mt-20 mb-6"
        unoptimized
      />
      <div className="max-width-[560px] text-center flex flex-col items-center">
        <Heading className="mb-[16px]">Let’s get Jesse bald!</Heading>
        <Ui className="max-w-[326px] md:max-w-[523px] lg:max-w-[643px]">
          Build the next based experience at the Onchain Summer Buildathon and watch Jesse go bald ; )
        </Ui>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[16px] md:gap-[24px] mt-8">
        <Button href={registrationUrl} variant="primary" className="w-full">
          Register Now
        </Button>
        <Button href="#why" variant="outlined" className="w-full">
          Why would he go bald?
        </Button>
      </div>
    </section>
  );
};

export default HomeSection;
