// components
import { GetInvolvedSection } from "ui/sections/get-involved";

// data
import { getInvolvedPageData } from "data/page-get-involved";

export default function OnSocialMediaPage() {
  return (
    <GetInvolvedSection
      cards={getInvolvedPageData.socialMediaSectionCards}
      title="on social media"
      color="blue"
    />
  );
}
