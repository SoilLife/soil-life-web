import { SocialMediaIcons } from 'design-system/templates';
import { Section, Image, Text } from 'design-system/atoms';

export function Footer({ className }: { className?: string }) {
  return (
    <Section className={`fp-auto-height ${className}`}>
      <footer className='container h-full flex items-center h-max-[700px] pb-10 sm:pb-0'>
        <div className='flex flex-col items-center justify-between lg:flex-row'>
          <Image
            url='/soil_all_connected_Xgb0g5f3Fqm.png'
            className='h-full ml-0 object-contain w-auto max-h-[200px] sm:max-h-[520px] lg:ml-20'
          />
          <div className='w-full lg:w-1/3'>
            <Text type='p' weight='regular' size='md' className='p-1 mb-6 text-white bg-pink-500'>
              stay connected.
            </Text>
            <SocialMediaIcons className='flex justify-center gap-4 mb-6 sm:justify-start' />
            <Text type='p' weight='regular' size='sm' className='text-center text-teal-500 lg:text-right'>
              soil life is a PhD project based out of UC Davis in collaboration and with support from USDA-NRCS. we are
              on a mission to change the way the world looks at soil.
            </Text>
          </div>
        </div>
      </footer>
    </Section>
  );
}

Footer.defaultProps = {
  className: '',
};
