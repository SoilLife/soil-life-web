import { Section, Button, YoutubeEmbed } from 'design-system/atoms';
import Link from 'next/link';

export function SoilGenesisSection() {
  return (
    <Section>
      <div className='container flex flex-col items-center justify-center h-full'>
        <div className='max-w-[1570px] w-full mx-auto mb-8'>
          <YoutubeEmbed embedId='K9QEoPvM45A' />
        </div>
        <div className='flex justify-center'>
          <Link href='/media'>
            <Button as='link' size='md' type='neutral' label='watch more' className='font-acre-semibold text-[40px]' />
          </Link>
        </div>
      </div>
    </Section>
  );
}
