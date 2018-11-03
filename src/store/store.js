import React from 'react';
import { Provider } from 'mobx-react';
import AppStore from './AppStore';

const appStore = new AppStore();

export const StoreContextWrapper = ({ children }) => (
  <Provider appStore={appStore}>{children}</Provider>
);
