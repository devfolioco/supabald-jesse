import Image from 'next/image';

const PlayPauseIcon = () => {
  return (
    <div>
      <Image src="/play.svg" width={50} height={50} alt="play" />
    </div>
  );
};

export default PlayPauseIcon;
