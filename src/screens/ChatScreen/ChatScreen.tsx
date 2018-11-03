import React from 'react';
import { Flex } from 'rebass';
import Header from '../../components/Header/Header';
import { Box } from '../../components/buildingBlocks';

import Chat from './components/Chat/Chat';

const ChatScreen = () => (
  <Flex width={1} flexDirection="column">
    <Header title="免费评估" />
    <Box
      css={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflowY: 'auto',
      }}
      px={4}
      py={6}
      bg="background"
    >
      <Chat />
      <Chat />
    </Box>
  </Flex>
);

export default ChatScreen;
