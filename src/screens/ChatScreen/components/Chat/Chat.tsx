import React from 'react';
import { Flex } from 'rebass';
import Words from './components/Words';
import Avatar from './components/Avatar';

const Chat: React.SFC<{ text: string }> = ({
  text,
}) => (
  <Flex alignItems="center" mb={4}>
    <Avatar />
    <Words text={text} />
  </Flex>
);

export default Chat;
