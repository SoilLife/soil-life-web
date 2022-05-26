import { Section, Image, Text } from 'design-system/atoms';

export function ContactUsSection() {
  return (
    <Section>
      <div className='relative h-full flex flex-col xl:flex-row'>
        <Image
          className={`absolute top-0 left-0 h-1/3 object-cover
          sm:static sm:h-1/2
          xl:h-full xl:w-1/2
          `}
          url='/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg'
        />
        <div
          className={`z-10 max-w-xs mx-auto flex items-center justify-center w-full h-full transform translate-y-6 
     sm:translate-y-0 sm:max-w-lg
     xl:max-w-2xl
     2xl:max-w-3xl
          `}
        >
          <div
            className={`p-4 bg-white text-center rounded-3xl shadow-xl
          sm:shadow-none
          `}
          >
            <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              contact us
            </Text>
            <div className='space-y-2 xl:space-y-8'>
              <Text type='p' weight='thin' size='xs'>
                e-mail: 
                </Text>
              
            <div className='flex justify-center'>
          <Link href='mailto:jessica@soillife.org'>
            <Button as='link' size='md' type='neutral' label='jessica@soillife.org' />
          </Link>
                
        </div>
              
              
               <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              credits
              </Text>
              <Text type='p' weight='thin' size='xs'>
               We would like to give credit to the following for content contributions (with gratitude for their inspiration):
                The Nature and Property of Soils - Brady & Ray Weil
                  For the Love of Soil - Karen Vaughn and Yamina Pressler
                  The Nito Project
              </Text>{' '}
              <Text type='p' weight='thin' size='xs'>
                Thank you for visiting!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
