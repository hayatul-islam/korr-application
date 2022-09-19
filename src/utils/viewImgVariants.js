const viewImgVariants = {
  offscreen: {
    opacity: 0.1,
    // scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    // scale: 1,
    transition: {
      duration: 1,
      delay: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export default viewImgVariants;
