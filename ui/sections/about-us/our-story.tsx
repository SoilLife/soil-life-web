import { Text } from "ui/atoms";
import Image from "next/image";

// assets
import ourStoryImg from "public/images/about-us/About_Us_Our_Story_BVF_XwsIqxs_V.jpeg";

function Paragraph(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`font-acre-thin font-[18px] leading-[28px] xl:font-[22px] 2xl:font-[28px] 2xl:leading-[36px] ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </p>
  );
}

export function OurStorySection() {
  return (
    <div className="h-screen snap-start overflow-hidden lg:flex">
      <div className="relative w-full">
        <Image
          src={ourStoryImg}
          alt=""
          className="h-full w-full object-cover lg:object-right"
          placeholder="blur"
        />
      </div>
      <div
        className="
          flex flex-col items-center justify-center
          w-[304px]
          sm:w-3/4
          lg:static lg:translate-y-0 lg:translate-x-0 lg:w-full lg:max-w-[543px]
          2xl:w-full
          "
      >
        <div
          className={`p-6 lg:p-12 bg-white text-center rounded-3xl shadow-xl
          lg:shadow-none lg:rounded-none
          `}
        >
          <Text
            type="h1"
            weight="regular"
            size="3xl"
            color="teal"
            className="mb-4 xl:mb-10"
          >
            our story
          </Text>
          <div className="space-y-2 xl:space-y-8">
            <Paragraph>
              in 2015, graduate students at University of California, Davis were
              invited to a hearing on the state Healthy Soils Initiative.
              listening to the various stakeholders, they witnessed first hand
              the power of storytelling to captivate an audience, but also the
              challenges of communicating uncertainty and nuance regarding the
              dynamic nature of soil.
            </Paragraph>
            <Paragraph className="hidden sm:block">
              capitalizing on the momentum of the UN International Year of Soil,
              they started a seminar to discuss and develop science
              communication. the seminar evolved into a campaign to raise
              awareness about the value and importance of soil, which caught the
              attention of the Natural Resource Conservation Service and
              ultimately, led to a collaboration to produce this website and the
              tools housed within it.
            </Paragraph>
            <Paragraph className="hidden sm:block">
              we hope you dig it!
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
