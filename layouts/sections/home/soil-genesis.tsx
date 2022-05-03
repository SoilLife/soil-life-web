import { Section, Button, YoutubeEmbed } from 'design-system/atoms';
import Link from 'next/link';

export function SoilGenesisSection() {
  return (
    <Section>
      <div className='container flex flex-col items-center justify-center h-full'>
        <div className='w-full mx-auto mb-8 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl'>
          <YoutubeEmbed embedId='_ZRw6ZzY3Dk' />
        </div>
        <div className='flex justify-center'>
          <Link href='/media'>
            <Button as='link' size='md' type='neutral' label='watch more' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
