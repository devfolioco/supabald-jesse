import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Tooltip from '../components/Tooltip';
import Ui from '../components/Ui';
import { BLOG_URL } from '../constants/Urls';

const baseGodScreenshot = (
  <Image
    width={402}
    height={214}
    className="max-w-[402px] h-[auto] rounded-lg"
    src="/base-god-ss.png"
    alt="Base God Mesage on telegram"
  />
);

const WhySection = ({ projectsUrl }: { projectsUrl: string }) => {
  return (
    <AnimatedSection id="why" className="w-full px-6 md:px-8 lg:px-52 mt-[162px] md:mt-12 md:pt-36">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:max-w-[664px] lg:max-w-[950px] 2k:max-w-[1350px] m-auto">
        <Heading className="max-w-[390px]">Because that’s what he said...</Heading>
        <div className="flex flex-col gap-14">
          <Ui className="md:max-w-[306px] lg:max-w-[1280px] 2k:max-w-[1350px]">
            <p>
              In a galaxy not so far away, the{' '}
              <Tooltip className="hidden md:inline-flex" message={baseGodScreenshot}>
                Base God commune
              </Tooltip>
              <a className="inline md:hidden underline" href="/base-god-ss.png" target="_blank">
                Base God commune
              </a>{' '}
              to be precise, Jesse committed to shaving his head off when Base hits 10 billion in TVL. Join this quest
              to hold him accountable and claim a SupaBald Jesse NFT for your contribution.
            </p>
            <br />
            <p>
              Participate in the buildathon, create breakout experiences, push Base TVL to the moon, and get Jesse bald.
            </p>
          </Ui>

          <div className="w-full grid grid-rows-2 grid-cols-1 gap-[16px] md:gap-[32px] md:grid-rows-1 md:grid-cols-2">
            <Button href={projectsUrl} variant="primary" className="w-full">
              View Projects
            </Button>
            <Button href={BLOG_URL} variant="outlined" className="w-full">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhySection;
