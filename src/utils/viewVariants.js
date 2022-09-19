const viewVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
export default viewVariants;
