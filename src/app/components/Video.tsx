'use client';
import { useEffect, useRef, useState } from 'react';
import PlayPauseIcon from './PlayPauseIcon';
import { CgPlayButton, CgPlayPause } from 'react-icons/cg';
import { AnimatePresence, m } from 'framer-motion';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // https://stackoverflow.com/questions/68175873/detect-element-reference-height-change

  // useEffect(() => {
  //   if (!videoRef.current) return;
  //   const resizeObserver = new ResizeObserver(() => {
  //     // Do what you want to do when the size of the element changes
  //     if (!videoRef.current) return;
  //     console.log(videoRef.current.clientHeight);
  //     document.documentElement.style.setProperty('--hero-video--height', `${videoRef.current.clientHeight}px`);
  //   });
  //   resizeObserver.observe(videoRef.current);
  //   return () => resizeObserver.disconnect(); // clean up
  // }, [videoRef]);

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
    <div className="video-container p-[32px] flex justify-center items-center">
      <video ref={videoRef} controls={false} onClick={() => togglePlayPause()} onEnded={() => togglePlayPause()}>
        <source src="/jesse-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <AnimatePresence>
        {!isPlaying && (
          <m.div variants={variants} initial="visible" animate="hidden" exit="visible" className="video-overlay">
            <button className="control-btn" onClick={togglePlayPause}>
              {isPlaying ? (
                <CgPlayPause style={{ width: '50px', height: '50px' }} className="pause-btn m-auto" />
              ) : (
                <CgPlayButton style={{ width: '50px', height: '50px' }} className="play-btn m-auto" />
              )}
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;
