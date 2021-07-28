import { Section, Button, YoutubeEmbed } from 'design-system/atoms';
import Link from 'next/link';

export function SoilGenesisSection() {
  return (
    <Section>
      <div className='container flex flex-col items-center justify-center h-full'>
        <div className='w-full mx-auto mb-8 lg:max-w-[768px] xl:max-w-[1570px]'>
          <YoutubeEmbed embedId='K9QEoPvM45A' />
        </div>
        <div className='flex justify-center'>
          <Link href='/media'>
            <Button as='link' size='lg' type='neutral' label='watch more' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
