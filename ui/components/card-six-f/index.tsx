import Link from "next/link";
import { Button, Text } from "ui/atoms";
import { CardSixFProps } from "./card-six-f.interfaces";
import { cardSixFTypeMap } from "./card-six-f.utils";

export function Card6F({
  type,
  subtext,
  href,
  icon,
  text,
  className,
  button,
}: CardSixFProps) {
  return (
    <div
      className={`relative mx-auto mt-40 z-10 max-w-sm rounded-3xl bg-white shadow-2xl
      sm:rounded-none sm:max-w-[700px] sm:h-[220px] sm:w-full
      md:max-w-[900px] md:h-[297px] 
      ${className}`}
    >
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-full bottom-[90%] sm:bottom-[80%] sm:h-[160px] sm:w-[160px] ${cardSixFTypeMap[type]}`}
      >
        <img src={icon} />
      </div>
      <div className="flex flex-col h-full items-center justify-end p-6 pt-8 text-center">
        <Text type="p" weight="medium" size="md" className="mb-4">
          {subtext}
        </Text>
        <Text type="p" weight="light" size="lg" className="mb-4 sm:mb-10">
          {text}
        </Text>
        <Link href={`${href}`}>
          <Button {...button} />
        </Link>
      </div>
    </div>
  );
}

Card6F.defaultProps = {
  className: "",
};
