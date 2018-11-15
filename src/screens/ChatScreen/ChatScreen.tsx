import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PoseGroup } from 'react-pose';
import { AppStoreContext } from '../../store/store';

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(AppStoreContext);

  return (
    <div
      style={{
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflowY: 'auto',
        }}
      >
        <PoseGroup animateOnMount>{steps}</PoseGroup>
      </div>
    </div>
  );
};

export default observer(ChatScreen);
