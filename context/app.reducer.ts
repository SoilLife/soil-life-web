import { App } from './app.interfaces';

export function appReducer(state: App.State, action: App.Action): Readonly<App.State> {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU': {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    }
    default: {
      throw Error('No Action type defined');
    }
  }
}
