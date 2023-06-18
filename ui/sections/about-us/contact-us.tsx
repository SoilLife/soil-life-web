import { Text } from "ui/atoms";
import Image from "next/image";

// assets
import bgImg from "public/images/about-us/About_Us_Contact_Us_qr_gIU5QC.jpeg";

export function ContactUsSection() {
  return (
    <div className="relative h-screen flex flex-col snap-start overflow-hidden md:flex-row">
      <Image fill className="object-cover -z-10" src={bgImg} alt="" />
      <div className="px-4 py-8 text-center w-full max-w-[600px]">
        <Text
          type="h1"
          weight="regular"
          size="3xl"
          color="teal"
          className="mb-4 xl:mb-10"
        >
          contact us
        </Text>
        <div className="space-y-2 xl:space-y-2">
          <form
            target="_blank"
            action="https://formsubmit.co/jessica@soillife.org"
            method="POST"
            className="flex flex-col space-y-2"
          >
            <input type="hidden" name="_next" value="https://soillife.org/" />
            <input
              type="hidden"
              name="_subject"
              value="Soil Life Web Contact"
            />
            <input type="text" name="_honey" className="hidden" />
            <input type="text" name="name" placeholder="name" required />
            <input type="email" name="email" placeholder="email" required />
            <textarea name="message" placeholder="message" required rows={3} />
            <button
              type="submit"
              className="self-end px-4 py-2 border border-solid border-pink-400 text-pink-400"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
