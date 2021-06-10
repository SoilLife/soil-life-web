// components
import { FullPage } from 'components/fullpage';
import { Section, Typography } from 'components/atoms';

// data
import { getInvolvedHeadings } from 'data/main-headings';

export default function AtHomePage() {
  return (
    <FullPage
      type='main'
      mainHeaderProps={{
        headings: getInvolvedHeadings,
        pathName: 'get-involved',
        backgroundColor: 'var(--pink-500)',
      }}
    >
      <Section>
        <Typography type='heading' className='py-4 text-center text-pink-500'>
          At Home
        </Typography>
        <div className='grid h-full grid-cols-4 gap-4 auto-rows-fr'></div>
      </Section>
    </FullPage>
  );
}
