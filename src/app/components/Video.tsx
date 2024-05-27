'use client';
import { useEffect, useRef, useState } from 'react';
import { CgPlayButton, CgPlayPause } from 'react-icons/cg';
import { AnimatePresence, m } from 'framer-motion';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoContainerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Do what you want to do when the size of the element changes
      document.documentElement.style.setProperty('--video-height', `${videoContainerRef.current?.clientHeight ?? 0}px`);
    });
    resizeObserver.observe(videoContainerRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Todo: animations work

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="video-container transform-top-50-video mb-16 p-[12px] md:p-[16px] lg:p-[32px] flex justify-center items-center"
      ref={videoContainerRef}
    >
      <video ref={videoRef} controls={false} onClick={() => togglePlayPause()} onEnded={() => togglePlayPause()}>
        <source src="/jesse-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <AnimatePresence>
        {!isPlaying && (
          <m.div variants={variants} initial="visible" animate="hidden" exit="visible" className="video-overlay">
            <button className="h-16 w-16 md:h-24 md:w-24 control-btn" onClick={togglePlayPause}>
              {isPlaying ? (
                <CgPlayPause className="pause-btn m-auto w-12 h-12" />
              ) : (
                <CgPlayButton className="play-btn m-auto w-12 h-12" />
              )}
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;
