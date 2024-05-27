import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Ui from '../components/Ui';

const WhySection = ({ registrationUrl }: { registrationUrl: string }) => {
  return (
    <AnimatedSection id="why" className="px-6 md:px-8 lg:px-52 mt-24 md:pt-36">
      <div className="flex flex-col md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-12">
        <Heading className="max-w-[390px]">Because that’s what he said...</Heading>
        <div className="flex flex-col gap-14">
          <Ui className="md:max-w-[306px] lg:max-w-[561px]">
            <p>
              In a galaxy not so far away, Jesse committed to shaving his head off when Base hits 10 billion in TVL.
              Join this quest to hold him accountable and claim a SupaBald Jesse NFT for your contribution.
            </p>
            <br />
            <p>
              Participate in the buildathon, create breakout experiences, push Base TVL to the moon, and get Jesse bald.
            </p>
          </Ui>

          <Button href={registrationUrl} variant="primary" className="w-full">
            <span className="block md:hidden lg:block"> Register now on Devfolio </span>
            <span className=" hidden md:block lg:hidden"> Register now </span>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhySection;
