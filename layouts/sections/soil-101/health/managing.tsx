import { useState, useEffect, useRef } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

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

export const ManagingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [activeHeader, setActiveHeader] = useState<keyof typeof headerSvgMap>('no-tillage');
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const svgs = [
      ['#management_no_tillage_svg__Layer_2', '#management_no_tillage_svg__Layer_78'],
      ['#management_cover_svg__Layer_2', '#management_cover_svg__Layer_81'],
      ['#management_nutrient_svg__Layer_2', '#management_cover_svg'],
      ['#management_organic_svg__Layer_2', '#management_organic_svg__Layer_88'],
      ['#management_hedgerows_svg__Layer_2', '#management_hedgerows_svg__Layer_82'],
    ] as const;

    function showPopup(svg: SVGGElement | null) {
      return () => {
        if (!svg) return;
        svg.classList.toggle('hidden');
      };
    }

    const sectionContainer = sectionRef.current;
    const interactiveSvgs = svgs.map(([id, popupId]) => {
      const popupSvg = sectionContainer.querySelector(popupId) as SVGGElement | null;
      popupSvg?.classList?.add('hidden');
      return makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: showPopup(popupSvg),
        onKeydown: showPopup(popupSvg),
        ariaLabel: 'show popup',
        classList: ['focus:opacity-100', 'hover:opacity-100'],
      });
    });

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
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
