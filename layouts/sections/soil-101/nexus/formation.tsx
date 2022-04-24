import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import SoilFormation from 'public/images/soil-101/nexus/soil_formations.svg';
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
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    const svgs: [string, typeof modalType][] = [
      ['#soil_formations_svg__d', 'time'],
      ['#soil_formations_svg__i', 'parent material'],
      ['#soil_formations_svg__g', 'climate'],
      ['#soil_formations_svg__h', 'organisms'],
      ['#soil_formations_svg__f', 'topography'],
      ['#soil_formations_svg__e', 'anthropogenic'],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveSvgs = svgs.map(([id, type]) => {
      return makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      });
    });

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
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
