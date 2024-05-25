import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex footer w-full p-8">
      <div className="flex gap-8">
        <Link href="/">&copy; 2024, NSB Classic PTE LTD</Link>
        <Link href="/">Terms</Link>
        <Link href="/">Privacy</Link>
      </div>

      <div className="flex-grow"></div>

      <div className="flex gap-8">
        <Link href="/">About</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Share Feedback</Link>
      </div>
    </div>
  );
};

export default Footer;
