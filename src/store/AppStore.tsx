import React from 'react';
import { action, configure, observable } from 'mobx';
import createStepsToRender from './createStepsToRender';
import {
  IStep,
  ReactElementArray,
} from './AppStore.type';

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
    const { props } = this.toRender[index];

    const inner = (
      <div
        key={index}
        style={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Component {...props} />
      </div>
    );

    this.steps.push(inner);

    console.log(
      `this.steps.length after push: ${
        this.steps.length
      }`,
    );
  }
}
