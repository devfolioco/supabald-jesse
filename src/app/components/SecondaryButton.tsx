import Link from 'next/link';

const SecondaryButton = ({ children, className }: { children: string; className?: string }) => {
  return (
    <Link
      href="/"
      className={`button secondary-button text-[20px] md:text-[24px] w-full md:w-auto py-[20px] md:px-[56px] ${className}`}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
