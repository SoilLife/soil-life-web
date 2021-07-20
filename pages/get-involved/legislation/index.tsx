// components
import { GetInvolvedSection } from 'layouts/sections/get-involved';

// data
import { getInvolvedPageData } from 'data/page-get-involved';

export default function WithYourLegislatorsPage() {
  return (
    <GetInvolvedSection
      cards={getInvolvedPageData.legislationSectionCards}
      title='with your legislators'
      color='teal'
    />
  );
}
