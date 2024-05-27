'use client';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Variants, motion } from 'framer-motion';

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
};

const YoutubePlayer = ({ url }: { url: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoContainerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Do what you want to do when the size of the element changes
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
    <div ref={videoContainerRef} className="w-full">
      <div className="video-container w-full transform-top-50-video mb-16  flex justify-center items-center">
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
    </div>
  );
};

export { YoutubePlayer };
