import { DefaultLayout } from 'layouts';
import { MainHeader } from 'components/templates';

import { webOfSoilSubheadings } from 'data/main-headings';

export default function WebOfSoilPage() {
  return (
    <DefaultLayout>
      <MainHeader pathName='web-of-soil' headings={webOfSoilSubheadings} />
    </DefaultLayout>
  );
}
