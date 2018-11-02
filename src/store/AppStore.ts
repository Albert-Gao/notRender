import { configure, observable, action } from 'mobx';

const STEP_STATUS = {
  NOT_START: 'NOT_START',
  RUNNING: 'RUNNING',
  FINISHED: 'FINISHED',
};

configure({ enforceActions: 'observed' });
export default class AppStore {
  @observable
  currentStep = 0;

  @observable
  steps = [];

  @observable
  count = 0;

  @action.bound
  addCount() {
    this.count++;
  }
}
