// components
import { Section, Image, Typography, CardTeamMember } from 'components/atoms';

export function OurTeamSection() {
  return (
    <Section>
      <div className='relative h-full'>
        <Image url='/About_Us/Our_Team_About_Us_NIPGMI969.jpg' />
        <div className='container absolute inset-0'>
          <Typography
            type='heading'
            className='absolute w-full pt-4 text-center text-white md:w-auto md:top-20 md:left-20'
          >
            Our Team
          </Typography>

          <div className='flex flex-col items-center justify-center h-full '>
            <div className='flex justify-center w-full mb-4 space-x-4 md:mb-8 md:space-x-8'>
              <CardTeamMember
                name='jessica chiartas'
                position='founder, director'
                photo='/About_Us/Our_Team/Jessica_Leigh_yBqrcFvWf.JPG'
              />
              <CardTeamMember
                name='autumn ward'
                position='producer, animator'
                photo='/About_Us/Our_Team/autumn_44YIVRff3.jpg'
              />
            </div>

            <div className='flex justify-center w-full mb-4 space-x-4 md:mb-8 md:space-x-8'>
              <CardTeamMember
                name='irfan ainuddin'
                position='technical advisor'
                photo='/About_Us/Our_Team/Irfan_Ainnudin_tech_MAJbqEfpD.jpg'
              />
              <CardTeamMember
                name='sinead santich'
                position='videographer'
                photo='/About_Us/Our_Team/Sinead_Santich_Videographer_kGo84M7li2s.jpg'
              />
              <CardTeamMember
                name='elisa massenzio'
                position='lead designer'
                photo='/About_Us/Our_Team/Sinead_Santich_Videographer_kGo84M7li2s.jpg'
              />
            </div>

            <div className='flex justify-center w-full space-x-4 md:space-x-8'>
              <CardTeamMember
                name='stephanie lew'
                position='content development'
                photo='/About_Us/Our_Team/stephanie_lew_NVSY98E-Ts8.jpg'
              />
              <CardTeamMember
                name='anna gomes'
                position='content development'
                photo='/About_Us/Our_Team/Gomes_GAIA_8hophxc2S.jpg'
              />
              <CardTeamMember
                name='billy le'
                position='web development'
                photo='/About_Us/Our_Team/billy-le_KqzbxIGrP.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
