export interface MainHeaderProps {
  pathName: string;
  headings: {
    name: string;
    slug: string;
    asset: string;
  }[];
  className?: string;
}
