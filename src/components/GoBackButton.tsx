import React from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import { History } from 'history';

const onClickHandler = (history: History) => () =>
  history.goBack();

const GoBackButton: React.SFC<RouteComponentProps> = ({
  history,
}) => (
  <button onClick={onClickHandler(history)}>返回</button>
);

export default withRouter(GoBackButton);
