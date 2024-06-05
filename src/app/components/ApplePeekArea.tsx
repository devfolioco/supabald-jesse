/* In Apple devices, scroll has elastic effect and you can scroll beneath the end of page. Here you can customize that area */

import { inter } from '../fonts/fonts';

const ApplePeekArea = () => {
  /* Our little easter egg */
  return <div className={`${inter.className} ui-text ios-peek text-sm`}>Never Stop Building</div>;
};

export default ApplePeekArea;
