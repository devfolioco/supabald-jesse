import { nyghtMedium } from '../fonts/fonts';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={`text-[56px] md:text-[68px] hero-heading ${nyghtMedium.className} ${className ?? ''}`}>
      {children}
    </h1>
  );
};

export default Heading;
