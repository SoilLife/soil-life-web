import { SocialMediaIcons } from 'design-system/templates';
import { Section, Image, Text } from 'design-system/atoms';
import { useMedia } from 'react-use';

export function Footer({ className }: { className?: string }) {
  const isMobile = useMedia('(max-width: 639px)');
  return (
    <Section className={`fp-auto-height ${className}`}>
      <footer className='container h-full w-full flex items-center h-max-[612px] pb-10 sm:pb-0'>
        <div className='flex flex-col items-center justify-between w-full lg:flex-row'>
          <Image
            url='/soil_all_connected_Xgb0g5f3Fqm.png'
            className='h-full ml-0 object-contain w-auto max-h-[200px] sm:max-h-[382px] lg:ml-20'
          />
          <div className='w-full flex flex-col items-end'>
            <Text
              type='p'
              weight='bold'
              size='xs'
              color='white'
              className='px-1 py-2 mb-6 bg-pink-500 w-full sm:max-w-[610px]'
            >
              stay connected.
            </Text>
            <SocialMediaIcons className='flex justify-center gap-4 mb-6 sm:justify-start' />
            <div className='w-full sm:max-w-[731px]'>
              <Text
                type='p'
                weight='regular'
                size='sm'
                color='teal'
                className='text-center lg:text-right'
                style={{ lineHeight: isMobile ? undefined : '58px' }}
              >
                soil life is a PhD project based out of UC Davis in collaboration and with support from USDA-NRCS.
              </Text>
              <Text
                type='p'
                weight='bold'
                size='sm'
                color='teal'
                className='text-center lg:text-right'
                style={{ lineHeight: isMobile ? undefined : '58px' }}
              >
                we are on a mission to change the way the world looks at soil.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
}

Footer.defaultProps = {
  className: '',
};
