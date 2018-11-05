import { configure, observable, action } from 'mobx';
import React from 'react';
import posed from 'react-pose';
import createStepsToRender from './createStepsToRender';

const UpInChild = posed.div({
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: { x: -100, opacity: 0 },
});

export interface IStep {
  component: React.ComponentType<any>;
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

    const Component = this.toRender[index].component;
    const props = this.toRender[index].props;

    this.steps.push(
      <UpInChild key={index}>
        <Component {...props} />
      </UpInChild>,
    );
  }
}
