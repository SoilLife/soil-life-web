import { useState } from "react";
import { Footer, WebOfSoilMedia } from "ui/templates";
import { Text } from "ui/atoms";
import {
  WebOfSoilsGraphModal,
  WebOfSoilsLinkButtons,
  WebOfSoilsVideoPlayer,
} from "ui/components/web-of-soils";
import { textSizeMap } from "ui/atoms/text/text.utils";
import { useWebOfSoils, Node } from "helpers/use-web-of-soil";
import { VisGraph } from "ui/components";
import { visGraphOptions, handleGraphEvent } from "helpers/web-of-soil";
import DownArrow from "public/images/down_arrow_white.svg";
import Image from "next/image";
import Link from "next/link";
import { DefaultLayout } from "layouts";
import { WebOfSoilsHeader } from "ui/components/web-of-soils/header";

// assets
import bg from "public/images/home/6fs/Fiber_Slide_NkVYdxIN7-t.jpg";
import fiberIcon from "public/images/web-of-soil/icon-fiber.png";

const page = "fiber";

export default function FiberPage() {
  const [isWebOfSoilMModalOpen, setIsWebOfSoilModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [nodeSelections, setNodeSelections] = useState<
    (Node & { active: boolean })[]
  >([]);
  const { graph } = useWebOfSoils(
    "fiber data structure",
    "/images/web-of-soil/fiber/thumbnails/"
  );

  function handleCloseWebOfSoilModal() {
    setIsWebOfSoilModalOpen(false);
  }

  function handleWebOfSoilModalNodeClick(node: Node) {
    return () => {
      const nodes = nodeSelections.map((n) => ({
        ...n,
        active: n.id === node.id,
      }));
      setNodeSelections(nodes);
    };
  }

  return (
    <DefaultLayout title="Fiber">
      <WebOfSoilsHeader className="bg-yellow-500" />
      <main>
        <div className="relative h-screen snap-start">
          <Image
            fill
            src={bg}
            className="object-cover"
            alt=""
            placeholder="blur"
          />
          <div
            className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                     lg:block lg:left-auto lg:p-0 lg:h-auto lg:w-auto lg:top-1/2 lg:right-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[608px]`}
          >
            <div className="relative mx-auto h-[168px] w-[168px] lg:mx-0 lg:h-[241px] lg:w-[241px]">
              <Image
                fill
                src={fiberIcon}
                sizes="(min-width: 1024px) 241px, 168px"
                alt=""
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="lg"
              className="leading-9 bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0"
            >
              natural? synthetic? paper or plastic? from clothing to
              accessories, wood to oil; all that warms and protects us, starts
              in the soil.
            </Text>
            <div className="mt-[15%] flex justify-center sm:mt-10">
              <button
                className={`bg-white shadow font-acre-regular text-yellow-500 py-2 px-5 ${textSizeMap["lg"]}`}
                onClick={() => {
                  setIsVideoModalOpen(true);
                }}
              >
                watch the video
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link href="#web">
              <DownArrow className="h-5 hover:scale-105" />
            </Link>
          </div>
        </div>
        <div
          id="web"
          className="relative h-screen py-6 snap-start overflow-hidden"
        >
          <WebOfSoilsLinkButtons page={page} />
          <VisGraph
            graph={graph}
            options={visGraphOptions}
            events={handleGraphEvent({
              graph,
              setIsWebOfSoilModalOpen,
              setNodeSelections,
            })}
          />
        </div>
        <div className="relative h-screen snap-start">
          <WebOfSoilsLinkButtons page={page} />
          <WebOfSoilMedia filter={page} />
        </div>
      </main>
      <Footer className="snap-start mt-10" />
      <WebOfSoilsVideoPlayer
        video={page}
        isVideoModalOpen={isVideoModalOpen}
        setIsVideoModalOpen={setIsVideoModalOpen}
      />
      <WebOfSoilsGraphModal
        graph={graph}
        handleCloseWebOfSoilModal={handleCloseWebOfSoilModal}
        handleWebOfSoilModalNodeClick={handleWebOfSoilModalNodeClick}
        isWebOfSoilMModalOpen={isWebOfSoilMModalOpen}
        nodeSelections={nodeSelections}
      />
    </DefaultLayout>
  );
}