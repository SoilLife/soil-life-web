import { SubHeaderProps } from 'design-system/templates/header/sub-header/sub-header.interface';

export type FullPageProps = React.PropsWithChildren<
  | {
      type: 'home';
      subHeaderProps?: never;
    }
  | {
      type: 'main';
      subHeaderProps: SubHeaderProps;
    }
>;
