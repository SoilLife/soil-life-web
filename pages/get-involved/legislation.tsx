// components
import { GetInvolvedSection } from "ui/sections/get-involved";

// data
import { getInvolvedPageData } from "data/page-get-involved";

export default function WithYourLegislatorsPage() {
  return (
    <GetInvolvedSection
      cards={getInvolvedPageData.legislationSectionCards}
      title="with your legislators"
      color="teal"
    />
  );
}
