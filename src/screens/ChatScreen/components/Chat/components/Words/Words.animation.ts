import posed from 'react-pose';

export const ScaleBox = posed.div({
  initialPose: 'exit',
  enter: {
    scaleX: 1,
    originX: 0,
    originY: 0,
    applyAtEnd: { width: 'auto' },
    transition: {
      delay: 420,
      duration: 800,
    },
  },
  exit: { scaleX: 0, originX: 0, originY: 0 },
});

export const FadeChildWithDelay = posed.div({
  enter: {
    opacity: 1,
    transition: { delay: 780 },
  },
  exit: { opacity: 0 },
});

export const FadeChild = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});
