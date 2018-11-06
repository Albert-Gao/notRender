import { configure, observable, action } from 'mobx';
import React from 'react';
import createStepsToRender from './createStepsToRender';
import { Flex } from 'rebass';
import {
  getAnimationWrapper,
  getComponentInfo,
} from './utils';

export interface IStep {
  component: React.ComponentType<any>;
  position: 'left' | 'right';
  props: object;
}

export type ReactElementArray = React.ReactElement<
  React.ReactNode
>[];

configure({ enforceActions: 'observed' });
export default class AppStore {
  @observable
  toRender: IStep[] = [];

  @observable
  steps: ReactElementArray = [];

  currentStepIndex = 0;

  constructor() {
    this.toRender = createStepsToRender(this.nextStep);
    this.addNewStep(this.currentStepIndex);
  }

  @action.bound
  nextStep() {
    if (
      this.isIndexOutOfRange(this.currentStepIndex + 1)
    ) {
      return;
    }

    this.currentStepIndex += 1;
    this.addNewStep(this.currentStepIndex);
  }

  isIndexOutOfRange(index: number): boolean {
    return index >= this.toRender.length;
  }

  addNewStep(index: number) {
    if (this.isIndexOutOfRange(index)) return;

    const shouldPlaceLeft =
      this.toRender[index].position === 'left';

    const {
      Component,
      props,
      position,
    } = getComponentInfo(
      this.toRender[index],
      shouldPlaceLeft,
    );

    const inner = (
      <Flex
        width={1}
        justifyContent={position}
        alignItems="center"
      >
        <Component {...props} />
      </Flex>
    );

    const FromLeft = getAnimationWrapper(true);
    const FromRight = getAnimationWrapper(false);

    const toRender = shouldPlaceLeft ? (
      <FromLeft key={index}>{inner}</FromLeft>
    ) : (
      <FromRight key={index}>{inner}</FromRight>
    );

    this.steps.push(toRender);
  }
}
