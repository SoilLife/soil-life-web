// components
import { GetInvolvedSection } from 'components/sections/get-involved';

// data
import { getInvolvedPageData } from 'data/page-get-involved';

export default function AtHomePage() {
  return <GetInvolvedSection cards={getInvolvedPageData.homeSectionCards} title='at home' color='pink' />;
}
