import React from 'react';
import {
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import HomeScreenShowData from './components/HomeScreenShowData';

const HomeScreen: React.SFC<
  RouteComponentProps<any>
> = () => {
  return (
    <div>
      <HomeScreenShowData />
      <Link to={ROUTES.LOGIN}>登陆</Link>
      <Link to={ROUTES.CHAT}>开始免费评估</Link>
    </div>
  );
};

export default HomeScreen;
