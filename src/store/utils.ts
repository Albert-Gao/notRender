import posed from 'react-pose';

export const getAnimationParams = (value: number) => ({
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: { x: value, opacity: 0 },
});

export const FromRight = posed.div(
  getAnimationParams(100),
);

export const FromLeft = posed.div(
  getAnimationParams(-100),
);
