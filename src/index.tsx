import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Routes from './routes/routes';
import { StoreContextWrapper } from './store/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoreContextWrapper>
    <Routes />
  </StoreContextWrapper>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
