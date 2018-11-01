import { configure, observable, action } from 'mobx';

configure({ enforceActions: 'observed' });
export default class AppStore {
  @observable
  count = 0;

  @action.bound
  addCount() {
    this.count++;
  }
}
