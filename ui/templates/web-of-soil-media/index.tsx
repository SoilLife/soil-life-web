import { useState, useRef, useMemo, memo } from "react";

// components
import { Modal, Icon, Text } from "ui/atoms";
import ReactPlayer from "react-player";
import Image from "next/image";

// helpers
import { useMediaHub } from "helpers/use-media-hub";
import { Media } from "helpers/use-media-hub";

// styles
import styles from "./web-of-soil-media.module.css";

export const WebOfSoilMedia = memo(function ({ filter }: { filter: string }) {
  const { media } = useMediaHub();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState<Media[]>([]);
  const [mediaIndex, setMediaIndex] = useState(0);
  const imageKitContainerRef = useRef<HTMLDivElement | null>(null);

  const filteredMedia = useMemo(() => {
    return Object.entries(media).reduce(
      (acc, [key, media]) => {
        if (key === "reports") return acc;
        const filteredMedia = media?.filter((medium) => {
          let found = false;
          if (medium.Tags?.length) {
            for (const tag of medium.Tags) {
              if (filter.includes(tag.toLowerCase())) {
                found = true;
              }
            }
          }

          return found;
        });
        if (key === "infographic") {
          acc.infographic.push(...filteredMedia);
        } else {
          acc.videos.push(...filteredMedia);
        }
        return acc;
      },
      {
        videos: [] as Media[],
        infographic: [] as Media[],
      }
    );
  }, [media, filter]);

  function handleModalOpen({
    key,
    index,
  }: {
    key: keyof typeof filteredMedia;
    index: number;
  }) {
    return () => {
      setMediaIndex(index);
      setModalMedia(filteredMedia[key] || []);
      setIsModalOpen(true);
    };
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handlePrevious() {
    const count = modalMedia.length;
    if (mediaIndex - 1 < 0) {
      setMediaIndex(count - 1);
    } else {
      setMediaIndex(mediaIndex - 1);
    }
  }

  function handleNext() {
    const count = modalMedia.length;
    if (mediaIndex + 1 === count) {
      setMediaIndex(0);
    } else {
      setMediaIndex(mediaIndex + 1);
    }
  }

  return (
    <>
      <div className="h-full flex flex-col justify-center mx-auto max-w-[80%]">
        {Object.entries(filteredMedia).map(([mediaTitle, media], index) => {
          if (!media.length) return null;
          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <Text
                  type="p"
                  weight="regular"
                  size="sm"
                  color="white"
                  className="py-1 px-10 md:w-3/4 lg:w-1/2 xl:w-1/3 bg-pink-500"
                >
                  {mediaTitle}
                </Text>
                <Text
                  type="p"
                  weight="light"
                  size="2xs"
                  className="pr-10 text-right"
                >
                  ({media.length})
                </Text>
              </div>

              <div
                className={`media-hub__scroll__container relative overflow-y-hidden flex items-center overflow-x-auto mx-10 ${styles["media-container"]} min-h-[320px]`}
              >
                <div
                  className={`flex gap-4 items-center ${styles["media-section"]}`}
                >
                  {media?.map((medium, index) => {
                    return (
                      <MediaContainer
                        key={`${medium.Title}_${index}`}
                        className="focus:ring-4 focus:ring-pink-500"
                        onClick={handleModalOpen({
                          key: mediaTitle as keyof typeof filteredMedia,
                          index,
                        })}
                        href={medium.URL}
                        renderAs={
                          medium.mediaType === "link" ||
                          medium.mediaType === "pdf"
                            ? "link"
                            : "button"
                        }
                      >
                        <div className="relative flex flex-col group">
                          <div
                            className={`relative aspect-w-16 aspect-h-9 transition-all ease-in-out duration-500 w-[262px] group-hover:w-[300px]`}
                          >
                            <Image
                              fill
                              key={`${medium.Title}_${index}`}
                              src={
                                medium.mediaType === "video" && medium.thumbnail
                                  ? medium.thumbnail
                                  : medium.mediaType === "image"
                                  ? medium?.URL ?? ""
                                  : medium.mediaType === "local-image"
                                  ? medium?.URL ?? ""
                                  : "/images/logo.png"
                              }
                              className={
                                medium.mediaType === "video" && medium.thumbnail
                                  ? "object-cover"
                                  : medium.mediaType === "image"
                                  ? "object-contain"
                                  : "p-8 object-contain"
                              }
                              alt=""
                              loading="lazy"
                            />
                            <div className="flex opacity-0 transition-all duration-200 ease absolute group-hover:opacity-100 items-center justify-center h-full w-full group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent">
                              <div className="w-10 h-10 rounded-full text-pink-600 shadow-md cursor-pointer ring-2 ring-white bg-pink-800 flex items-center justify-center">
                                <Icon
                                  icon={
                                    medium.mediaType === "video"
                                      ? "play"
                                      : medium.mediaType === "link"
                                      ? "link"
                                      : medium.mediaType === "pdf"
                                      ? "file-text"
                                      : "image"
                                  }
                                  className={
                                    medium.mediaType === "video" ? "pl-1" : ""
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <Text
                            type="p"
                            weight="light"
                            size="2xs"
                            className="absolute top-[calc(105%);] text-sm transition-all ease-in duration-500 group-hover:top-auto group-hover:p-4 group-hover:bottom-0 group-hover:text-pink-500 pointer-events-none"
                          >
                            {medium.Title}
                          </Text>
                        </div>
                      </MediaContainer>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        handleClose={handleModalClose}
        slides={{ activeSlideIndex: mediaIndex, count: modalMedia.length }}
        pagination={{
          handleNext: handleNext,
          handlePrevious: handlePrevious,
        }}
      >
        {modalMedia.length > 0 &&
        modalMedia?.[mediaIndex]?.URL &&
        modalMedia?.[mediaIndex]?.mediaType === "video" ? (
          <ReactPlayer
            controls={true}
            key={`${modalMedia[mediaIndex]?.Title}_${mediaIndex}`}
            height={"90%"}
            width={"95%"}
            url={modalMedia[mediaIndex]?.URL as string}
            style={{
              margin: "0 auto",
            }}
          />
        ) : modalMedia?.[mediaIndex]?.mediaType === "image" ? (
          <Image
            fill
            key={modalMedia[mediaIndex]?.URL}
            src={modalMedia?.[mediaIndex]?.URL as string}
            alt=""
            loading="lazy"
            onLoad={(event) => {
              const b = event.target as HTMLImageElement;
              const ratio = b.naturalWidth / b.naturalHeight;
              if (imageKitContainerRef.current) {
                if (ratio >= 1) {
                  imageKitContainerRef.current.style.maxWidth = "80%";
                } else {
                  imageKitContainerRef.current.style.maxWidth = "50%";
                }
              }
            }}
          />
        ) : null}
      </Modal>
    </>
  );
});

function MediaContainer({
  renderAs,
  href,
  onClick,
  ...props
}: {
  renderAs: "link" | "button";
  href?: string | null;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (renderAs === "link") {
    return (
      <a
        href={href || "#"}
        target="_blank"
        rel="noreferrer noopener"
        {...props}
      />
    );
  } else if (renderAs === "button") {
    return <button onClick={onClick} {...props} />;
  } else {
    return null;
  }
}
