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
      <Chat text="你好，我是COCO，请问你来自中国哪个地方？" />
      <Chat text="我知道了，你希望来新西兰学习什么专业领域呢？" />
    </Box>
  </Flex>
);

export default ChatScreen;
