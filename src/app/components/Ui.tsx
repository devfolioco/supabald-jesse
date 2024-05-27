'use client';
import { motion } from 'framer-motion';

const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Ui = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      exit="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`ui-text ${className} text-[20px] md:text-[22px]`}
    >
      {children}
    </motion.div>
  );
};

export default Ui;
