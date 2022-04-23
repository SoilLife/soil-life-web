import { useRef, useEffect, useState } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import Biocycling from 'public/images/soil-101/biology/biocycling.svg';

import styles from '../soil-101.module.css';
import { TextProps } from 'design-system/atoms/text/text.interfaces';

const popupMap = {
  'plant respiration': {
    color: 'yellow',
    text: 'as opposed to animal or microbial respiration, which releases CO2, plants respire O2, which keeps our air safe for life on earth!',
    className: 'top-20 left-0',
  },
  'plant uptake': {
    color: 'pink',
    text: 'plants move nutrients from the soil into their leaves, roots, shoots, and fruits, where they are temporarily held against losses.',
    className: 'top-1/2 left-0',
  },
  photosynthesis: {
    color: 'teal',
    text: 'all carbon that enters soil starts as atmospheric CO2, fixed by plants via photosynthesis and either pumped underground by roots or held aboveground in residues, until they fall to the ground, as plant litter.',
    className: 'top-20 right-0',
  },
  respiration: {
    color: 'pink',
    text: 'as microbes feed on roots, residues, and organic matter and organisms prey on each other, nutrients are released for plant uptake.',
    className: 'top-1/3 right-0',
  },
  'litter decomposition': {
    color: 'blue',
    text: 'decomposition of organic materials (i.e. plant and animal residues) releases nutrients for microbial growth and plant uptake.',
    className: 'top-1/2 right-0',
  },
  bioperturbation: {
    color: 'gray',
    text: 'macrofauna like earthworms and gophers move large amounts of soil, combining organic and mineral matter and mixing it deep into the soil profile.',
    className: 'top-3/4 right-0',
  },
} as const;

export const BiocyclingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [popups, setPopups] = useState<null | keyof typeof popupMap>(null);
  const [, setIsImagePopupOpen] = useState(false);
  const svgContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!svgContainerRef.current) return;
    function handleOpenPopup(type: typeof popups) {
      return () => {
        setPopups(type);
      };
    }

    function handleImagePopup() {
      setIsImagePopupOpen((prevState) => !prevState);
    }

    const sectionContainer = svgContainerRef.current;
    const plantRespirationSvg = sectionContainer.querySelector('#biocycling_svg__Layer_63') as SVGGElement | null;
    plantRespirationSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantRespirationSvg?.addEventListener('click', handleOpenPopup('plant respiration'));

    const plantUptakeSvg = sectionContainer.querySelector('#biocycling_svg__Layer_61') as SVGGElement | null;
    plantUptakeSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantUptakeSvg?.addEventListener('click', handleOpenPopup('plant uptake'));

    const photosynthesisSvg = sectionContainer.querySelector('#biocycling_svg__Layer_65') as SVGGElement | null;
    photosynthesisSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    photosynthesisSvg?.addEventListener('click', handleOpenPopup('photosynthesis'));

    const respirationSvg = sectionContainer.querySelector('#biocycling_svg__Layer_64') as SVGGElement | null;
    respirationSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    respirationSvg?.addEventListener('click', handleOpenPopup('respiration'));

    const decompositionSvg = sectionContainer.querySelector('#biocycling_svg__Layer_62') as SVGGElement | null;
    decompositionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    decompositionSvg?.addEventListener('click', handleOpenPopup('litter decomposition'));

    const bioperturbationSvg = sectionContainer.querySelector('#biocycling_svg__Layer_54') as SVGGElement | null;
    bioperturbationSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    bioperturbationSvg?.addEventListener('click', handleOpenPopup('bioperturbation'));

    const imagePopupSvg = sectionContainer.querySelector('#biocycling_svg__Layer_59') as SVGGElement | null;
    imagePopupSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    imagePopupSvg?.addEventListener('click', handleImagePopup);

    function handleOutsideClick(e: MouseEvent) {
      if (!svgContainerRef.current?.contains(e.target as HTMLElement)) {
        setPopups(null);
      }
    }
    document.addEventListener('click', handleOutsideClick);

    return () => {
      plantRespirationSvg?.removeEventListener('click', handleOpenPopup('plant respiration'));
      plantUptakeSvg?.removeEventListener('click', handleOpenPopup('plant uptake'));
      photosynthesisSvg?.removeEventListener('click', handleOpenPopup('photosynthesis'));
      respirationSvg?.removeEventListener('click', handleOpenPopup('respiration'));
      decompositionSvg?.removeEventListener('click', handleOpenPopup('litter decomposition'));
      bioperturbationSvg?.removeEventListener('click', handleOpenPopup('bioperturbation'));
      imagePopupSvg?.removeEventListener('click', handleImagePopup);
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
          <Biocycling />
          {popups && <Popup {...popupMap[popups]} title={popups} />}
        </div>
        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-50']}`}>
          plant biomass is eaten and excreted by animals or it decomposes when the plant dies. carbon is also pumped
          directly underground by roots. mineral weathering and decomposition then make nutrients available for future
          growth and the cycle continues.
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
  text: string;
  className: string;
}) {
  return (
    <div className={`absolute p-4 space-y-2 bg-white shadow max-w-[475px] ${className}`}>
      <Text type='h3' weight='light' size='sm' color={color} style={{ lineHeight: '32px' }}>
        {title}:
      </Text>
      <Text type='p' weight='light' size='sm' style={{ lineHeight: '32px' }}>
        {text}
      </Text>
    </div>
  );
}
