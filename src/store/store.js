import React, { createContext } from 'react';
import AppStore from './AppStore';

const appStore = new AppStore();

const store = {
  appStore,
};

export const StoreContext = createContext(store);

export const StoreContextWrapper = ({ children }) => (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
);

export default store;
