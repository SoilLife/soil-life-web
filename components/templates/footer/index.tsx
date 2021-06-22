import { SocialMediaIcons } from 'components/templates';
import { Section, Image } from 'components/atoms';

export function Footer() {
  return (
    <Section className='fp-auto-height'>
      <footer className='container'>
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <div className='w-full h-full sm:w-[400px]'>
            <Image url='/soil_all_connected_Xgb0g5f3Fqm.png' className='object-cover' />
          </div>
          <div className='w-full sm:w-1/3'>
            <p className='p-1 mb-6 text-white bg-pink-500'>stay connected.</p>
            <SocialMediaIcons className='flex justify-center gap-4 mb-6 sm:justify-start' />
            <p className='text-lg text-center text-teal-500 sm:text-right'>
              soil life is a non-profit based out of uc davis and supported by the soils & biogeochemistry graduate
              group. we are on a mission to change the way the world looks at soil.
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
}
