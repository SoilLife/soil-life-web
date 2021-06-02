import { SocialMediaIcons } from 'components/templates';
import { Section, Image } from 'components/atoms';

export function Footer() {
  return (
    <Section className='fp-auto-height'>
      <footer className='container'>
        <div className='flex items-center justify-between'>
          <Image url='/soil_all_connected_Xgb0g5f3Fqm.png' width='400' />
          <div className='w-1/3'>
            <p className='p-1 mb-6 text-white bg-pink-500'>stay connected.</p>
            <SocialMediaIcons className='flex gap-4 mb-6' />
            <p className='text-lg text-right text-teal-500'>
              soil life is a non-profit based out of uc davis and supported by the soils & biogeochemistry graduate
              group. we are on a mission to change the way the world looks at soil.
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
}
