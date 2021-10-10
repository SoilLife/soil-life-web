type FullpageRef = {
  context: any;
  fpEasings: {
    easeInOutCubic: Function;
  };
  fpUtils: {
    $: Function;
    addClass: Function;
    after: Function;
    appendTo: Function;
    before: Function;
    closest: Function;
    createElementFromHTML: Function;
    css: Function;
    deepExtend: Function;
    filter: Function;
    getList: Function;
    getScrollTop: Function;
    getWindowHeight: Function;
    hasClass: Function;
    hide: Function;
    index: Function;
    insertBefore: Function;
    isArrayOrList: Function;
    isFunction: Function;
    last: Function;
    matches: Function;
    next: Function;
    nextAll: Function;
    nextUntil: Function;
    prependTo: Function;
    prev: Function;
    prevAll: Function;
    prevUntil: Function;
    preventDefault: Function;
    remove: Function;
    removeClass: Function;
    show: Function;
    showError: Function;
    siblings: Function;
    toggle: Function;
    toggleClass: Function;
    trigger: Function;
    until: Function;
    untilAll: Function;
    unwrap: Function;
    wrap: Function;
    wrapAll: Function;
    wrapInner: Function;
  };
  fullpageApi: {
    cards: null;
    continuousHorizontal: null;
    destroy: Function;
    dragAndMove: null;
    dropEffect: null;
    fadingEffect: null;
    fitToSection: Function;
    getActiveSection: Function;
    getActiveSlide: Function;
    getFullpageData: Function;
    interlockedSlides: null;
    landscapeScroll: Function;
    moveSectionDown: Function;
    moveSectionUp: Function;
    moveSlideLeft: Function;
    moveSlideRight: Function;
    moveTo: Function;
    offsetSections: null;
    parallax: null;
    reBuild: Function;
    resetSliders: null;
    responsiveSlides: null;
    scrollHorizontally: null;
    scrollOverflowReset: null;
    setAllowScrolling: Function;
    setAutoScrolling: Function;
    setFitToSection: Function;
    setKeyboardScrolling: Function;
    setLockAnchors: Function;
    setMouseWheelScrolling: Function;
    setRecordHistory: Function;
    setResponsive: Function;
    setScrollingSpeed: Function;
    shared: { isNormalScrollElement: false; afterRenderActions: Function };
    silentMoveTo: Function;
    version: string;
  };
  log: Function;
  props: Pick<FullpageRef, 'fullpageApi'>;
  refs: any;
  state: { initialized: boolean; sectionCount: number; slideCount: number };
  updater: {
    enqueueForceUpdate: Function;
    enqueueReplaceState: Function;
    enqueueSetState: Function;
    isMounted: Function;
  };
};

export declare namespace App {
  export interface State {
    fullpageRef: null | FullpageRef;
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
