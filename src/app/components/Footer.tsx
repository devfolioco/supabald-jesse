import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="ui-text flex flex-col md:flex-row gap-6 footer w-full py-8 md:px-8 my-12">
      <div className="flex gap-2 items-center">
        Made with
        <FaHeart className="text-red-500 animate-heartbeat" />
        at{' '}
        <Link href="https://devfolio.co" className="underline">
          Devfolio
        </Link>
      </div>

      <div className="flex-grow"></div>

      <div className="flex gap-8">
        <Link href="https://x.com/devfolio" className="underline">
          Twitter / X
        </Link>
        <Link href="http://warpcast.com/devfolio" className="underline">
          Farcaster
        </Link>
      </div>
    </div>
  );
};

export default Footer;
