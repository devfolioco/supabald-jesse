'use client';
import Image from 'next/image';
import useResponsive from '../hooks/useResponsive';

const OnchainTypography = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className="w-screen">
      {/* Desktop */}
      {isDesktop && (
        <Image
          src="/onchain-typography.svg"
          alt="Onchain Summer"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
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
