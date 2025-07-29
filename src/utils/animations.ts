import { Variants } from "framer-motion";

// Animation settings
export const defaultTransition = {
  duration: 0.8,
  ease: [0.23, 1, 0.32, 1]
};

// Viewport options without 'once: true' to make animations repeatable
export const viewportOptions = {
  margin: "-100px",
  amount: 0.3
};

// Burst animation
export const burstIn: Variants = {
  initial: { 
    scale: 0.3, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: defaultTransition
  }
};

// Slide animations with smoother transitions
export const slideInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -100,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export const slideInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 100,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export const slideInTop: Variants = {
  initial: { 
    opacity: 0, 
    y: -50 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: defaultTransition
  }
};

export const slideInBottom: Variants = {
  initial: { 
    opacity: 0, 
    y: 50 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: defaultTransition
  }
};

// Fade animations
export const fadeIn: Variants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: defaultTransition
  }
};

// Scale animations
export const scaleUp: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: defaultTransition
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.23, 1, 0.32, 1]
  }
};

// Stagger children animations
export const staggerContainer: Variants = {
  initial: { 
    opacity: 1 
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}; 