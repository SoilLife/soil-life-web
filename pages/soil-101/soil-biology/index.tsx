import { soil101Subheadings } from 'data/main-headings';

import { FullPage } from 'design-system/components/fullpage';
import { Section } from 'design-system/atoms';

export default function SoilBiologyPage() {
  return (
    <FullPage
      type='main'
      subHeaderProps={{
        headings: soil101Subheadings,
        pathName: 'soil-101',
        className: 'bg-teal-500',
      }}
    >
      <Section></Section>
    </FullPage>
  );
}
