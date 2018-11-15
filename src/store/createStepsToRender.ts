import { IStep } from './AppStore.type';
import StepButton from '../screens/ChatScreen/components/StepButton';

export default (callback: Function): IStep[] => [
  {
    component: StepButton,
    props: {
      callback,
    },
  },
  {
    component: StepButton,
    props: {
      callback,
    },
  },
  {
    component: StepButton,
    props: {
      callback,
    },
  },
];
