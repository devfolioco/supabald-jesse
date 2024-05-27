'use client';
import Image from 'next/image';
import useResponsive from '../hooks/useResponsive';
import { motion, useScroll, useTransform } from 'framer-motion';

const OnchainTypography = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { scrollYProgress } = useScroll();
  const scrollYProgressInverted = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const objectPositionMoveLeft = useTransform(scrollYProgress, value => `${-1 * value * 1000}px 100%`);
  const objectPositionMoveRight = useTransform(scrollYProgressInverted, value => `${-1 * value * 1000}px 100%`);

  return (
    <div className="w-screen overflow-hidden">
      {/* Desktop */}
      {isDesktop && (
        <>
          <motion.img
            src="/onchain-d1.svg"
            alt="Onchain Summer"
            className="h-48 w-full object-cover"
            style={{ objectPosition: objectPositionMoveLeft }}
          />

          <motion.img
            src="/onchain-d2.svg"
            alt="Onchain Summer"
            className="h-48 w-full object-cover"
            style={{ objectPosition: objectPositionMoveRight }}
          />
        </>
      )}

      {/* Tablet */}
      {isTablet && (
        <Image
          src="/onchain-tablet.svg"
          alt="Onchain Summer"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      )}

      {/* Mobile */}
      {isMobile && (
        <>
          <Image
            src="/onchain-m1.svg"
            alt="Onchain Summer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/onchain-m2.svg"
            alt="Onchain Summer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/onchain-m3.svg"
            alt="Onchain Summer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/onchain-m4.svg"
            alt="Onchain Summer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </>
      )}
    </div>
  );
};

export default OnchainTypography;
