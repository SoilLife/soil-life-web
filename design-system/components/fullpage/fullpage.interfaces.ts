import { SubHeaderProps } from 'design-system/templates/header/sub-header/sub-header.interface';

interface FullpageSection {
  anchor: null | string;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  item: HTMLElement;
}

export type FullPageProps = React.PropsWithChildren<
  | {
      type: 'home';
      subHeaderProps?: never;
    }
  | {
      type: 'main';
      subHeaderProps: SubHeaderProps;
    }
> & {
  afterLoad?: (
    ref: React.MutableRefObject<null | { fullpageApi: any }>
  ) => (origin: FullpageSection, destination: FullpageSection, direction: 'down' | 'up') => void;
};
