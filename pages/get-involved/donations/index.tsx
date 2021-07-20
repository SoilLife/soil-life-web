// components
import { GetInvolvedSection } from 'layouts/sections/get-involved';

// data
import { getInvolvedPageData } from 'data/page-get-involved';

export default function ThroughDonationsPage() {
  return (
    <GetInvolvedSection cards={getInvolvedPageData.donationsSectionCards} title='through donations' color='orange' />
  );
}
