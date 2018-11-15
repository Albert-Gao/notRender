import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import ChatScreen from '../screens/ChatScreen/ChatScreen';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CHAT: '/chat',
  FINAL_REGISTER: '/final-register',
};

// This is for handling the bug from react-is
// after fixed, we don't need to use this work-around
const wrap = (
  Component: React.ComponentType<RouteComponentProps>,
) => (props: RouteComponentProps) => (
  <Component {...props} />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={wrap(ChatScreen)} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
