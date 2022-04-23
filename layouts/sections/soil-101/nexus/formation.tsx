import { useRef, useEffect, useState } from 'react';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import SoilFormation from 'public/images/soil-101/nexus/soil_formation.svg';
import styles from '../soil-101.module.css';

const modalTypeMap = {
  time: {
    image: 'Soil_101/Soil_Nexus/time.jpg',
    text: 'Time amplifies all the other factors. "with water and time -- everything changes" - leonardo davinci',
  },
  'parent material': {
    image: 'Soil_101/Soil_Nexus/parent_material_nexus_7M0o24vSQAE.jpg',
    text: 'if you go back far enough, all parent material originated from volcanic, or igneous rocks. these rocks either cool slowly, in the belly of the earth, and develop coarse grains, or are ejected and cool rapidly into fine grains. the finer materials the more rapid the weathering.',
  },
  climate: {
    image: 'Soil_101/Soil_Nexus/air_climate.jpg',
    text: 'cycles of heating/cooling, wetting/drying, and freezing/thawing cause rocks to fracture and physically weather. as temperature and moisture increase, organisms are more active, reactions are faster, and more chemical weathering occurs over time.',
  },
  organisms: {
    image: 'Soil_101/Soil_Nexus/organisms.jpg',
    text: ' the living organisms that inhabit a given soil both drive and are driven by soil development. plants and microbes produce CO2 (which forms carbonic acid in water) and other organic acids that weather rocks into soil. organisms also physically break things down or move materials.',
  },
  topography: {
    image: 'Soil_101/Soil_Nexus/topography.jpg',
    text: 'the aspect or the direction that a slope faces determines how much sun it receives; whether it is warmer and drier or cooler and wetter. the slope (or the angle of the surface) influences erosion potential and water dynamics, leading to different rates of soil development or weathering.',
  },
  anthropogenic: {
    image: 'Soil_101/Soil_Nexus/anthropogenic.jpg',
    text: 'soils form on geologic time scales that extend far beyond a human lifetime. while it takes 1,000 years to build an inch of topsoil, the same amount can be washed away in a single season when poorly managed. ',
  },
};

export const FormationSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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

    const classes = ['cursor-pointer', 'hover:opacity-50', 'active:opacity-100'];

    const sectionContainer = sectionRef.current;
    const timeSvg = sectionContainer.querySelector('#soil_formation_svg__Layer_75') as SVGGElement | null;
    const parentMaterialSvg = sectionContainer.querySelector('#soil_formation_svg__Layer_76') as SVGGElement | null;
    const parentMaterialSvg2 = sectionContainer.querySelector('#soil_formation_svg__Layer_77') as SVGGElement | null;
    const climateSvg = sectionContainer.querySelector('#soil_formation_svg__Layer_78') as SVGGElement | null;
    const organismsSvg = sectionContainer.querySelector('#soil_formation_svg__Layer_79') as SVGGElement | null;
    const topographySvg = sectionContainer.querySelector('#soil_formation_svg__Layer_80') as SVGGElement | null;
    const anthropogenicSvg = sectionContainer.querySelector('#soil_formation_svg__Layer_81') as SVGGElement | null;

    timeSvg?.classList?.add(...classes);
    timeSvg?.addEventListener('click', handleOpenModal('time'));

    parentMaterialSvg?.classList?.add(...classes);
    parentMaterialSvg?.addEventListener('click', handleOpenModal('parent material'));
    parentMaterialSvg2?.classList?.add(...classes);
    parentMaterialSvg2?.addEventListener('click', handleOpenModal('parent material'));

    climateSvg?.classList?.add(...classes);
    climateSvg?.addEventListener('click', handleOpenModal('climate'));

    organismsSvg?.classList?.add(...classes);
    organismsSvg?.addEventListener('click', handleOpenModal('organisms'));

    topographySvg?.classList?.add(...classes);
    topographySvg?.addEventListener('click', handleOpenModal('topography'));

    anthropogenicSvg?.classList?.add(...classes);
    anthropogenicSvg?.addEventListener('click', handleOpenModal('anthropogenic'));

    return () => {
      timeSvg?.removeEventListener('click', handleOpenModal('time'));
      parentMaterialSvg?.removeEventListener('click', handleOpenModal('parent material'));
      parentMaterialSvg2?.removeEventListener('click', handleOpenModal('parent material'));
      climateSvg?.removeEventListener('click', handleOpenModal('climate'));
      organismsSvg?.removeEventListener('click', handleOpenModal('organisms'));
      topographySvg?.removeEventListener('click', handleOpenModal('topography'));
      anthropogenicSvg?.removeEventListener('click', handleOpenModal('anthropogenic'));
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
    <div
      ref={(el) => {
        sectionRef.current = el;
        props.assignRef(el);
      }}
      className={styles['section']}
    >
      <Text
        id='soil-formation'
        type='h1'
        weight='bold'
        size='4xl'
        color='pink'
        className={`${styles['anchor']} ${styles['heading']}`}
      >
        soil formation
      </Text>
      <SoilFormation className='max-h-[668px] mx-auto' />
      {modalType && (
        <GenericModal
          title={modalType}
          description={modalTypeMap[modalType].text}
          image={{ type: 'imagekit', url: modalTypeMap[modalType].image }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
