import React, { useContext, useState } from 'react';
import { Flex } from 'rebass';
import { observer } from 'mobx-react-lite';
import { PoseGroup } from 'react-pose';
import Header from '../../components/Header/Header';
import { Box } from '../../components/buildingBlocks';
import { AppStoreContext } from '../../store/store';

const ChatScreen = () => {
  const { steps } = useContext(AppStoreContext);

  return (
    <Flex width={1} flexDirection="column">
      <Header title="我是空空的标题栏" />
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
        <PoseGroup animateOnMount>{steps}</PoseGroup>
      </Box>
    </Flex>
  );
};

export default observer(ChatScreen);
