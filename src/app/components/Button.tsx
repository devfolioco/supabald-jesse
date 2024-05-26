import Link from 'next/link';

const Button = ({
  children,
  className,
  href = '/',
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant: 'outlined' | 'primary' | 'secondary';
}) => {
  return (
    <Link
      href={href}
      className={`h-[60px] md:h-[68px] button ${variant}-button text-[20px] md:text-[24px] w-full md:w-auto py-[20px] md:px-[32px] lg:px-[56px] ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
