// components
import { GetInvolvedSection } from "ui/sections/get-involved";

// data
import { getInvolvedPageData } from "data/page-get-involved";

export default function ForYourEducationPage() {
  return (
    <GetInvolvedSection
      cards={getInvolvedPageData.educationSectionCards}
      title="for your education"
      color="gray"
    />
  );
}
