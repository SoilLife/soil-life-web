import { Footer, WebOfSoilMedia } from "ui/templates";
import { Text } from "ui/atoms";
import {
  WebOfSoilsGraphModal,
  WebOfSoilsLinkButtons,
  WebOfSoilsVideoPlayer,
} from "ui/components/web-of-soils";
import { textSizeMap } from "ui/atoms/text/text.utils";
import { useState } from "react";
import { useWebOfSoils, Node } from "helpers/use-web-of-soil";
import { VisGraph } from "ui/components";
import { visGraphOptions, handleGraphEvent } from "helpers/web-of-soil";
import DownArrow from "public/images/down_arrow_white.svg";
import Image from "next/image";
import Link from "next/link";
import { DefaultLayout } from "layouts";
import { WebOfSoilsHeader } from "ui/components/web-of-soils/header";

// assets
import bg from "public/images/home/6fs/cup_of_pills_ioFvZZ0lo.png";
import farmaceuticalsIcon from "public/images/web-of-soil/icon-farmaceutical.png";

const page = "farmaceuticals";

export default function FarmaceuticalsPage() {
  const [isWebOfSoilMModalOpen, setIsWebOfSoilModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [nodeSelections, setNodeSelections] = useState<
    (Node & { active: boolean })[]
  >([]);
  const { graph } = useWebOfSoils(
    "farmaceuticals data structure",
    "/images/web-of-soil/farmaceuticals/thumbnails/"
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
    <DefaultLayout title="Farmaceuticals">
      <WebOfSoilsHeader className="bg-orange-500" />
      <main>
        <div className="relative h-screen snap-start">
          <Image
            fill
            className="object-cover md:object-[-120px] 2xl:object-left"
            src={bg}
            alt=""
            placeholder="blur"
          />
          <div
            className={`p-6 flex flex-col h-full w-full items-center justify-center absolute top-0 left-0
                    lg:p-0 lg:block lg:h-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/4 lg:max-w-[828px]`}
          >
            <div className="relative mx-auto h-[168px] w-[168px] lg:h-[241px] lg:w-[241px]">
              <Image
                fill
                src={farmaceuticalsIcon}
                sizes="(min-width: 1024px) 241px, 168px"
                alt=""
                placeholder="blur"
              />
            </div>
            <Text
              type="p"
              weight="light"
              size="lg"
              className="bg-white rounded-lg p-6 lg:bg-transparent lg:p-0"
            >
              soils are home to the plants, fungi, & bacteria that produce most
              of the world's medicine — and nearly 98% of the microbes that
              inhabit it have yet to be discovered!
            </Text>
            <div className="mt-[15%] flex justify-center sm:mt-10">
              <button
                className={`bg-white shadow font-acre-regular text-orange-500 py-2 px-5 ${textSizeMap["lg"]}`}
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
