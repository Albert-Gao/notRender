import posed from 'react-pose';

const getAnimationParams = (
  value: number,
  onPoseComplete: Function,
) => ({
  enter: {
    x: 0,
    opacity: 1,
    onPoseComplete: onPoseComplete,
  },
  exit: { x: value, opacity: 0 },
});

export const getAnimationWrapper = (
  isFromLeft: boolean,
  onPoseComplete: Function,
) =>
  posed.div(
    getAnimationParams(
      isFromLeft ? -100 : 100,
      onPoseComplete,
    ),
  );
