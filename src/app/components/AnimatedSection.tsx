'use client';
import { MotionProps, Variants, motion } from 'framer-motion';

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const AnimatedSection = ({ children, ...props }: MotionProps & React.ComponentProps<'input'>) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
