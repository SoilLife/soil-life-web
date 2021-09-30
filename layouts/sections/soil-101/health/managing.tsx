import { useState } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import NoTillageSvg from 'public/images/soil-101/health/management_no_tillage.svg';
import CoverCroppingSvg from 'public/images/soil-101/health/management_cover.svg';
import HedgerowsSvg from 'public/images/soil-101/health/management_hedgerows.svg';
import NutrientSvg from 'public/images/soil-101/health/management_nutrient.svg';
import OrganicSvg from 'public/images/soil-101/health/management_organic.svg';

const headerSvgMap = {
  'no-tillage': <NoTillageSvg />,
  'cover cropping': <CoverCroppingSvg />,
  hedgerows: <HedgerowsSvg />,
  'nutrient management': <NutrientSvg />,
  'organic amendments': <OrganicSvg />,
};

const headers: (keyof typeof headerSvgMap)[] = [
  'no-tillage',
  'cover cropping',
  'hedgerows',
  'nutrient management',
  'organic amendments',
];

export const ManagingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [activeHeader, setActiveHeader] = useState<keyof typeof headerSvgMap>('no-tillage');

  return (
    <div ref={props.assignRef} className='space-y-4 sm:space-y-8'>
      <Text type='h1' weight='bold' size='4xl' className='text-blue-500 mb-8 sm:mb-20'>
        managing for soil health
      </Text>
      <div className='overflow-x-auto overflow-y-hidden'>
        <ul className='flex flex-nowrap items-center py-3 space-x-4 sm:justify-center sm:space-x-8'>
          {headers.map((header) => (
            <li
              key={header}
              onClick={() => {
                setActiveHeader(header);
              }}
            >
              <Text
                type='p'
                weight='light'
                size='sm'
                className={`whitespace-nowrap ${
                  header === activeHeader ? 'underline cursor-default' : 'cursor-pointer'
                }`}
              >
                {header}
              </Text>
            </li>
          ))}
        </ul>
      </div>
      {headerSvgMap[activeHeader]}
    </div>
  );
};
