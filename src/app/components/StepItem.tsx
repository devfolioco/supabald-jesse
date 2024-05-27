'use client';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const StepItem = ({ step, label, image, href }: { step: number; label: string; image: string; href: string }) => {
  return (
    <motion.div variants={variants} className="step-item flex flex-col items-center">
      <div className="step-item-id text-[36px] md:text-[48px] hero-heading-700">{step}</div>
      <Link href={href} target="_blank">
        <Image src={image} alt={label} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        <div className="step-item-label step-item text-[20px] md:text-[24px] hero-heading-700 w-full px-[20px] md:px-[40px] py-[16px] md:py-[20px] my-[24px] text-center">
          {label}
        </div>
      </Link>
    </motion.div>
  );
};

export default StepItem;
