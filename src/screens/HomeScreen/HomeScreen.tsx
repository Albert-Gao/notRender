import React from 'react';
import {
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import HomeScreenShowData from './components/HomeScreenShowData';

const HomeScreen: React.FC<
  RouteComponentProps
> = () => {
  return (
    <div>
      <HomeScreenShowData />
      <Link to={ROUTES.LOGIN}>登陆</Link>
      <br />
      <Link to={ROUTES.CHAT}>开始注册</Link>
    </div>
  );
};

export default HomeScreen;
