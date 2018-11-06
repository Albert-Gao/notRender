import React from 'react';
import posed from 'react-pose';
import { IStep } from './AppStore';

const getAnimationParams = (value: number) => ({
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 700 },
  },
  exit: { x: value, opacity: 0 },
});

export const getAnimationWrapper = (
  isFromLeft: boolean,
) =>
  posed.div(
    getAnimationParams(isFromLeft ? -100 : 100),
  );

export const getComponentInfo = (
  toGet: IStep,
  shouldPlaceLeft: boolean,
) => ({
  Component: toGet.component,
  props: toGet.props,
  position: shouldPlaceLeft
    ? 'flex-start'
    : 'flex-end',
});
