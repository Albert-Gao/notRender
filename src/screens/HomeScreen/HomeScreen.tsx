import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ROUTES } from '../../routes/routes';
import HomeScreenShowData from './components/HomeScreenShowData';

function HomeScreen() {
  return (
    <div>
      <HomeScreenShowData />
      <Link to={ROUTES.LOGIN}>登陆</Link>
      <Link to={ROUTES.CHAT}>开始免费评估</Link>
    </div>
  );
}

export default observer(HomeScreen);
