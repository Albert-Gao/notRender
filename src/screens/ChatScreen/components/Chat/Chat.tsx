import React from 'react';
import { Flex } from 'rebass';
import Words from './components/Words';
import Avatar from './components/Avatar';

const Chat = () => (
  <Flex alignItems="center" mb={4}>
    <Avatar />
    <Words />
  </Flex>
);

export default Chat;
