import Image from 'next/image';

const StepItem = ({ step, label, image }: { step: number; label: string; image: string }) => {
  return (
    <div className="step-item flex flex-col items-center">
      <div className="step-item-id text-[48px] hero-heading-700">{step}</div>
      <Image src={image} alt={label} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      <div className="step-item-label w-fit step-item text-[24px] hero-heading-700 px-[40px] py-[20px] my-[24px] text-center">
        {label}
      </div>
    </div>
  );
};

export default StepItem;
