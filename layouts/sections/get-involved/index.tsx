// components
import Link from "next/link";
import { Text, Button } from "design-system/atoms";
import { CardGetInvolved } from "design-system/components";
import { Header } from "design-system/templates";

// helpers
import { getColor } from "helpers/get-color";

// interfaces
import { ButtonProps } from "design-system/atoms/button/button.interfaces";
import { CardGetInvolvedProps } from "design-system/components/card-get-involved/card-get-involved.interfaces";
import { getInvolvedHeadings } from "data/main-headings";

function ReturnHomeButton({ color }: { color: Color }) {
  function getButtonType(color: Color): ButtonProps["type"] {
    switch (color) {
      case "blue":
        return "primary";
      case "gray":
        return "neutral";
      case "orange":
        return "alert";
      case "pink":
        return "danger";
      case "teal":
        return "success";
      case "yellow":
        return "warning";
    }
  }
  return (
    <div className="flex justify-center my-20">
      <div className="relative">
        <img
          src="/images/worm.png"
          alt="illustration of an earth worm"
          className="absolute top-1/2 right-[80%] transform -rotate-6 -translate-y-1/2 w-[200px]"
        />
        <Link href="/get-involved">
          <Button
            as="button"
            size="lg"
            type={getButtonType(color)}
            label="explore more"
          />
        </Link>
      </div>
    </div>
  );
}

export function GetInvolvedSection({
  title,
  cards,
  color,
}: {
  title: string;
  cards: Omit<CardGetInvolvedProps, "index" | "color">[];
  color: Color;
}) {
  let textColor = getColor({ color, type: "text", state: "idle" });

  return (
    <>
      <Header.Sub
        headings={getInvolvedHeadings}
        pathName="get-involved"
        className={getColor({ color, type: "bg", state: "idle" })}
      />
      <div className="container relative pt-16">
        <Text
          type="h1"
          weight="light"
          size="3xl"
          className={`text-center py-6 ${textColor}`}
        >
          {title}
        </Text>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-app-full mx-auto">
          {cards.map((card, index) => (
            <CardGetInvolved
              key={index}
              index={index}
              color={color}
              {...card}
            />
          ))}
        </div>
        <ReturnHomeButton color={color} />
      </div>
    </>
  );
}
