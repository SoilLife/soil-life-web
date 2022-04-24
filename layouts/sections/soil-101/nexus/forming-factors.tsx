import { useState } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import ParentMaterialSvg from 'public/images/soil-101/nexus/clorpt_pm.svg';
import ClimateSvg from 'public/images/soil-101/nexus/clorpt_climate.svg';
import TopographySvg from 'public/images/soil-101/nexus/clorpt_topography.svg';
import OrganismsSvg from 'public/images/soil-101/nexus/clorpt_organisms.svg';
import TimeSvg from 'public/images/soil-101/nexus/clorpt_time.svg';
import HumansSvg from 'public/images/soil-101/nexus/clorpt_anthro.svg';

import styles from '../soil-101.module.css';

const factorSvgMap: { [key: string]: React.ReactElement } = {
  'parent material': (
    <div className='space-y-4'>
      <Text type='h2' weight='light' size='xs' className='p-4 text-center'>
        as temperature and precipitation increase, organisms are more active, chemical reactions are faster, and more
        weathering occurs over time.
      </Text>
      <ParentMaterialSvg />
    </div>
  ),
  climate: (
    <div className='space-y-4'>
      <Text type='h2' weight='light' size='xs' className='p-4 text-center'>
        the finer the particles, the faster the weathering, but mineralogy matters! silica is one of the least
        weatherable minerals, while minerals high in iron and magnesium weather readily.
      </Text>
      <ClimateSvg />
    </div>
  ),
  topography: (
    <div className='space-y-4'>
      <Text type='h2' weight='light' size='xs' className='p-4 text-center'>
        in the northern hemisphere, north facing slopes receives less sun and are often cooler and wetter; south-facing
        slopes receives more sun and are often, warmer and drier.
      </Text>

      <TopographySvg />
    </div>
  ),
  organisms: (
    <div className='space-y-4'>
      <Text type='h2' weight='light' size='xs' className='p-4 text-center'>
        plants and microbes produce carbon dioxide (which forms carbonic acid in water) and a host of other organic
        acids that weather minerals into soil-sized particles.
      </Text>
      <OrganismsSvg />
    </div>
  ),
  time: (
    <div className='space-y-4'>
      <Text type='h2' weight='light' size='xs' className='p-4 text-center'>
        like us, soil ages! but time is relative to all other factors. for instance, a soil in a hot/wet climate will
        weather far more in 100 years than a soil in a cold/dry climate.
      </Text>
      <TimeSvg />
    </div>
  ),
  humans: (
    <div className='space-y-4'>
      <Text type='h2' weight='light' size='xs' className='p-4 text-center'>
        soils form on geologic time scales that extends far beyond a human lifetime. however, while it takes 1,000 years
        to build an inch of topsoil, the same amount can be washed away in just a few decades when poorly managed
      </Text>
      <HumansSvg className='p-4' />
    </div>
  ),
};

export const FormingFactorsSection = () => {
  const [activeFactor, setActiveFactor] = useState('parent material');

  function handleFactorClick(factor: string) {
    return () => {
      if (factor !== activeFactor) {
        setActiveFactor(factor);
      }
    };
  }
  return (
    <div className={`${styles['section']}`}>
      <Text type='h1' weight='bold' size='4xl' color='pink' className={styles['heading']}>
        soil forming factors
      </Text>
      <Text type='p' weight='light' size='md' className={styles['p-50']}>
        pedogenesis is the formation of soil over time. as energy flows through the system, in the form of heat,
        precipitation, and biological activity; soils weather, developing horizons and other distinct morphological
        features.
      </Text>
      <div className='border border-solid border-gray-500 max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-80px)]'>
        <div className='overflow-x-auto overflow-y-hidden'>
          <ul className='flex flex-nowrap'>
            {Object.keys(factorSvgMap).map((factor) => (
              <li key={factor} className='sm:flex-grow sm:w-full'>
                <button
                  className={`${factor === activeFactor ? 'bg-gray-700' : 'bg-gray-500'} w-full p-4`}
                  onClick={handleFactorClick(factor)}
                >
                  <Text type='h3' weight='thin' size='xs' color='white' className='whitespace-nowrap'>
                    {factor}
                  </Text>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid place-items-center'>{factorSvgMap[activeFactor]}</div>
      </div>
    </div>
  );
};
