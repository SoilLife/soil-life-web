import DefaultLayout from 'layouts/default';
import { Subheader } from 'components/templates';

import { webOfSoilSubheadings } from 'data/subheadings';

export default function WebOfSoilPage() {
  return (
    <DefaultLayout>
      <Subheader pathName='web-of-soil' subheadings={webOfSoilSubheadings} />
    </DefaultLayout>
  );
}
