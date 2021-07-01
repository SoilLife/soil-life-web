import { Section, Image, Typography } from 'components/atoms';

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

      <form className='absolute z-10 xl:w-[30vw] p-4 flex flex-col ml-10  bg-white  md:p-8' onSubmit={handleSubmit}>
        <Typography type='subheading' className='mb-4 text-pink-400 md:mb-8'>
          Contact Us
        </Typography>
        <div className='mb-4 md:mb-8'>
          <label htmlFor='name' className='block'>
            name
          </label>
          <input type='text' id='name' name='name' placeholder='name' className='w-full' required />
        </div>
        <div className='mb-4 md:mb-8'>
          <label htmlFor='email' className='block'>
            email
          </label>
          <input type='email' id='email' name='email' placeholder='email' className='w-full' required />
        </div>

        <div className='mb-4 md:mb-8'>
          <label htmlFor='message' className='block'>
            message
          </label>
          <textarea id='message' name='message' placeholder='message' className='w-full' required />
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
