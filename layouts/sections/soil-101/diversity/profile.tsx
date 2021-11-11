import { useState, useRef, useEffect } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import ProfileSvg from 'public/images/soil-101/diversity/soil_profile.svg';

import styles from '../soil-101.module.css';

const popupMap = {
  organic: {
    title: 'O horizon',
    text: 'thin, dark layer of decomposing and well decomposed organic materials. This horizon is present in undisturbed habitats (wetlands, forest, prairies).',
  },
  topsoil: {
    title: 'A horizon',
    text: 'darkened by organic matter, rich in nutrients. where most of the biological activity occurs, where seeds germinate and roots grow.',
  },
  'eluviated zone': {
    title: 'E horizon',
    text: 'zone of loss, where nutrients, organic matter, and/or clays have been leached out and into deeper horizons. usually light in color.',
  },
  'accumulation zone': {
    title: 'B horizon',
    text: 'zone of accumulation; high in clay and minerals that have leached from horizons above. generally less organic matter than the a horizon',
  },
  'parent material': {
    title: 'C horizon',
    text: 'consists of large rocks or broken bedrock, minimally or un-affected by soil forming processes. little to no organic matter.',
  },
  bedrock: {
    title: 'R layer',
    text: 'solid mass of rock known as bedrock, or parent material.',
  },
};

export const ProfileSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const [popups, setPopups] = useState({
    organic: false,
    topsoil: false,
    'eluviated zone': false,
    'accumulation zone': false,
    'parent material': false,
    bedrock: false,
  });
  const svgContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!svgContainerRef.current) return;
    function handleOpenPopup(type: keyof typeof popups) {
      return () => {
        setPopups((prevState) => ({
          ...popups,
          [type]: !prevState[type],
        }));
      };
    }

    const sectionContainer = svgContainerRef.current;
    const organicLayerSvg = sectionContainer.querySelector('#soil_profile_svg__Layer_13') as SVGGElement | null;
    organicLayerSvg?.classList?.add('cursor-pointer', 'hover:opacity-80', 'active:opacity-100');
    organicLayerSvg?.addEventListener('click', handleOpenPopup('organic'));

    const topSoilSvg = sectionContainer.querySelector('#soil_profile_svg__Layer_12') as SVGGElement | null;
    topSoilSvg?.classList?.add('cursor-pointer', 'hover:opacity-80', 'active:opacity-100');
    topSoilSvg?.addEventListener('click', handleOpenPopup('topsoil'));

    const eluviatedZoneSvg = sectionContainer.querySelector('#soil_profile_svg__Layer_31') as SVGGElement | null;
    eluviatedZoneSvg?.classList?.add('cursor-pointer', 'hover:opacity-80', 'active:opacity-100');
    eluviatedZoneSvg?.addEventListener('click', handleOpenPopup('eluviated zone'));

    const accumulationZoneSvg = sectionContainer.querySelector('#soil_profile_svg__Layer_29') as SVGGElement | null;
    accumulationZoneSvg?.classList?.add('cursor-pointer', 'hover:opacity-80', 'active:opacity-100');
    accumulationZoneSvg?.addEventListener('click', handleOpenPopup('accumulation zone'));

    const parentMaterialSvg = sectionContainer.querySelector('#soil_profile_svg__Layer_28') as SVGGElement | null;
    parentMaterialSvg?.classList?.add('cursor-pointer', 'hover:opacity-80', 'active:opacity-100');
    parentMaterialSvg?.addEventListener('click', handleOpenPopup('parent material'));

    const bedrockSvg = sectionContainer.querySelector('#soil_profile_svg__Layer_30') as SVGGElement | null;
    bedrockSvg?.classList?.add('cursor-pointer', 'hover:opacity-80', 'active:opacity-100');
    bedrockSvg?.addEventListener('click', handleOpenPopup('bedrock'));

    return () => {
      organicLayerSvg?.removeEventListener('click', handleOpenPopup('organic'));
      topSoilSvg?.removeEventListener('click', handleOpenPopup('topsoil'));
      eluviatedZoneSvg?.removeEventListener('click', handleOpenPopup('eluviated zone'));
      accumulationZoneSvg?.removeEventListener('click', handleOpenPopup('accumulation zone'));
      parentMaterialSvg?.removeEventListener('click', handleOpenPopup('parent material'));
      bedrockSvg?.removeEventListener('click', handleOpenPopup('bedrock'));
    };
  }, []);

  return (
    <div ref={props.assignRef} className={styles['section']}>
      <Text type='h1' weight='bold' size='4xl' className={styles['heading']}>
        soil profile
      </Text>
      <div className='flex flex-col gap-4 h-full w-full items-center sm:flex-row sm:gap-8'>
        <Text type='p' weight='light' size='md' className={`text-center sm:w-1/2 ${styles['p-70']}`}>
          the distinct layers that develop are called{' '}
          <Text type='span' weight='bold' size='md'>
            horizons
          </Text>
          , and they provide both a{' '}
          <Text type='span' weight='bold' size='md'>
            history of the landscape
          </Text>{' '}
          and an indication of how a{' '}
          <Text type='span' weight='bold' size='md'>
            soil might function
          </Text>{' '}
          in the present.{' '}
          <Text type='span' weight='semibold' size='md'>
            soils are classified into 12 groups
          </Text>{' '}
          based on these similar layers, features, and behaviors.
        </Text>
        <div ref={svgContainerRef} className='relative w-full h-full sm:w-1/2'>
          <ProfileSvg className='h-full w-full' />
          {popups['organic'] && <Popup {...popupMap['organic']} className='sm:left-[70%] top-0' />}
          {popups['topsoil'] && <Popup {...popupMap['topsoil']} className='sm:left-[70%] top-[5%]' />}
          {popups['eluviated zone'] && <Popup {...popupMap['eluviated zone']} className='sm:left-[70%] top-[20%]' />}
          {popups['accumulation zone'] && (
            <Popup {...popupMap['accumulation zone']} className='sm:left-[70%] top-[30%]' />
          )}
          {popups['parent material'] && <Popup {...popupMap['parent material']} className='sm:left-[70%] top-[60%]' />}
          {popups['bedrock'] && <Popup {...popupMap['bedrock']} className='sm:left-[70%] bottom-0' />}
        </div>
      </div>
    </div>
  );
};

function Popup({ title, text, className }: { title: string; text: string; className: string }) {
  return (
    <div className={`absolute bg-white shadow-lg p-4 max-w-[256px] w-full ${className}`}>
      <Text type='h3' weight='semibold' size='sm' className='text-pink-500'>
        {title}
      </Text>
      <Text type='p' weight='light' size='sm'>
        {text}
      </Text>
    </div>
  );
}
