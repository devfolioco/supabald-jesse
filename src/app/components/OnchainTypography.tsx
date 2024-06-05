'use client';
import Image from 'next/image';
import useResponsive from '../hooks/useResponsive';
import { Variants, motion, useScroll, useTransform } from 'framer-motion';

const OnchainTypography = () => {
  const { isMobile, isTablet, isDesktop, is2K } = useResponsive();

  /* Typography left and right animation on scroll */
  const { scrollYProgress } = useScroll();
  const scrollYProgressInverted = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const objectPositionMoveLeft = useTransform(scrollYProgress, value => `${-1 * value * 1000}px 100%`);
  const objectPositionMoveRight = useTransform(scrollYProgressInverted, value => `${-1 * value * 1000}px 100%`);

  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <motion.div
      className="w-screen overflow-hidden"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{
        amount: 0,
        once: true,
      }}
    >
      {/* All Desktop Screens */}
      {isDesktop && (
        <>
          {/* Desktop 1080p */}
          {!is2K && (
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

          {/* Desktop 2k */}
          {is2K && (
            <>
              <motion.img
                src="/onchain-4k-1.svg"
                alt="Onchain Summer"
                className="h-48 w-full object-cover"
                style={{ objectPosition: objectPositionMoveLeft }}
              />

              <motion.img
                src="/onchain-4k-2.svg"
                alt="Onchain Summer"
                className="h-48 w-full object-cover"
                style={{ objectPosition: objectPositionMoveRight }}
              />
            </>
          )}
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
    </motion.div>
  );
};

export default OnchainTypography;
