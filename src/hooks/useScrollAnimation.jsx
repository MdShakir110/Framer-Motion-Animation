import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (direction = 'bottom', threshold = 0.5) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold,
  });

  const initialPosition = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  }[direction];

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1 });
    } else {
      controls.start(initialPosition);
    }
  }, [controls, inView, initialPosition]);

  return { ref, controls, initialPosition };
};

export default useScrollAnimation;
