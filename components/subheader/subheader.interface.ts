export interface SubheaderProps {
  pathName: string;
  subheadings: {
    name: string;
    slug: string;
    asset: string;
  }[];
  backgroundColor?: string;
}
