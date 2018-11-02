import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ROUTES } from '../../routes/routes';
import HomeScreenShowData from './components/HomeScreenShowData';
import { StoreContext } from '../../store/store';

function HomeScreen() {
  // const { appStore } = useContext(StoreContext);

  return (
    <div>
      <HomeScreenShowData />
      <Link to={ROUTES.LOGIN}>登陆</Link>
      <Link to={ROUTES.CHAT}>注册</Link>
    </div>
  );
}

export default observer(HomeScreen);
