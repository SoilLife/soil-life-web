import { soil101Subheadings } from 'data/main-headings';

import { FullPage } from 'design-system/components/fullpage';
import { Section } from 'design-system/atoms';

export default function SoilEnvironmentPage() {
  return (
    <FullPage
      type='main'
      subHeaderProps={{
        headings: soil101Subheadings,
        pathName: 'soil-101',
        className: 'bg-yellow-500',
      }}
    >
      <Section></Section>
    </FullPage>
  );
}
