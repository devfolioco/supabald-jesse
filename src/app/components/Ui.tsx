import { inter } from '../fonts/fonts';

interface UiProps {
  children: React.ReactNode;
  className?: string;
}

const Ui = ({ children, className }: UiProps) => {
  return <div className={`ui-text ${className} ${inter.className} text-[20px] md:text-[22px]`}>{children}</div>;
};

export default Ui;
