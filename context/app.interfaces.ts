export declare namespace App {
  export interface State {
    isMenuOpen: boolean;
  }

  export type Action =
    | {
        type: 'SET_FULL_PAGE_REF';
        payload: any;
      }
    | {
        type: 'TOGGLE_MOBILE_MENU';
      };
}
