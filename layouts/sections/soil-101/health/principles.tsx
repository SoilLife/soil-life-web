import { useState } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
// import WellFedTopSvg from 'public/images/soil-101/health/wellfed_top.svg';
// import WellFedMiddleSvg from 'public/images/soil-101/health/wellfed_middle.svg';
// import WellFedBottomSvg from 'public/images/soil-101/health/wellfed_bottom.svg';
import WellFedFinalSvg from 'public/images/soil-101/health/wellfed_final.svg';

// import DiversifiedTopSvg from 'public/images/soil-101/health/diversified_top.svg';
// import DiversifiedMiddleSvg from 'public/images/soil-101/health/diversified_middle.svg';
// import DiversifiedBottomSvg from 'public/images/soil-101/health/diversified_bottom.svg';
import DiversifiedFinalSvg from 'public/images/soil-101/health/diversified_final.svg';

import BalancedTopSvg from 'public/images/soil-101/health/balanced_top.svg';
import BalancedMiddleSvg from 'public/images/soil-101/health/balanced_middle.svg';
import BalancedBottomSvg from 'public/images/soil-101/health/balanced_bottom.svg';

import HydratedTopSvg from 'public/images/soil-101/health/hydrated_top.svg';
import HydratedMiddleSvg from 'public/images/soil-101/health/hydrated_middle.svg';
import HydratedBottomSvg from 'public/images/soil-101/health/hydrated_bottom.svg';

import CoveredTopSvg from 'public/images/soil-101/health/covered_top.svg';
import CoveredMiddleSvg from 'public/images/soil-101/health/covered_middle.svg';
import CoveredBottomSvg from 'public/images/soil-101/health/covered_bottom.svg';

import AnimalsSvg from 'public/images/soil-101/health/wild_soil.svg';
import TimingSvg from 'public/images/soil-101/health/prescribed_graze_soil.svg';
import IntensitySvg from 'public/images/soil-101/health/timing_duration.svg';
import LeftArrow from 'public/images/left_arrow_pink_thick.svg';
import RightArrow from 'public/images/right_arrow_pink_thick.svg';

import styles from '../soil-101.module.css';

const integrateAnimalsMap = {
  animals: <AnimalsSvg className='mx-auto max-h-[60vh]' />,
  timing: <TimingSvg className='mx-auto max-h-[60vh]' />,
  intensity: <IntensitySvg className='mx-auto max-h-[60vh]' />,
};

const integrateAnimalsHeadings: (keyof typeof integrateAnimalsMap)[] = ['animals', 'timing', 'intensity'];

