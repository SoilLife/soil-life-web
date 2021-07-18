import { Section, Image } from 'components/atoms';

export function ContactUsSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <Section className='relative flex items-center'>
      <Image
        url='/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg'
        className='absolute z-[-1] w-full h-full object-cover'
      />

      <form
        className='absolute z-10 xl:max-w-[642px] xl:max-h-[753px] h-full w-full p-4 flex flex-col ml-10  bg-white  md:p-8'
        onSubmit={handleSubmit}
      >
        <h1 className='text-[70px] font-acre-regular text-pink-500 mb-4'>contact us</h1>
        <div className='mb-4 md:mb-8 h-[54px]'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='name'
            className='w-full font-acre-light text-[30px]'
            required
          />
        </div>
        <div className='mb-4 md:mb-8 h-[54px]'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email address'
            className='w-full  font-acre-light text-[30px]'
            required
          />
        </div>

        <div className='mb-4 md:mb-8 h-full'>
          <textarea
            id='message'
            name='message'
            placeholder='message'
            className='w-full  font-acre-light text-[30px]'
            required
            rows={12}
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
    </Section>
  );
}
