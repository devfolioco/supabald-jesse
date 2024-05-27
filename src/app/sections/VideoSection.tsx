import Heading from '../components/Heading';
import { YoutubePlayer } from '../components/YoutubePlayer';

const VideoSection = () => {
  return (
    <>
      <section className="px-6 md:px-8 lg:px-52 mt-44">
        <Heading className="md:text-center max-w-[345px] md:max-w-[664px] lg:max-w-[950px] mb-[80px]">
          We&apos;re not making this up. Hear it from Jesse himself!
        </Heading>
        <div className="w-full half-video-height"></div>
      </section>
      <section className="bg-white px-6 md:px-8 lg:px-52 bg-grid-white negative-margin-50-video flex flex-col items-center w-full">
        <YoutubePlayer url="https://www.youtube.com/watch?v=12ks-JzqLrE&t=2083s&rel=0" />
      </section>
    </>
  );
};

export default VideoSection;
