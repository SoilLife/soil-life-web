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
          className='absolute top-10 inset-x-0 text-center text-white sm:hidden'
        >
          contact us
        </Text>
        <Image url='/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg' className='object-cover' />
      </div>

      <div className='px-10 absolute bottom-10 w-full sm:bottom-auto sm:top-1/2 sm:max-w-3xl sm:transform sm:-translate-y-1/2'>
        <form className='rounded-lg p-4 bg-white shadow-lg sm:p-10' onSubmit={handleSubmit}>
          <Text type='h1' weight='regular' size='2xl' className='hidden text-pink-500 mb-10 sm:block'>
            contact us
          </Text>
          <div className='mb-4 md:mb-8 h-[54px]'>
            <Input id='name' label='name' />
          </div>
          <div className='mb-4 md:mb-8 h-[54px]'>
            <Input id='email' label='email' />
          </div>

          <div className='mb-4 md:mb-8 h-full'>
            <textarea
              id='message'
              name='message'
              placeholder='message'
              className='p-2 w-full h-20 font-acre-thin sm:p-4 sm:h-80 sm:text-[30px]'
              required
            />
          </div>

          <div className='flex justify-end space-x-4'>
            <button type='reset' className='px-8 py-2 text-white bg-gray-500'>
              Reset
            </button>
            <button type='submit' className='px-8 py-2 text-white bg-pink-500'>
              Send
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
