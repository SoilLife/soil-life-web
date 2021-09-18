import { forwardRef, useState } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import ParentMaterialSvg from 'public/images/soil-101/nexus/clorpt_pm.svg';
import ClimateSvg from 'public/images/soil-101/nexus/clorpt_climate.svg';
import TopographySvg from 'public/images/soil-101/nexus/clorpt_topography.svg';
import OrganismsSvg from 'public/images/soil-101/nexus/clorpt_organisms.svg';
import TimeSvg from 'public/images/soil-101/nexus/clorpt_time.svg';
import HumansSvg from 'public/images/soil-101/nexus/clorpt_anthro.svg';

const factors = ['parent material', 'climate', 'topography', 'organisms', 'time', 'humans'];

const factorSvgMap: { [key: string]: React.ReactElement } = {
  'parent material': <ParentMaterialSvg />,
  climate: <ClimateSvg />,
  topography: <TopographySvg />,
  organisms: <OrganismsSvg />,
  time: <TimeSvg />,
  humans: (
    <div className='space-y-4'>
      <Text type='h2' weight='regular' size='xl' className='text-pink-500'>
        anthropogenic
      </Text>
      <Text type='h2' weight='regular' size='xs'>
        soils form geologic time scales that extend far beyond human lifetime. however, while it takes 1,000 years to
        build an inch of topsoil, the same amount can be washed away in just a few decades when poorly managed
      </Text>
      <HumansSvg />
    </div>
  ),
};

export const FormingFactorsSection = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  const [activeFactor, setActiveFactor] = useState('parent material');

  function handleFactorClick(factor: string) {
    return () => {
      if (factor !== activeFactor) {
        setActiveFactor(factor);
      }
    };
  }
  return (
    <div ref={ref}>
      <div className='space-y-4 mb-8'>
        <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
          soil forming factors
        </Text>
        <Text type='p' weight='light' size='md'>
          pedogenesis is the formation of soil. over time. as energy flows through the system, in the form of heat,
          precipitation, and organisms, soils weather, developing horizons and other distinct morphological features.
        </Text>
      </div>
      <div className='border border-solid border-gray-500'>
        <ul className='flex flex-wrap sm:flex-nowrap'>
          {factors.map((factor) => (
            <li key={factor} className='sm:flex-grow sm:w-full'>
              <button
                className={`${factor === activeFactor ? 'bg-gray-700' : 'bg-gray-500'} w-full text-white p-2`}
                onClick={handleFactorClick(factor)}
              >
                {factor}
              </button>
            </li>
          ))}
        </ul>
        <div className='grid place-items-center min-h-[500px] p-4'>{factorSvgMap[activeFactor]}</div>
      </div>
    </div>
  );
});
