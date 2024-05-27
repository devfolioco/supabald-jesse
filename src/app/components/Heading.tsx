import { nyghtRegular } from '../fonts/fonts';

const Heading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h1 className={`text-[56px] md:text-[68px] hero-heading ${nyghtRegular.className} ${className ?? ''}`}>
      {children}
    </h1>
  );
};

export default Heading;
