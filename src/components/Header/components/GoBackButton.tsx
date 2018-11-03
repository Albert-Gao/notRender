import React from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import { Image, Button, Flex } from 'rebass';
import backButton from '../../../assets/backButton.svg';
import { History } from 'history';

const onClickHandler = (history: History) => () =>
  history.goBack();

const GoBackButton: React.SFC<RouteComponentProps> = ({
  history,
}) => (
  <Button
    bg="primary"
    onClick={onClickHandler(history)}
  >
    <Flex alignItems="center">
      <Image src={backButton} />
      返回
    </Flex>
  </Button>
);

export default withRouter(GoBackButton);
