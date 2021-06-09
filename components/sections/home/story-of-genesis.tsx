import { Section, Button, YoutubeEmbed } from 'components/atoms';
import Link from 'next/link';

export function StoryOfGenesisSection() {
  return (
    <Section>
      <div className='container flex flex-col items-center justify-center h-full'>
        <div className='w-full max-w-4xl mx-auto mb-8'>
          <YoutubeEmbed embedId='K9QEoPvM45A' />
        </div>
        <div className='flex justify-center'>
          <Link href='/media'>
            <Button as='link' size='md' type='primary' label='find out more' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
