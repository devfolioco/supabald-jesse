'use client';
import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    // Clean Up
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width <= 733,
    isTablet: width >= 744 && width <= 1024,
    isDesktop: width > 1024,
    is2K: width > 2648,
  };
};

export default useResponsive;
