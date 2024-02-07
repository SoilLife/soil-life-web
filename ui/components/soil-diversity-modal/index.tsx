import { useOrientation, useMedia } from "react-use";

// components
import ReactModal from "react-modal";
import { Text, Icon } from "ui/atoms";
import Image from "next/image";

export function SoilDiversityModal({
  title,
  label,
  url,
  onClose,
  features,
}: {
  title: string;
  label: string;
  url: string;
  onClose: () => void;
  features: string[];
}) {
  const orientation = useOrientation();
  const isMobile = useMedia("(max-width: 640px)", false);
  const isLandscape = orientation.type.includes("landscape");

  return (
    <ReactModal
      isOpen
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      style={{
        content: {
          padding: 40,
          height: isMobile ? "100%" : isLandscape ? "80vh" : "50vh",
          width: isMobile ? "100%" : isLandscape ? "65vw" : "80vw",
          left: isMobile ? 0 : "50%",
          top: isMobile ? "40px" : "50%",
          transform: isMobile ? undefined : "translate(-50%, -50%)",
        },
        overlay: {
          zIndex: 2,
        },
      }}
      onRequestClose={onClose}
    >
      <div className="h-full overflow-auto">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <Icon icon="x" size={32} className="text-gray-500" />
        </button>
        <div className="h-full w-full flex flex-col-reverse sm:grid sm:grid-cols-5">
          <div className="flex flex-col items-center justify-between p-4 sm:col-span-3">
            <Text type="h2" weight="light" size="lg" className="text-center">
              {title}
            </Text>
            <Text
              type="h2"
              weight="light"
              size="lg"
              color="pink"
              className="text-center"
            >
              {label}
            </Text>
            <div>
              <Text
                type="h3"
                weight="light"
                size="md"
                className="underline text-center"
              >
                features:
              </Text>
              <ul className="space-y-1">
                {features.map((feature) => (
                  <li key={feature}>
                    <Text
                      type="h3"
                      weight="light"
                      size="md"
                      className="text-center"
                    >
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Image fill src={url} alt="" className="object-cover sm:col-span-2" />
        </div>
      </div>
    </ReactModal>
  );
}
