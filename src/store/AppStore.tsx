import { configure, observable, action } from 'mobx';
import React from 'react';
import { inject, observer } from 'mobx-react';
import createStepsToRender from './createStepsToRender';
import { Flex } from 'rebass';
import {
  getAnimationWrapper,
  injectAnimationStatus,
} from './utils';

export interface IStep {
  component: React.ComponentType<any>;
  isEnterAnimationFinished: boolean;
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

  @action.bound
  finishEnterAnimation(index: number) {
    this.toRender[
      index
    ].isEnterAnimationFinished = true;
  }

  addNewStep(index: number) {
    if (this.isIndexOutOfRange(index)) return;

    const shouldPlaceLeft =
      this.toRender[index].position === 'left';

    const props = this.toRender[index].props;
    const position = shouldPlaceLeft
      ? 'flex-start'
      : 'flex-end';

    const InjectedComponent = injectAnimationStatus(
      index,
      this.toRender[index].component,
    );

    const inner = (
      <Flex width={1} justifyContent={position}>
        <InjectedComponent {...props} />
      </Flex>
    );

    const FromLeft = getAnimationWrapper(true, () =>
      this.finishEnterAnimation(index),
    );
    const FromRight = getAnimationWrapper(false, () =>
      this.finishEnterAnimation(index),
    );

    const toRender = shouldPlaceLeft ? (
      <FromLeft key={index}>{inner}</FromLeft>
    ) : (
      <FromRight key={index}>{inner}</FromRight>
    );

    this.steps.push(toRender);
  }
}
