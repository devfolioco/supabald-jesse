import { AnimatedText } from './AnimatedText';

const Heading = ({ children, className }: { children: string; className?: string }) => {
  return (
    <h1 className={`text-[56px] md:text-[68px] hero-heading ${className ?? ''}`}>
      <AnimatedText text={children} once />
    </h1>
  );
};

export default Heading;
