// components
import { GetInvolvedSection } from "ui/sections/get-involved";

// data
import { getInvolvedPageData } from "data/page-get-involved";

export default function ThroughDonationsPage() {
  return (
    <GetInvolvedSection
      cards={getInvolvedPageData.donationsSectionCards}
      title="through donations"
      color="orange"
    />
  );
}
