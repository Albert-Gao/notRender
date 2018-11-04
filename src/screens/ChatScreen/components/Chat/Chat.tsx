import React from 'react';
import { Flex } from 'rebass';
import Words from './components/Words';
import Avatar from './components/Avatar';

const Chat: React.SFC<{
  text: string;
  callback: Function;
}> = ({ text, callback }) => (
  <Flex mb={4}>
    <Avatar />
    <Words text={text} callback={callback} />
  </Flex>
);

export default Chat;
