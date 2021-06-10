import { soil101Subheadings } from 'data/main-headings';

import { FullPage } from 'components/fullpage';
import { Section } from 'components/atoms';

export default function Soil101Page() {
  return (
    <FullPage
      type='main'
      mainHeaderProps={{
        headings: soil101Subheadings,
        pathName: 'soil-101',
        backgroundColor: 'var(--pink-500)',
      }}
    >
      <Section />
    </FullPage>
  );
}
