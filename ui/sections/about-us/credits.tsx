// components
import { Text } from "ui/atoms";

export function CreditsSection() {
  return (
    <div className="relative h-screen max-w-3xl mx-auto py-8 text-center space-y-6 snap-start overflow-hidden">
      <Text
        type="h1"
        weight="regular"
        size="3xl"
        color="teal"
        className="mb-4 xl:mb-10"
      >
        credits <br />
      </Text>
      <Text type="p" weight="thin" size="xs">
        We would like to acknowldege the following for their contributions:{" "}
        <br />
      </Text>
      <Text type="p" weight="light" size="xs">
        Adapted Figures
      </Text>
      <Text type="p" weight="thin" size="xs">
        The Nature and Property of Soils by Nyle Brady & Ray Weil
      </Text>
      <Text type="p" weight="thin" size="2xs">
        (Soil 101 - Nexus/Soil Forming Factors, Soil Processes; Soil
        101/Diversity/Pedogenesis; Soil 101/Physics/Organic Matter)
        <br />
      </Text>
      <Text type="p" weight="light" size="xs">
        Photos
      </Text>
      <Text type="p" weight="thin" size="xs">
        Jim Richardson - National Geographic
      </Text>
      <Text type="p" weight="thin" size="2xs">
        (Home Page (Header Photo, Dig Deeper); Soil 101/Soil Diversity (Header
        Photo), Soil 101/Soil Health (Header Photo), Soils at Risk - Erosion,
        Salinization)
        <br />
      </Text>
      <Text type="p" weight="thin" size="xs">
        For the Love of Soil - Yamina Pressler
      </Text>
      <Text type="p" weight="thin" size="2xs">
        (Soil 101/Soil Physics/Structure - Wedge)
        <br />
        <br />
        All other photos were licensed from Adobe Stock or sourced under
        creative commons. All content is protected under fair use, as this
        website is 'not-for-profit' and intended for educational purposes only.
      </Text>
    </div>
  );
}