export const PrinciplesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [activeHeading, setActiveHeading] = useState<keyof typeof integrateAnimalsMap>('animals');
  return (
    <div ref={props.assignRef} className={`text-center ${styles['principles-section']}`}>
      <Text
        id='principles'
        type='h1'
        weight='bold'
        size='4xl'
        color='blue'
        className={`text-left ${styles['anchor']} ${styles['heading']}`}
      >
        principles of soil health
      </Text>

      <div className='space-y-8'>
        <Text type='p' weight='bold' size='2xl' color='pink'>
          keep it active and well-fed!
        </Text>
        <WellFedFinalSvg />

        {/* <div className='relative'>
          <WellFedTopSvg />
          <Text type='p' weight='light' size='lg' className='w-3/4 mx-auto'>
            instead of leaving ﬁelds to rest or lay "fallow," keep plants in the ground year round and capitalize off
            all that free solar energy!
          </Text>
        </div>

        <WellFedMiddleSvg className='sm:w-1/2 mx-auto' />

        <Text type='p' weight='light' size='lg'>
          this provides a steady stream of fuel to power up your resident microbes, keeping them active & happy.
        </Text>

        <WellFedBottomSvg /> */}
      </div>

      <DiversifiedFinalSvg />
      {/* <div className='space-y-8'>
        <div className='inline-block relative mt-8 sm:mt-20'>
          <DiversifiedTopSvg className='mx-auto h-20 sm:absolute sm:top-0 sm:-right-32 sm:h-32' />
          <Text type='p' weight='bold' size='2xl' color="pink">
            keep it diversified!
          </Text>
          <Text type='p' weight='light' size='2xl' color="pink">
            a teaspoon of healthy soil
          </Text>
          <Text type='p' weight='light' size='2xl' color="pink">
            contains billions of microorganisms
          </Text>
        </div>

        <Text type='p' weight='light' size='lg'>
          soils not only boast 1/4 of the world's biodiversity, they hold the greatest concentration of biomass anywhere
          on the planet!
        </Text>

        <DiversifiedMiddleSvg className='sm:w-1/2 mx-auto' />

        <Text type='p' weight='light' size='lg'>
          although{' '}
          <Text type='span' weight='bold' size='lg'>
            living microbes
          </Text>{' '}
          make up only{' '}
          <Text type='span' weight='bold' size='lg'>
            ~0.5%
          </Text>{' '}
          of the entire soil, dead microbes make up{' '}
          <Text type='span' weight='bold' size='lg'>
            50-80%
          </Text>{' '}
          of soil organic matter.
        </Text>

        <DiversifiedBottomSvg />
      </div> */}

      <div className='space-y-8'>
        <BalancedTopSvg className='h-32 mx-auto' />
        <Text type='p' weight='bold' size='2xl' color='pink'>
          keep it balanced!
        </Text>
        <Text type='p' weight='light' size='2xl' color='pink'>
          healthy soil has room to breathe
        </Text>

        <Text type='p' weight='light' size='lg' className={styles['p-60']}>
          about half of the soil's volume should consist of open pore space, allowing{' '}
          <Text type='span' weight='bold' size='lg' color='blue'>
            air
          </Text>{' '}
          and{' '}
          <Text type='span' weight='bold' size='lg' color='blue'>
            water
          </Text>{' '}
          to flow freely.
        </Text>

        <BalancedMiddleSvg className='sm:w-1/2 mx-auto' />

        <Text type='p' weight='light' size='lg'>
          an ideal breakdown would include:
        </Text>

        <BalancedBottomSvg />
      </div>

      <div className='space-y-8'>
        <div className='inline-block relative pt-20'>
          <HydratedTopSvg className='mx-auto h-20 sm:absolute sm:top-0 sm:-right-8 sm:h-32' />
          <Text type='p' weight='bold' size='2xl' color='pink'>
            keep it hydrated!
          </Text>
          <Text type='p' weight='light' size='2xl' color='pink'>
            healthy soil carries weight.
          </Text>
        </div>

        <HydratedMiddleSvg className='sm:w-1/2 mx-auto' />

        <Text type='p' weight='light' size='lg' className={styles['p-60']}>
          soil organic matter holds approximately{' '}
          <Text type='span' weight='bold' size='lg' color='blue'>
            10 times
          </Text>{' '}
          its weight in water.
        </Text>

        <Text type='p' weight='light' size='lg' className={styles['p-60']}>
          for every 1% increase in soil organic matter, a soil can hold upto 1 extra inch -- or 20,000 extra gallons --
          of water/acre.
        </Text>

        <HydratedBottomSvg />
      </div>

      <div className='space-y-8'>
        <div className='inline-block relative mt-8 xl:mt-20'>
          <CoveredTopSvg className='h-20 mx-auto xl:absolute xl:top-0 xl:left-full xl:h-32' />
          <Text type='p' weight='bold' size='2xl' color='pink'>
            keep it covered!
          </Text>
          <Text type='p' weight='light' size='2xl' color='pink'>
            healthy soil needs full-time coverage.
          </Text>
        </div>

        <CoveredMiddleSvg className='sm:w-3/4 mx-auto' />

        <Text type='p' weight='light' size='lg' className={styles['p-60']}>
          seeding with a "cocktail mix" of 6-12 different plants provides diversity above-ground, which breeds much
          needed diversity below-ground. including legumes in your cocktail allows microbes to pull nitrogen out of the
          atmosphere and into the soil -- free fertilizer for your cash crop.
        </Text>

        <CoveredBottomSvg />
      </div>

      <div className='space-y-8'>
        <Text type='h2' weight='bold' size='xl' color='pink' className='mt-8 sm:mt-20'>
          integrate animals{' '}
          <Text type='span' weight='light' size='xl'>
            - its the circle of life
          </Text>
        </Text>
        <ul className='flex items-center justify-center py-3 space-x-10 sm:space-x-20'>
          {integrateAnimalsHeadings.map((heading) => (
            <li
              key={heading}
              onClick={() => {
                setActiveHeading(heading);
              }}
            >
              <Text
                type='h2'
                weight={heading === activeHeading ? 'bold' : 'light'}
                size='md'
                className={heading === activeHeading ? 'cursor-default' : 'cursor-pointer'}
              >
                {heading}
              </Text>
            </li>
          ))}
        </ul>
        <div className='mx-auto relative max-w-[50vw]'>
          <button
            className='absolute top-1/2 -translate-y-1/2 -left-8'
            onClick={() => {
              setActiveHeading((heading) => {
                if (heading === 'animals') {
                  return 'intensity';
                } else if (heading === 'intensity') {
                  return 'timing';
                } else if (heading === 'timing') {
                  return 'animals';
                } else return heading;
              });
            }}
          >
            <LeftArrow height={60} />
          </button>
          <button
            className='absolute top-1/2 -translate-y-1/2 -right-8'
            onClick={() => {
              setActiveHeading((heading) => {
                if (heading === 'animals') {
                  return 'timing';
                } else if (heading === 'intensity') {
                  return 'animals';
                } else if (heading === 'timing') {
                  return 'intensity';
                } else return heading;
              });
            }}
          >
            <RightArrow height={60} />
          </button>
          {integrateAnimalsMap[activeHeading]}
        </div>
      </div>
    </div>
  );
};
