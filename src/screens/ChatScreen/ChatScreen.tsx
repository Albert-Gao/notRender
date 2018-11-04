import React from 'react';
import { Flex } from 'rebass';
import { inject, observer } from 'mobx-react';
import { PoseGroup } from 'react-pose';
import Header from '../../components/Header/Header';
import { Box } from '../../components/buildingBlocks';
import AppStore from '../../store/AppStore';

const ChatScreen: React.SFC<{
  appStore: AppStore;
}> = ({ appStore }) => {
  console.log(appStore.currentStepIndex);
  return (
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
        <PoseGroup>{appStore.steps}</PoseGroup>
      </Box>
    </Flex>
  );
};

export default inject('appStore')(
  observer(ChatScreen),
);
