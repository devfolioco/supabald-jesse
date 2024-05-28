import AnimatedSection from '../components/AnimatedSection';
import Heading from '../components/Heading';
import StepGrid from '../components/StepGrid';
import Ui from '../components/Ui';

const MintStepsGridSection = () => {
  return (
    <AnimatedSection className="px-6 md:px-8 lg:px-52 pt-52 w-screen">
      <div className="flex flex-col items-center">
        <Heading className="md:text-center">Mint your SupaBald Jesse NFT</Heading>
        <Ui className="md:text-center my-[16px] md:max-w-[500px] lg:max-w-[763px]">
          For being based and boosting Base TVL, we&apos;ve got a little reward for you!
        </Ui>

        <StepGrid />
      </div>
    </AnimatedSection>
  );
};

export default MintStepsGridSection;
