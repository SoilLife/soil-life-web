import { DefaultLayout } from 'layouts';
import { MainHeader } from 'components/templates';

import { soil101Subheadings } from 'data/main-headings';

export default function Soil101Page() {
  return (
    <DefaultLayout>
      <MainHeader pathName='soils-101' headings={soil101Subheadings} />
    </DefaultLayout>
  );
}
