'use client';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const YoutubePlayer = ({ url }: { url: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoContainerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      /* Store the updated height of the video container in --video-height css variable. (Used to translate the video element to -50% at Y-axis) */
      document.documentElement.style.setProperty('--video-height', `${videoContainerRef.current?.clientHeight ?? 0}px`);
    });
    resizeObserver.observe(videoContainerRef.current);
    return () => resizeObserver.disconnect();
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div ref={videoContainerRef} className="w-full">
      <div className="w-full transform-top-50-video flex justify-center items-center rounded-[8px] md:rounded-[24px] overflow-hidden mx-auto max-w-[1350px]">
        <ReactPlayer
          width="100%"
          height="100%"
          controls={false}
          config={{
            youtube: {
              embedOptions: {
                controls: false,
              },
            },
          }}
          style={{
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            aspectRatio: '16/9',
          }}
          url={url}
        />
      </div>
    </div>
  );
};

export { YoutubePlayer };
