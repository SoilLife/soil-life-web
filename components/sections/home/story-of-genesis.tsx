import { YoutubeEmbed } from 'components/atoms/youtube-embed';
import { Button } from 'components/atoms/button';
import Link from 'next/link';

export function StoryOfGenesisSection() {
  return (
    <section className='h-screen'>
      <div className='container h-full flex flex-col items-center justify-center'>
        <div className='max-w-4xl mx-auto w-full mb-8'>
          <YoutubeEmbed embedId='K9QEoPvM45A' />
        </div>
        <div className='flex justify-center'>
          <Link href='/media'>
            <Button type='primary' label='find out more' />
          </Link>
        </div>
      </div>
    </section>
  );
}
