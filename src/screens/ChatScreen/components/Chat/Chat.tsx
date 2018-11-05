import React from 'react';
import { Flex } from 'rebass';
import Words, {
  IWordsProps,
} from './components/Words';
import Avatar from './components/Avatar';

const Chat: React.SFC<IWordsProps> = ({
  isEnterAnimationFinished,
  text,
  callback,
}) => (
  <Flex mb={4}>
    <Avatar />
    <Words
      isEnterAnimationFinished={
        isEnterAnimationFinished
      }
      text={text}
      callback={callback}
    />
  </Flex>
);

export default Chat;
