import { FullPage } from 'components/fullpage';
import { Section } from 'components/atoms';
import { webOfSoilSubheadings } from 'data/main-headings';

export default function WebOfSoilPage() {
  return (
    <FullPage
      type='main'
      mainHeaderProps={{
        headings: webOfSoilSubheadings,
        pathName: 'web-of-soil',
        backgroundColor: 'var(--pink-500)',
      }}
    >
      <Section />
    </FullPage>
  );
}
