import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header/Header';

const LoginScreen: React.FC<
  RouteComponentProps
> = () => (
  <div>
    <Header title="登陆" />
    Login Screen
  </div>
);

export default LoginScreen;
