import Link from 'next/link';
import { nyghtBold } from '../fonts/fonts';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant: 'outlined' | 'primary' | 'secondary';
  sameTab?: boolean;
}

const Button = ({ children, className, href = '/', variant, sameTab = false }: ButtonProps) => {
  return (
    <Link
      href={href}
      target={sameTab ? undefined : '_blank'}
      className={`h-[60px] md:h-[68px] button ${variant}-button text-[20px] md:text-[24px] w-full md:w-auto py-[20px] md:px-[32px] ${nyghtBold.className} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
