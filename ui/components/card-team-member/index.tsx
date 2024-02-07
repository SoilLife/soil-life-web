import { Text } from "ui/atoms";
import Image from "next/image";

import styles from "./card-team-member.module.css";

export function CardTeamMember({
  name,
  position,
  photo,
  link,
  imgClassName,
}: {
  name: string;
  position: string;
  imgClassName?: string;
  photo?: string;
  link?: string;
}) {
  return (
    <div className={styles["card"]}>
      {photo && (
        <div
          className={`relative mx-auto mb-2 overflow-hidden
       ${styles["img-container"]}`}
        >
          <Image
            fill
            src={photo}
            alt=""
            className={`absolute top-0 left-0 object-cover ${imgClassName}`}
          />
        </div>
      )}
      <a href={link ?? "#"} target="__blank" rel="noopener,noreferrer">
        <Text
          type="h2"
          weight="medium"
          size="xs"
          className="hover:text-pink-500"
        >
          {name}
        </Text>
      </a>
      <Text type="h3" weight="light" size="2xs">
        {position}
      </Text>
    </div>
  );
}
