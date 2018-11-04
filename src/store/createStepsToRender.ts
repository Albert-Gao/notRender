import Chat from '../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './AppStore';

export default (callback: Function): IStep[] => [
  {
    component: Chat,
    props: {
      text: '你好，我是COCO，请问你来自中国哪个地方？',
      callback,
    },
  },
  {
    component: Chat,
    props: {
      text:
        '我知道了，你希望来新西兰学习什么专业领域呢？',
      callback,
    },
  },
];
