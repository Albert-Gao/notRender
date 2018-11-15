import Chat from '../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './AppStore.type';
import LocationDropDown from '../screens/ChatScreen/components/LocationDropDown/LocationDropDown';

const LEFT = 'left';
const RIGHT = 'right';

export default (callback: Function): IStep[] => {
  const getChat = (text: string): IStep => ({
    component: Chat,
    position: LEFT,
    props: {
      text,
      callback,
    },
  });

  return [
    getChat('hi, i am step 1'),
    {
      component: LocationDropDown,
      position: RIGHT,
      props: {
        callback,
      },
    },
    getChat('hi, i am step 3'),
  ];
};
