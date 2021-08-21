import { soil101Subheadings } from 'data/main-headings';

import { FullPage } from 'design-system/components/fullpage';
import { Section } from 'design-system/atoms';

export default function SoilFuncitonsPage() {
  return (
    <FullPage
      type='main'
      subHeaderProps={{
        headings: soil101Subheadings,
        pathName: 'soil-101',
        className: 'bg-orange-500',
      }}
    >
      <Section></Section>
    </FullPage>
  );
}
