import { MainHeaderProps } from 'components/templates/main-header/main-header.interface';

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
