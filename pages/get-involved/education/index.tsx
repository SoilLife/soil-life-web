// components
import { GetInvolvedSection } from 'layouts/sections/get-involved';

// data
import { getInvolvedPageData } from 'data/page-get-involved';

export default function ForYourEducationPage() {
  return (
    <GetInvolvedSection cards={getInvolvedPageData.educationSectionCards} title='for your education' color='gray' />
  );
}
