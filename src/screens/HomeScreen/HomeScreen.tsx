import React from 'react';
import {
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const HomeScreen: React.FC<
  RouteComponentProps
> = () => {
  return (
    <div>
      <Link to={ROUTES.CHAT}>start demo</Link>
    </div>
  );
};

export default HomeScreen;
