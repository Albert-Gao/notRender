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
    <div>
      <PoseGroup animateOnMount>{steps}</PoseGroup>
      step length: {steps.length}
    </div>
  );
};

export default observer(ChatScreen);
