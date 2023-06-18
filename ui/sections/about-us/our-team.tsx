// components
import { Text } from "ui/atoms";
import { CardTeamMember } from "ui/components";
import Image from "next/image";

export function OurTeamSection() {
  return (
    <div className="relative h-screen snap-start overflow-hidden">
      <Image
        fill
        src="/images/about-us/Our_Team_About_Us_NIPGMI969_vRc-zJfAV.jpg"
        alt=""
        className="absolute top-0 left-0 object-cover z-[-1]"
      />
      <div className="container h-full">
        <Text
          type="h1"
          weight="regular"
          size="3xl"
          color="white"
          className="absolute top-0 left-1/2 -translate-x-1/2 sm:top-[8%] sm:left-[5%] sm:-translate-x-0"
        >
          our team
        </Text>
        <div className="h-full flex flex-col items-center justify-center w-max mx-auto gap-[2%]">
          <div className="flex justify-center gap-4 sm:gap-[5%]">
            <CardTeamMember
              name="jessica chiartas"
              position="founder, director"
              photo="/images/about-us/our-team/Jessica_Leigh_yBqrcFvWf.JPG"
              link="https://www.linkedin.com/in/mindbodysoil/"
            />
            <CardTeamMember
              name="autumn ward"
              position="producer, animator"
              photo="/images/about-us/our-team/autumn_44YIVRff3.jpg"
              link="https://www.instagram.com/honey_bee_studios_/"
            />
          </div>

          <div className="flex justify-center gap-4 sm:gap-[5%]">
            <CardTeamMember
              name="kabir zahangir"
              position="NRCS, soil health specialist "
              photo="/images/about-us/our-team/Kabir_Zahangir_30PeByRZXz.jpg"
              link="https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/soils/health/?cid=stelprdb1237522"
              imgClassName="object-top"
            />
            <CardTeamMember
              name="sinead santich"
              position="videographer"
              photo="/images/about-us/our-team/Sinead_Santich_Videographer_kGo84M7li2s.jpg"
              link="https://www.linkedin.com/in/sinead-santich-b46641155/"
            />
            <CardTeamMember
              name="elisa massenzio"
              position="lead designer"
              photo="/images/about-us/our-team/Elisa_Massenzio.jpeg"
              link="https://www.linkedin.com/in/elisamassenzio/"
              imgClassName="object-top object-[50%25%]"
            />
          </div>

          <div className="flex justify-center gap-4 sm:gap-[15%]">
            <CardTeamMember
              name="stephanie lew"
              position="content development"
              photo="/images/about-us/our-team/stephanie_lew_NVSY98E-Ts8.jpg"
              link="https://www.linkedin.com/in/stephanieelew/"
              imgClassName="object-top object-[50%0%]"
            />
            <CardTeamMember
              name="anna gomes"
              position="content development"
              photo="/images/about-us/our-team/Gomes_GAIA_8hophxc2S.jpg"
              link="https://www.linkedin.com/in/anna-gomes-85ab6b114/"
            />
            <CardTeamMember
              name="billy le"
              position="web development"
              photo="/images/about-us/our-team/billy-le_KqzbxIGrP.jpg"
              link="https://www.linkedin.com/in/lebilly/"
              imgClassName="object-top object-[50%20%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
