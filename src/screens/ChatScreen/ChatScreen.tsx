import React from 'react';
import { Flex } from 'rebass';
import { inject, observer } from 'mobx-react';
import { PoseGroup } from 'react-pose';
import Header from '../../components/Header/Header';
import { Box } from '../../components/buildingBlocks';
import { ReactElementArray } from '../../store/AppStore.type';

const ChatScreen: React.SFC<{
  steps: ReactElementArray;
}> = ({ steps }) => {
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

export default inject(({ appStore }) => ({
  steps: appStore.steps,
}))(observer(ChatScreen));
