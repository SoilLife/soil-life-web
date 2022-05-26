import { Section, Image, Text} from 'design-system/atoms';

export function ContactUsSection() {
  return (
    <Section>
      <div className={`h-full w-full sm:flex sm:flex-col-reverse xl:flex-row`}>
        <div
          className={`absolute h-full w-full flex items-center justify-center
        sm:static`}
        >
          <div
            className={`rounded-3xl shadow-lg bg-white max-w-xs mx-auto p-4 text-center transform translate-y-20
          sm:translate-y-0 sm:max-w-lg sm:shadow-none
          2xl:max-w-3xl`}
          >
            <Text type='h1' weight='regular' size='3xl' color='pink' className='mb-4 sm:mb-10'>
              contact us
            </Text>
            <div className='space-y-10'>
              <div>
                <Text type='p' weight='light' size='sm'>
                  jessica@soillife.org
                </Text>
              </div>
   className={`rounded-3xl shadow-lg bg-white max-w-xs mx-auto p-4 text-center transform translate-y-20
          sm:translate-y-0 sm:max-w-lg sm:shadow-none
          2xl:max-w-3xl`}
          >
            <Text type='h1' weight='regular' size='3xl' color='pink' className='mb-4 sm:mb-10'>
              contact us
            </Text>
            <div className='space-y-10'>
              <div>
                <Text type='p' weight='light' size='sm'>
                  The Nature and Property of Soils - Brady & Ray Weil
                  For the Love of Soil - Karen Vaughn and Yamina Pressler
                  The Nito Project
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Image
          className={`h-1/3 sm:h-1/2 object-cover
        xl:h-full xl:w-1/2`}
          url='/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg' className='object-cover'
        />
      </div>
    </Section>
  );
}
