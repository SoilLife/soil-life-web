import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Image, Icon } from 'design-system/atoms';

// assets
import AirWaterMineralOrganic from 'public/images/soil-101/nexus/air_water_mineral_organic.svg';
import NexusIntro from 'public/images/soil-101/nexus/nexus_intro.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  air: {
    title: 'air',
    imageUrl: 'Soil_101/Soil_Nexus/air_climate.jpg',
    text: 'the invisible, gaseous substance that blankets the earth, allowing us to breathe and keeping us just the right temperature. mainly a mix of oxygen and nitrogen with small amounts of CO2 , argon, other trace gases, and water vapor.',
  },
  mineral: {
    title: 'mineral',
    imageUrl: 'Soil_101/Soil_Nexus/mineral.png',
    text: 'minerals are the non-living, chemical material (in-organic) that makes up the earth’s crust. they consist of diverse combinations of natural elements in consistent structures and form the rocks that eventually break down to form soil!',
  },
  water: {
    title: 'water',
    imageUrl: 'Soil_101/Soil_Nexus/Water.jpg',
    text: 'the transparent combination of hydrogen and oxygen, vital to life, as we know it. the universal solvent, capable of dissolving more substances than any other liquid. produced during formation of organic macromolecules, consumed during the breakdown.',
  },
  organic: {
    title: 'organic',
    imageUrl: 'Soil_101/Soil_Nexus/Organic.jpeg',
    text: 'organic means related to or containing the carbon compounds on which all life on earth is based. a combination of carbon from the air, hydrogen and oxygen from water and mineral matter forms all living matter. ',
  },
};

export const IntroSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModal(type: typeof modalType) {
      return (_e: MouseEvent) => {
        const body = document.querySelector('body');
        if (body) {
          body.style.overflow = 'hidden';
        }
        setModalType(type);
      };
    }

    const sectionContainer = sectionRef.current;
    const airSvg = sectionContainer.querySelector('#air_water_mineral_organic_svg__Layer_27') as SVGGElement | null;
    const waterSvg = sectionContainer.querySelector('#air_water_mineral_organic_svg__Layer_28') as SVGGElement | null;
    const mineralSvg = sectionContainer.querySelector('#air_water_mineral_organic_svg__Layer_29') as SVGGElement | null;
    const organicSvg = sectionContainer.querySelector('#air_water_mineral_organic_svg__Layer_30') as SVGGElement | null;

    airSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    airSvg?.addEventListener('click', handleOpenModal('air'));
    waterSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    waterSvg?.addEventListener('click', handleOpenModal('water'));
    mineralSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    mineralSvg?.addEventListener('click', handleOpenModal('mineral'));
    organicSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    organicSvg?.addEventListener('click', handleOpenModal('organic'));

    return () => {
      airSvg?.removeEventListener('click', handleOpenModal('air'));
      waterSvg?.removeEventListener('click', handleOpenModal('water'));
      mineralSvg?.removeEventListener('click', handleOpenModal('mineral'));
      organicSvg?.removeEventListener('click', handleOpenModal('organic'));
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div
        ref={(el) => {
          props.assignRef(el);
          sectionRef.current = el;
        }}
        className={styles['section']}
      >
        <Text type='h1' weight='bold' size='4xl' color='pink' className={styles['heading']}>
          soil: the nexus
        </Text>
        <div>
          <Text type='p' weight='light' size='md' className={styles['p-60']}>
            the{' '}
            <Text type='span' weight='light' size='md' color='pink'>
              "solid ground"
            </Text>{' '}
            we walk on is only about{' '}
            <Text type='span' weight='light' size='md' color='pink'>
              50% solid
            </Text>{' '}
            material made of mostly mineral and
          </Text>
          <Text type='p' weight='light' size='md' className={styles['p-60']}>
            1-10% organic matter. the remaining{' '}
            <Text type='span' weight='light' size='md' color='pink'>
              50% is empty, pore space
            </Text>{' '}
            — filled with either air or water.
          </Text>
        </div>
        <div className='flex flex-col gap-6 sm:flex-row'>
          <NexusIntro />
          <AirWaterMineralOrganic />
        </div>
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              height: isMobile ? '100%' : isLandscape ? '80vh' : '50vh',
              width: isMobile ? '100%' : isLandscape ? '50vw' : '80vw',
              left: isMobile ? 0 : '50%',
              top: isMobile ? '40px' : '50%',
              transform: isMobile ? undefined : 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
            overlay: {
              zIndex: 2,
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div className='space-y-4 text-center'>
            <Text type='h1' weight='bold' size='2xl' color='pink'>
              {modalTypeMap[modalType].title}
            </Text>

            <Image url={modalTypeMap[modalType].imageUrl} className='object-cover mx-auto h-auto' />
            <Text type='p' weight='light' size='2xs' style={{ lineHeight: '38px' }}>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
};
