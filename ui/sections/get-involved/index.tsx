import { useState } from "react";

// components
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Text, Button, Icon } from "ui/atoms";
import { CardGetInvolved } from "ui/components";
import { DefaultLayout } from "layouts/default";
import { MobileNavMenu } from "ui/templates";

// helpers
import { getColor } from "helpers/get-color";

// interfaces
import { ButtonProps } from "ui/atoms/button/button.interfaces";
import { CardGetInvolvedProps } from "ui/components/card-get-involved/card-get-involved.interfaces";

// assets
import worm from "public/images/worm.png";
import HomeIcon from "public/images/get-involved/home_white.svg";
import CommunityIcon from "public/images/get-involved/community_white.svg";
import SocialMediaIcon from "public/images/get-involved/social_media_white.svg";
import LegislationIcon from "public/images/get-involved/legislation_white.svg";
import EducationIcon from "public/images/get-involved/education_white.svg";
import DonationIcon from "public/images/get-involved/donations_white.svg";

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
        <Image
          width={200}
          height={64}
          src={worm}
          alt="illustration of an earth worm"
          className="absolute top-1/2 right-[80%] transform -rotate-6 -translate-y-1/2 w-[200px]"
          placeholder="blur"
          loading="lazy"
        />
        <Link href="/get-involved">
          <Button size="lg" type={getButtonType(color)} label="explore more" />
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
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  let textColor = getColor({ color, type: "text", state: "idle" });
  const titleCase = title
    .split(" ")
    .map((a) => {
      const cap = a.charAt(0).toUpperCase();
      return cap + a.slice(1);
    })
    .join(" ");

  return (
    <DefaultLayout title={titleCase}>
      <header
        className={`fixed top-0 w-full z-20 transition-all ease-out transform ${getColor(
          { color, type: "bg", state: "idle" }
        )}`}
      >
        <nav className="container">
          <ul className="flex items-center justify-between h-10 sm:h-16">
            <li>
              <button onClick={toggleMenu}>
                <Icon
                  icon={isMenuOpen ? "x" : "menu"}
                  className="text-white h-8 w-8"
                />
              </button>
            </li>
            <li className="text-white cursor-pointer">
              <Link href="/get-involved/at-home" title="at home">
                <HomeIcon
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    pathname.includes("at-home")
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : ""
                  }`}
                />
              </Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href="/get-involved/community" title="community">
                <CommunityIcon
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    pathname.includes("community")
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : ""
                  }`}
                />
              </Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href="/get-involved/social-media" title="social media">
                <SocialMediaIcon
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    pathname.includes("social-media")
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : ""
                  }`}
                />
              </Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href="/get-involved/legislation" title="legislation">
                <LegislationIcon
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    pathname.includes("legislation")
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : ""
                  }`}
                />
              </Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href="/get-involved/education" title="education">
                <EducationIcon
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    pathname.includes("education")
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : ""
                  }`}
                />
              </Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link href="/get-involved/donations" title="donations">
                <DonationIcon
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    pathname.includes("donations")
                      ? "rounded-full bg-gray-500 ring-2 ring-white"
                      : ""
                  }`}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <MobileNavMenu isMenuOpen={isMenuOpen} />
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
    </DefaultLayout>
  );
}
