import Chat from '../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './AppStore.type';
import LocationDropDown from '../screens/ChatScreen/components/LocationDropDown/LocationDropDown';

const LEFT = 'left';
const RIGHT = 'right';

export default (callback: Function): IStep[] => [
  {
    component: Chat,
    position: LEFT,
    props: {
      text: '你好，我是COCO，请问你来自中国哪个地方？',
      callback,
    },
  },
  {
    component: LocationDropDown,
    position: RIGHT,
    props: {
      callback,
    },
  },
  {
    component: Chat,
    position: LEFT,
    props: {
      text:
        '我知道了，你希望来新西兰学习什么专业领域呢？',
      callback,
    },
  },
];
