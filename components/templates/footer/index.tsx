import { SocialMediaIcons } from 'components/templates';
import { Section, Image } from 'components/atoms';

export function Footer() {
  return (
    <Section className='fp-auto-height border-t border-solid border-gray-500'>
      <footer className='container h-[700px] flex items-center'>
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <Image url='/soil_all_connected_Xgb0g5f3Fqm.png' className='h-[520px] ml-20 object-contain w-auto' />
          <div className='w-full sm:w-1/3'>
            <p className='p-1 mb-6 text-white bg-pink-500 text-[30px]'>stay connected.</p>
            <SocialMediaIcons className='flex justify-center gap-4 mb-6 sm:justify-start' />
            <p className='font-acre-regular text-[34px] text-center text-teal-500 sm:text-right'>
              soil life is a PhD project based out of UC Davis in collaboration and with support from USDA-NRCS. we are
              on a mission to change the way the world looks at soil.
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
}
