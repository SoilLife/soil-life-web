import DefaultLayout from 'layouts/default';
import Subheader from 'components/subheader';

import { subheadings } from './subheadings';

export default function Soil101Page() {
  return (
    <DefaultLayout>
      <Subheader pathName='soil-101' subheadings={subheadings} />
    </DefaultLayout>
  );
}
