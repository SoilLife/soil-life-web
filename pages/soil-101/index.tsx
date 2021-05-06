import DefaultLayout from 'layouts/default';
import Subheader from 'components/subheader';

import { subheadings } from 'data/subheadings-soil-101';

export default function Soil101Page() {
  return (
    <DefaultLayout>
      <Subheader pathName='soil-101' subheadings={subheadings} />
    </DefaultLayout>
  );
}
