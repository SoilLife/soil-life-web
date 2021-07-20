import { App } from './app.interfaces';

export function appReducer(state: App.State, action: App.Action): Readonly<App.State> {
  switch (action.type) {
    case 'SET_FULL_PAGE_API':
      return {
        ...state,
        fullpageApi: action.payload,
      };

    default:
      throw Error(`${action.type} is not a valid action type`);
  }
}
