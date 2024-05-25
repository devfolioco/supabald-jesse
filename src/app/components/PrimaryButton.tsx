import Link from 'next/link';

const PrimaryButton = ({ children, className }: { children: string; className?: string }) => {
  return (
    <Link href="/" className={`button primary-button ${className}`}>
      {children}
    </Link>
  );
};

export default PrimaryButton;
