import { useContext } from 'react';
import { createCtx } from 'helpers/create-ctx';
import { appReducer } from './app.reducer';
import { App } from './app.interfaces';

const initialState: App.State = {
  fullpageApi: null,
  isMenuOpen: false,
};

export const [appContext, AppProvider] = createCtx(appReducer, initialState);

export function useAppContext() {
  return useContext(appContext);
}
