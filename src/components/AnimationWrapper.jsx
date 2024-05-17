import React from 'react';
import { motion } from 'framer-motion';
// import useScrollAnimation from '../hooks/useScrollAnimation';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimationWrapper = ({ children, direction = 'bottom', threshold = 0.5 }) => {
  const { ref, controls, initialPosition } = useScrollAnimation(direction, threshold);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initialPosition}
      transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
