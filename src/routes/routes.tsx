import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import FinalRegisterScreen from '../screens/FinalRegisterScreen/FinalRegisterScreen';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CHAT: '/chat',
  FINAL_REGISTER: '/final-register',
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={ROUTES.HOME}
        component={(props: RouteComponentProps) => (
          <HomeScreen {...props} />
        )}
      />
      <Route
        path={ROUTES.LOGIN}
        component={(props: RouteComponentProps) => (
          <LoginScreen {...props} />
        )}
      />
      <Route
        path={ROUTES.CHAT}
        component={(props: RouteComponentProps) => (
          <ChatScreen {...props} />
        )}
      />
      <Route
        path={ROUTES.FINAL_REGISTER}
        component={(props: RouteComponentProps) => (
          <FinalRegisterScreen {...props} />
        )}
      />
      <Route
        path="*"
        component={(props: RouteComponentProps) => (
          <HomeScreen {...props} />
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
