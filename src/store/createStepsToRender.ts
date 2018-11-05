import Chat from '../screens/ChatScreen/components/Chat/Chat';
import CityDropDown from '../screens/ChatScreen/components/CityDropDown/CityDropDown';
import { IStep } from './AppStore';

const LEFT = 'left';
const RIGHT = 'right';

export default (callback: Function): IStep[] => [
  {
    component: Chat,
    position: LEFT,
    isEnterAnimationFinished: false,
    props: {
      text: '你好，我是COCO，请问你来自中国哪个地方？',
      callback,
    },
  },
  {
    component: Chat,
    position: LEFT,
    isEnterAnimationFinished: false,
    props: {
      text:
        '我知道了，你希望来新西兰学习什么专业领域呢？',
      callback,
    },
  },
  {
    component: Chat,
    position: LEFT,
    isEnterAnimationFinished: false,
    props: {
      text: '你好，我是COCO，请问你来自中国哪个地方？',
      callback,
    },
  },
  {
    component: Chat,
    position: LEFT,
    isEnterAnimationFinished: false,
    props: {
      text:
        '我知道了，你希望来新西兰学习什么专业领域呢？',
      callback,
    },
  },
  {
    component: CityDropDown,
    position: RIGHT,
    isEnterAnimationFinished: false,
    props: {
      callback,
    },
  },
];
