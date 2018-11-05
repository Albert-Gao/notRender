import React from 'react';
import posed from 'react-pose';
import { inject, observer } from 'mobx-react';
import AppStore from './AppStore';

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
    getAnimationParams(isFromLeft ? -100 : 100, () =>
      setTimeout(onPoseComplete, 170),
    ),
  );

export function injectAnimationStatus(
  index: number,
  Component: React.ComponentType,
) {
  return inject(
    ({ appStore }: { appStore: AppStore }) => ({
      isEnterAnimationFinished:
        appStore.toRender[index]
          .isEnterAnimationFinished,
    }),
  )(observer(Component));
}
