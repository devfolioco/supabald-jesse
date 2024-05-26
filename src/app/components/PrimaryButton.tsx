import Link from 'next/link';

const PrimaryButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <Link
      href="/"
      className={`h-[60px] md:h-[68px] button primary-button text-[20px] md:text-[24px] w-full md:w-auto py-[20px] md:px-[32px] lg:px-[56px] ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
