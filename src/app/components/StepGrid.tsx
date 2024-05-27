'use client';

import StepItem from './StepItem';
import { Variants, motion } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.1,
      staggerChildren: 0.3,
      type: 'spring',
      stiffness: 0.5,
    },
  },
};

const StepGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0,
        once: true,
      }}
      exit="hidden"
      className="grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-[32px]"
    >
      <StepItem step={1} label="onchain-summer.devfolio.co" image="/steps/1.png" />
      <StepItem step={2} label="Stake 0.002 ETH" image="/steps/2.png" />
      <StepItem step={3} label="Mint your NFT" image="/steps/3.png" />
      <StepItem step={4} label="Build in the Onchain Summer! 🛠️" image="/steps/4.png" />
    </motion.div>
  );
};

export default StepGrid;
