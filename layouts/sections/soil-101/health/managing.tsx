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

const popupMap: {
  [Key in keyof typeof headerSvgMap]: {
    title: string;
    text: string;
  };
} = {
  'no-tillage': {
    title: 'reduced disturbance',
    text: 'reducing tillage is key to improving soil structure and allowing soil life to thrive. while tillage increases oxygen and encourages nutrient cycling, it disrupts aggregates, destroys fungal networks, and can lead to compaction and surface crusts over time.',
  },
  'cover cropping': {
    title: 'increased cover',
    text: 'from carbon sequestration to water retention to the recycling of nutrients, cover crops provide a multitude of benefits to agriculture and the environment; but most importantly they keep the ground covered, providing year round habitat and reducing the risk of erosion.',
  },
  hedgerows: {
    title: 'increased habitat',
    text: 'prior to WWII, hedgerows lined every farm or field boundary, keeping soil, fertilizers, and agricultural chemicals from blowing away in the wind or washing away in rain. re-establishing these windbreaks or buffer strips creates habitat, promotes beneficial insects, and sequesters stable carbon.',
  },
  'nutrient management': {
    title: 'nutrient management',
    text: "effective nutrient management matches the amount, type/quality, placement, and timing of the nutrients to the needs of the crop. these 'tightly coupled' nutrient cycles ensure healthy, nutritious crops, while minimizing losses to groundwater and the atmosphere -- as well as overall costs!",
  },
  'organic amendments': {
    title: 'organic amendments',
    text: 'the separation of crops and livestock has caused a major rift in nutrient cycles; leading to the concentration of "waste" in some areas and the need for fertility in others. reconnecting these key components of natural systems helps build soil health, reduces input, and improves overall on-farm resilience.',
  },
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
  const [popup, setPopup] = useState<keyof typeof headerSvgMap | null>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const svgs: [string, typeof popup][] = [
      ['#management_no_tillage_svg__Layer_2', 'no-tillage'],
      ['#management_cover_svg__Layer_2', 'cover cropping'],
      ['#management_nutrient_svg__Layer_2', 'nutrient management'],
      ['#management_organic_svg__Layer_2', 'organic amendments'],
      ['#management_hedgerows_svg__Layer_2', 'hedgerows'],
    ];

    function showPopup(type: typeof popup) {
      return () => {
        if (popup) {
          setPopup(null);
        } else {
          setPopup(type);
        }
      };
    }

    const sectionContainer = sectionRef.current?.querySelector('#managing-soil-svg-container') as HTMLDivElement;
    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: showPopup(type),
        onKeydown: showPopup(type),
        ariaLabel: `show ${type} popup`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, [activeHeader, popup]);

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
                setPopup(null);
              }}
            >
              <a href={`#${header.replaceAll(' ', '-')}`}>
                <Text
                  type='p'
                  weight={header === activeHeader ? 'bold' : 'regular'}
                  size='sm'
                  className={`whitespace-nowrap ${header === activeHeader ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {header}
                </Text>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id='managing-soil-svg-container' className='relative'>
        {headerSvgMap[activeHeader]}
        {popup && (
          <div
            className='space-y-4 bg-white absolute p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-blue-500 w-full'
            tabIndex={0}
            onClick={() => {
              setPopup(null);
            }}
            onKeyDown={(e) => {
              if (e.code === 'Enter' || e.code === 'Space') {
                setPopup(null);
              }
            }}
          >
            <Text type='h3' size='md' weight='semibold' color='blue'>
              {popupMap[popup].title}
            </Text>
            <Text type='p' size='xs' weight='thin'>
              {popupMap[popup].text}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};
