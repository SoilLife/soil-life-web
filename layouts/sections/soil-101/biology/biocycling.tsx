import { useRef, useEffect, useState } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import Biocycling from 'public/images/soil-101/biology/biocycling.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'plant respiration': {
    title: 'plant respiration',
    color: 'text-yellow-500',
    text: 'as opposed to animal or microbial respiration, which releases CO2, plants respire O2, which keeps our air safe for life on earth!',
  },
  'plant uptake': {
    title: 'plant uptake',
    color: 'text-pink-500',
    text: 'plants move nutrients from the soil into their leaves, roots, shoots, and fruits, where they are temporarily held against losses',
  },
  photosynthesis: {
    title: 'photosynthesis',
    color: 'text-teal-500',
    text: 'all carbon that enters soil starts as atmospheric CO2, fixed by plants via photosynthesis and either pumped underground by roots or held aboveground in residues, until they fall to the ground, as plant litter.',
  },
  respiration: {
    title: 'respiration',
    color: 'text-pink-500',
    text: 'as microbes feed on roots, residues, and organic matter and organisms prey on each other, nutrients are released for plant uptake.',
  },
  decomposition: {
    title: 'litter decomposition',
    color: 'text-blue-500',
    text: 'decomposition of organic materials (i.e. plant and animal residues) releases nutrients for microbial growth and plant uptake',
  },
  bioperturbation: {
    title: 'bioperturbation',
    color: 'text-gray-500',
    text: 'macrofauna like earthworms and gophers move large amounts of soil, combining organic and mineral matter and mixing it deep into the soil profile',
  },
};

export const BiocyclingSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [popups, setPopups] = useState({
    'plant respiration': false,
    'plant uptake': false,
    photosynthesis: false,
    respiration: false,
    decomposition: false,
    bioperturbation: false,
  });
  const [, setIsImagePopupOpen] = useState(false);
  const svgContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!svgContainerRef.current) return;
    function handleOpenPopup(type: keyof typeof popups) {
      return () => {
        setPopups((prevState) => ({
          ...prevState,
          [type]: !prevState[type],
        }));
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
    decompositionSvg?.addEventListener('click', handleOpenPopup('decomposition'));

    const bioperturbationSvg = sectionContainer.querySelector('#biocycling_svg__Layer_54') as SVGGElement | null;
    bioperturbationSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    bioperturbationSvg?.addEventListener('click', handleOpenPopup('bioperturbation'));

    const imagePopupSvg = sectionContainer.querySelector('#biocycling_svg__Layer_59') as SVGGElement | null;
    imagePopupSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    imagePopupSvg?.addEventListener('click', handleImagePopup);

    return () => {
      plantRespirationSvg?.removeEventListener('click', handleOpenPopup('plant respiration'));
      plantUptakeSvg?.removeEventListener('click', handleOpenPopup('plant uptake'));
      photosynthesisSvg?.removeEventListener('click', handleOpenPopup('photosynthesis'));
      respirationSvg?.removeEventListener('click', handleOpenPopup('respiration'));
      decompositionSvg?.removeEventListener('click', handleOpenPopup('decomposition'));
      bioperturbationSvg?.removeEventListener('click', handleOpenPopup('bioperturbation'));
      imagePopupSvg?.removeEventListener('click', handleImagePopup);
    };
  }, []);

  return (
    <>
      <div ref={props.assignRef} className={styles['section']}>
        <Text type='h1' weight='bold' size='4xl' color='teal' className={styles['heading']}>
          biocycling
        </Text>
        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-50']}`}>
          plants combine carbon from the atmosphere with water and nutrients from soil to form the building blocks of
          life -- carbohydrates, proteins, and lipids that form plant leaves, stems, roots, and fruits.
        </Text>

        <div className='relative' ref={svgContainerRef}>
          <Biocycling />
          {popups['plant respiration'] && <Popup {...modalTypeMap['plant respiration']} className='top-20 left-0' />}
          {popups['plant uptake'] && <Popup {...modalTypeMap['plant uptake']} className='top-1/2 left-0' />}
          {popups['photosynthesis'] && <Popup {...modalTypeMap['photosynthesis']} className='top-20 right-0' />}
          {popups['respiration'] && <Popup {...modalTypeMap['respiration']} className='top-1/3 right-0' />}
          {popups['decomposition'] && <Popup {...modalTypeMap['decomposition']} className='top-1/2 right-0' />}
          {popups['bioperturbation'] && <Popup {...modalTypeMap['bioperturbation']} className='top-3/4 right-0' />}
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

function Popup({ title, color, text, className }: { title: string; color: string; text: string; className: string }) {
  return (
    <div className={`absolute p-4 bg-white shadow max-w-[475px] ${className}`}>
      <Text type='h3' weight='bold' size='2xs' className={color}>
        {title}:
      </Text>
      <Text type='h3' weight='bold' size='2xs'>
        {text}:
      </Text>
    </div>
  );
}
