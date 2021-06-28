// components
import { GetInvolvedSection } from 'components/sections/get-involved';

// data
import { getInvolvedPageData } from 'data/page-get-involved';

export default function InYourCommunityPage() {
  return (
    <GetInvolvedSection cards={getInvolvedPageData.communitySectionCards} title='in your community' color='yellow' />
  );
}
