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
import bg from "public/images/home/6fs/Fun_XHWRw699s.jpg";
import funIcon from "public/images/web-of-soil/icon-fun.png";

const page = "fun";

export default function FunPage() {
  const [isWebOfSoilMModalOpen, setIsWebOfSoilModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [nodeSelections, setNodeSelections] = useState<
    (Node & { active: boolean })[]
  >([]);
  const { graph } = useWebOfSoils(
    "fun data structure",
    "/images/web-of-soil/fun/thumbnails/"
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
    <DefaultLayout title="Fun">
      <WebOfSoilsHeader className="bg-teal-500" />
      <main>
        <div className="relative h-screen snap-start">
          <Image
            fill
            className="object-cover"
            src={bg}
            alt=""
            placeholder="blur"
          />
          <div
            className={`p-6 flex flex-col items-center justify-center h-full w-full absolute top-0 left-0
                   lg:p-0 lg:h-auto lg:left-auto lg:top-auto lg:flex-row lg:bottom-[20%]`}
          >
            <div className="relative h-[168px] w-[168px] lg:h-[241px] lg:w-[241px]">
              <Image
                fill
                src={funIcon}
                sizes="(min-width: 1024px) 241px, 168px"
                alt=""
                placeholder="blur"
              />
            </div>
            <div className="lg:w-[760px]">
              <Text
                type="p"
                weight="light"
                size="lg"
                className="bg-white rounded-lg p-6 max-w-md lg:max-w-none lg:bg-transparent lg:p-0"
              >
                from paints and pottery to playing fields and parks, soils
                provide the grounds for music, sports, and art!
              </Text>
              <div className="mt-[15%] flex justify-center sm:mt-10">
                <button
                  className={`bg-white shadow font-acre-regular text-teal-500 py-2 px-5 ${textSizeMap["lg"]}`}
                  onClick={() => {
                    setIsVideoModalOpen(true);
                  }}
                >
                  watch the video
                </button>
              </div>
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
