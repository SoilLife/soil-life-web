import { Section, Image, Text } from "design-system/atoms";

export function ContactUsSection() {
  return (
    <Section>
      <div className="h-full flex flex-col md:flex-row">
        <Image
          className="object-cover"
          url="/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg"
        />
        <div className="px-4 py-8 text-center w-full max-w-[600px]">
          <Text type="h1" weight="regular" size="3xl" color="teal" className="mb-4 xl:mb-10">
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
              <input type="hidden" name="_subject" value="Soil Life Web Contact" />
              <input type="text" name="_honey" className="hidden" />
              <input type="text" name="name" placeholder="name" required />
              <input type="email" name="email" placeholder="email" required />
              <textarea name="message" placeholder="message" required rows={3} />
              <button type="submit" className="self-end px-4 py-2 border border-solid border-pink-400 text-pink-400">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
