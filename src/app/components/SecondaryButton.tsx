import Link from 'next/link';

const SecondaryButton = ({ children, className }: { children: string; className?: string }) => {
  return (
    <Link href="/" className={`button secondary-button ${className}`}>
      {children}
    </Link>
  );
};

export default SecondaryButton;
