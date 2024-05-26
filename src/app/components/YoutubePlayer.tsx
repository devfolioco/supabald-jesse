'use client';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const YoutubePlayer = ({ url }: { url: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(videoContainerRef);

    if (!videoContainerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Do what you want to do when the size of the element changes
      console.log(videoContainerRef.current?.clientHeight);
      document.documentElement.style.setProperty('--video-height', `${videoContainerRef.current?.clientHeight ?? 0}px`);
    });
    resizeObserver.observe(videoContainerRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={videoContainerRef}
      className="video-container w-full transform-top-50-video mb-16  flex justify-center items-center" //p-[12px] md:p-[16px] lg:p-[32px]
    >
      <ReactPlayer
        width="100%"
        height="100%" //200px
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
          borderRadius: '24px',
          overflow: 'hidden',
          aspectRatio: '16/9',
        }}
        url={url}
      />
    </div>
  );
};

export { YoutubePlayer };
