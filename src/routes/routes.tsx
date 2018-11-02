import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
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
        component={HomeScreen}
      />
      <Route
        path={ROUTES.LOGIN}
        component={LoginScreen}
      />
      <Route
        path={ROUTES.CHAT}
        component={ChatScreen}
      />
      <Route
        path={ROUTES.FINAL_REGISTER}
        component={FinalRegisterScreen}
      />
      <Route path="*" component={HomeScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
