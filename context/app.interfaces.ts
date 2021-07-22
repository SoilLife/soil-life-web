export declare namespace App {
  export interface State {
    fullpageApi: any;
    isMenuOpen: boolean;
  }

  export type Action =
    | {
        type: 'SET_FULL_PAGE_API';
        payload: any;
      }
    | {
        type: 'TOGGLE_MOBILE_MENU';
      };
}
