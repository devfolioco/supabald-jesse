import AnimatedSection from '../components/AnimatedSection';
import Heading from '../components/Heading';
import { YoutubePlayer } from '../components/YoutubePlayer';

const VideoSection = () => {
  return (
    <AnimatedSection className="w-full">
      <div className="px-6 md:px-8 lg:px-52 mt-40">
        <Heading className="md:text-center md:max-w-[664px] lg:max-w-[950px] mb-[80px] mx-auto">
          We&apos;re not making this up. Hear it from Jesse himself!
        </Heading>
        {/* This element adds invisible space for the next video element to be translated Y -50% */}
        <div className="w-full half-video-height"></div>
      </div>
      <div className="bg-white px-6 md:px-8 lg:px-52 bg-grid-white negative-margin-50-video flex flex-col items-center w-full">
        <YoutubePlayer url="https://www.youtube.com/watch?v=12ks-JzqLrE&t=2083s&rel=0" />
      </div>
    </AnimatedSection>
  );
};

export default VideoSection;
