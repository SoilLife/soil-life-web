import { MainHeaderProps } from 'design-system/templates/main-header/main-header.interface';

export type FullPageProps = React.PropsWithChildren<
  | {
      type: 'home';
      mainHeaderProps?: never;
    }
  | {
      type: 'main';
      mainHeaderProps: MainHeaderProps;
    }
>;
