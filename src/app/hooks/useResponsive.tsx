'use client';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    // Return a function from the effect
    // that removes the event listener
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width <= 733,
    isTablet: width >= 744 && width <= 1024,
    isDesktop: width > 1024,
  };
};

export default useIsMobile;
