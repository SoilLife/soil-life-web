import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';

// assets
import Biocycling from 'public/images/soil-101/biology/biocycling.svg';

import styles from '../soil-101.module.css';
import { TextProps } from 'design-system/atoms/text/text.interfaces';

const popupMap = {
  'plant respiration': {
    color: 'yellow',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        'as opposed to animal or microbial respiration, which releases CO<sub>2</sub>, plants respire O<sub>2</sub>,
        which keeps our air safe for life on earth!
      </Text>
    ),
    className: 'top-20 left-0',
  },
  'plant uptake': {
    color: 'pink',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        plants move nutrients from the soil into their leaves, roots, shoots, and fruits, where they are temporarily
        held against losses.
      </Text>
    ),
    className: 'top-1/2 left-0',
  },
  photosynthesis: {
    color: 'teal',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        all carbon that enters soil starts as atmospheric CO<sub>2</sub>, fixed by plants via photosynthesis and either
        pumped underground by roots or held aboveground in residues, until they fall to the ground, as plant litter.
      </Text>
    ),
    className: 'top-20 right-0',
  },
  respiration: {
    color: 'pink',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        as organisms feed on roots, residues, organic matter and each other (breathing out CO<sub>2</sub>), nutrients
        are released for plant uptake.
      </Text>
    ),
    className: 'top-1/3 right-0',
  },
  'litter decomposition': {
    color: 'blue',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        decomposition of organic materials (i.e. plant and animal residues) releases nutrients for microbial growth and
        plant uptake.
      </Text>
    ),
    className: 'top-1/2 right-0',
  },
  bioperturbation: {
    color: 'gray',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        macrofauna like earthworms and gophers move large amounts of soil, combining organic and mineral matter and
        mixing it deep into the soil profile.
      </Text>
    ),
    className: 'top-3/4 right-0',
  },
  'nitrogen fixation': {
    color: 'pink',
    text: (
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        some microbes form beneficial relationships with certain plants and are able to break apart nitrogen (N
        <sub>2</sub>) in the atmosphere and 'fix' it into the soil.
      </Text>
    ),
    className: 'top-0 left-0',
  },
} as const;

export const BiocyclingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [popup, setPopup] = useState<null | keyof typeof popupMap>(null);
  const svgContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!svgContainerRef.current) return;
    function showPopup(type: typeof popup) {
      return () => {
        setPopup(type);
      };
    }

    const svgs: [string, typeof popup][] = [
      ['#biocycling_svg__Layer_63', 'plant respiration'],
      ['#biocycling_svg__Layer_61', 'plant uptake'],
      ['#biocycling_svg__Layer_65', 'photosynthesis'],
      ['#biocycling_svg__Layer_64', 'respiration'],
      ['#biocycling_svg__Layer_62', 'litter decomposition'],
      ['#biocycling_svg__Layer_54', 'bioperturbation'],
      ['#biocycling_svg__Layer_60', 'nitrogen fixation'],
    ];

    const sectionContainer = svgContainerRef.current;

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: showPopup(type),
        onKeydown: showPopup(type),
        ariaLabel: `show ${type} popup`,
      })
    );

    function handleOutsideClick(e: MouseEvent) {
      if (!svgContainerRef.current?.contains(e.target as HTMLElement)) {
        setPopup(null);
      }
    }
    document.addEventListener('click', handleOutsideClick);

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div ref={props.assignRef} className={styles['section']}>
        <Text
          id='biocycling'
          type='h1'
          weight='bold'
          size='4xl'
          color='teal'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          biocycling
        </Text>
        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-50']}`}>
          plants combine carbon from the atmosphere with water and nutrients from soil to form the building blocks of
          life -- carbohydrates, proteins, and lipids that form plant leaves, stems, roots, and fruits.
        </Text>

        <div className='relative' ref={svgContainerRef}>
          <Biocycling className='mx-auto lg:max-w-[50vw]' />
          {popup && <Popup {...popupMap[popup]} title={popup} />}
        </div>
        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-50']}`}>
          these organic materials then move up and down the food chain — plant biomass is eaten and excreted by microbes, insects and animals, 
          which are eaten and excreted by other microbes, insects and animals.
          as things die or decompose, nutrients are made available for new growth and the cycle continues.
        </Text>
      </div>
    </>
  );
};

function Popup({
  title,
  color,
  text,
  className,
}: {
  title: string;
  color: Required<TextProps>['color'];
  text: JSX.Element;
  className: string;
}) {
  return (
    <div className={`absolute p-4 space-y-2 bg-white shadow max-w-[475px] ${className}`}>
      <Text type='h3' weight='light' size='sm' color={color} style={{ lineHeight: '32px' }}>
        {title}:
      </Text>

      {text}
    </div>
  );
}
