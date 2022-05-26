import { Section, Image, Text, Input } from 'design-system/atoms';

export function ContactUsSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <Section className='relative'>
      <div className='relative h-3/4 w-full sm:h-full sm:absolute'>
        <Text
          type='h1'
          weight='regular'
          size='3xl'
          color='white'
          className='absolute top-10 inset-x-0 text-center sm:hidden'
        >
          contact us
        </Text>
        <Image url='/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg' className='object-cover' />
      </div>

      <div className='px-10 absolute bottom-10 w-full sm:bottom-auto sm:top-1/2 sm:max-w-3xl sm:transform sm:-translate-y-1/2'>
        <form className='rounded-lg p-4 bg-white shadow-lg sm:p-10' onSubmit={handleSubmit}>
          <Text type='h1' weight='regular' size='2xl' color='pink' className='hidden mb-10 sm:block'>
            contact us
          </Text>
                <Text type='p' weight='light' size='sm'>
                  e-mail: jessica@soillife.org
                </Text>
              </div>
        
        <div className='px-10 absolute bottom-10 w-full sm:bottom-auto sm:top-1/2 sm:max-w-3xl sm:transform sm:-translate-y-1/2'>
        <form className='rounded-lg p-4 bg-white shadow-lg sm:p-10' onSubmit={handleSubmit}>
          <Text type='h1' weight='regular' size='2xl' color='pink' className='hidden mb-10 sm:block'>
            credits
          </Text>
          <Text type='p' weight='light' size='sm'>
            The Nature and Properties of Soil - Nail Brady & Ray Weil      
            For the Love of Soil - Karen Vaughn & Yamina Pressler
            The Nito Project
                </Text>
      </div>
    </Section>
  );
}
