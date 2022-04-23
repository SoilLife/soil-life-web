import { useState, useEffect, useRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import NoTillageSvg from 'public/images/soil-101/health/management_no_tillage.svg';
import CoverCroppingSvg from 'public/images/soil-101/health/management_cover.svg';
import HedgerowsSvg from 'public/images/soil-101/health/management_hedgerows.svg';
import NutrientSvg from 'public/images/soil-101/health/management_nutrient.svg';
import OrganicSvg from 'public/images/soil-101/health/management_organic.svg';

import styles from '../soil-101.module.css';

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

const svgIdMap: {
  [Key in keyof typeof headerSvgMap]: {
    graphic: string;
    popup: string;
  };
} = {
  'no-tillage': {
    graphic: 'management_no_tillage_svg__Layer_2',
    popup: 'management_no_tillage_svg__Layer_78',
  },
  'cover cropping': {
    graphic: 'management_cover_svg__Layer_2',
    popup: 'management_cover_svg__Layer_81',
  },
  'nutrient management': {
    graphic: 'management_nutrient_svg__Layer_2',
    popup: 'management_cover_svg',
  },
  'organic amendments': {
    graphic: 'management_organic_svg__Layer_2',
    popup: 'management_organic_svg__Layer_88',
  },
  hedgerows: {
    graphic: 'management_hedgerows_svg__Layer_2',
    popup: 'management_hedgerows_svg__Layer_82',
  },
};

export const ManagingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [activeHeader, setActiveHeader] = useState<keyof typeof headerSvgMap>('no-tillage');
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const svgData = svgIdMap[activeHeader];

    const graphic = section?.querySelector(`#${svgData.graphic}`);
    const popup = section?.querySelector(`#${svgData.popup}`);
    graphic?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    popup?.classList?.add('hidden');

    return () => {};
  }, [activeHeader]);

  return (
    <div
      ref={(el) => {
        props.assignRef(el);
        sectionRef.current = el;
      }}
      className={styles['section']}
    >
      <Text
        id='management'
        type='h1'
        weight='bold'
        size='4xl'
        color='blue'
        className={`${styles['anchor']} ${styles['heading']}`}
      >
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
                weight={header === activeHeader ? 'bold' : 'regular'}
                size='sm'
                className={`whitespace-nowrap ${header === activeHeader ? 'cursor-default' : 'cursor-pointer'}`}
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
