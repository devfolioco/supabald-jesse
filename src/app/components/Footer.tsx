import Link from 'next/link';
import { inter } from '../fonts/fonts';

const Footer = () => {
  return (
    <div
      className={`${inter.className} ui-text flex flex-col md:flex-row gap-6 footer w-full py-8 md:px-8 my-16 max-w-[1350px]`}
    >
      <div className="flex gap-2 items-center">
        {`Made with <3 at`}
        <Link target="_blank" href="https://devfolio.co" className="underline">
          Devfolio
        </Link>
      </div>

      <div className="flex-grow"></div>

      <div className="flex gap-8">
        <Link target="_blank" href="https://x.com/devfolio" className="underline">
          Twitter / X
        </Link>
        <Link target="_blank" href="https://warpcast.com/devfolio" className="underline">
          Farcaster
        </Link>
      </div>
    </div>
  );
};

export default Footer;
