import Image from 'next/image';

const OnchainTypography = () => {
  return (
    <div className="w-screen">
      <Image
        src="/onchain-typography.svg"
        alt="Onchain Summer"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default OnchainTypography;
