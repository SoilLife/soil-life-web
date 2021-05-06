import DefaultLayout from 'layouts/default';
import Subheader from 'components/subheader';

import { subheadings } from 'data/subheadings-web-of-soil';

export default function WebOfSoilPage() {
  return (
    <DefaultLayout>
      <Subheader pathName='web-of-soil' subheadings={subheadings} />
    </DefaultLayout>
  );
}
