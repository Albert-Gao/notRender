import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Routes from './routes/routes';
import StoreContextWrapper from './store/store';
import { ThemeProvider } from './styles/styledLib';
import theme from './styles/theme';
import GlobalCSS from './styles/globalCSS';
import * as serviceWorker from './serviceWorker';

const render = () =>
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <StoreContextWrapper>
        <React.Fragment>
          <GlobalCSS />
          <Routes />
        </React.Fragment>
      </StoreContextWrapper>
    </ThemeProvider>,
    document.getElementById('root'),
  );

render();

module.hot && module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
