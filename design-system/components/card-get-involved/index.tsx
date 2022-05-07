import { useState, useRef } from "react";

// components
import { Button, Image, Text } from "design-system/atoms";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// helpers
import { getColor, getButtonType } from "helpers/get-color";
import { useMedia } from "react-use";

// interfaces
import { CardGetInvolvedProps } from "./card-get-involved.interfaces";

export function CardGetInvolved({
  index,
  color,
  links,
  text,
  imageUrl,
  imageContain,
  icon,
}: CardGetInvolvedProps) {
  const [isOpen, setIsOpen] = useState<{ [index: number]: boolean }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMedia("(max-width: 640px)");

  function handleIsLinksOpen(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };
  }

  function handleOnDesktopMouseEnter(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: true }));
    };
  }

  function handleOnDesktopMouseLeave(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: false }));
    };
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onMouseEnter={handleOnDesktopMouseEnter(index)}
      onMouseLeave={handleOnDesktopMouseLeave(index)}
      onFocus={handleOnDesktopMouseEnter(index)}
      onBlur={(e) => {
        if (!containerRef?.current?.contains(e.target)) {
          handleOnDesktopMouseLeave(index)();
        }
      }}
      className={`shadow-lg p-4 rounded-lg ${
        typeof links === "string" ? "cursor-pointer" : ""
      }`}
      onClick={
        typeof links === "string"
          ? () => {
              window.open(links, "_blank", "rel=noreferrer,noopener");
            }
          : undefined
      }
      onKeyDown={(e) => {
        if (e.code === "Enter" && typeof links === "string") {
          window.open(links, "_blank", "rel=noreferrer,noopener");
        }
      }}
      aria-label={
        typeof links === "string"
          ? `navigate to ${links}`
          : `view links and resources for ${text}`
      }
    >
      <div className="relative aspect-h-1 aspect-w-1">
        {isOpen[index] && (
          <div className="absolute h-full w-full to-transparent z-10">
            {Array.isArray(links) ? (
              <ul className="space-y-6 flex flex-col justify-center h-full p-6">
                {links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`flex justify-center items-center bg-white bg-opacity-[0.85] w-full py-4 `}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-center"
                      >
                        <Text
                          type="span"
                          color="gray"
                          weight="medium"
                          size="sm"
                          className={`${getColor({
                            color,
                            type: "text",
                            state: "hover",
                          })}
                      ${getColor({
                        color,
                        type: "text",
                        state: "active",
                      })}`}
                        >
                          {link.name}
                        </Text>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="p-4 w-full h-full">
                <div
                  className={`flex justify-center items-center bg-white bg-opacity-[0.85] h-full w-full
              `}
                >
                  <Text
                    type="p"
                    weight="medium"
                    size="sm"
                    color="gray"
                    className={`${getColor({
                      color,
                      type: "text",
                      state: "hover",
                    })}
              ${getColor({
                color,
                type: "text",
                state: "active",
              })}`}
                  >
                    find out how!
                  </Text>
                </div>
              </div>
            )}
          </div>
        )}
        {imageUrl ? (
          <Image
            url={imageUrl}
            className={imageContain ? "object-contain" : "object-cover"}
          />
        ) : icon ? (
          <Icon icon={icon} size="10x" className="mx-auto text-blue-500" />
        ) : null}
      </div>
      <Text
        type="h3"
        size="lg"
        weight="regular"
        color={color}
        className="text-center mt-4"
      >
        {text}
      </Text>

      {isMobile && Array.isArray(links) ? (
        <div className="flex items-center justify-center my-4">
          <Button
            label="find out how"
            type={getButtonType(color)}
            size="md"
            as="button"
            onClick={handleIsLinksOpen(index)}
          />
        </div>
      ) : null}
    </div>
  );
}
