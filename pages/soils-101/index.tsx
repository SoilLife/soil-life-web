import DefaultLayout from 'layouts/default';
import { Subheader } from 'components/subheader';

import { soil101Subheadings } from 'data/subheadings';

export default function Soil101Page() {
  return (
    <DefaultLayout>
      <Subheader pathName='soils-101' subheadings={soil101Subheadings} />
    </DefaultLayout>
  );
}
