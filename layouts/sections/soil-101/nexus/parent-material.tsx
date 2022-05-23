import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { GenericModal } from 'design-system/components/soil-101-modals/generic-modal';

// assets
import ParentMaterial from 'public/images/soil-101/nexus/parent_material.svg';
import styles from '../soil-101.module.css';

const modalTypeMap = {
  colluvium: {
    title: 'colluvium',
    imageUrl: 'Soil_101/Soil_Nexus/colluvium.jpg',
    text: 'where there’s a slope, gravity will find a way to move everything from tiny silt particles to giant boulders downhill. these materials often move fast and are poorly sorted with rough edges.',
  },
  alluvium: {
    title: 'alluvium',
    imageUrl: 'Soil_101/Soil_Nexus/alluvium.jpg',
    text: 'as water moves over land, sand, silt, clay, and organic materials are washed away with it until there is not enough energy to carry the particles and they are deposited in a new location. materials that move with water are often well sorted with rounded edges.',
  },
  aeolian: {
    title: 'aeolian',
    imageUrl: 'Soil_101/Soil_Nexus/aeolian.jpg',
    text: 'as wind blows over the land soil materials are picked up and transported to a new location. wind-blown silts, or loess, cover 10% of the earth’s surface and makes for incredibly fertile soil! ',
  },
  'lacustrine/marine': {
    title: 'lacustrine/marine',
    imageUrl: 'Soil_101/Soil_Nexus/lacustrine.jpg',
    text: 'as water moves into lakes and seas, it brings sediments with it. as these materials build up over time, layers or horizons form. when sea level changes or the lake dries up, the parent material is revealed, often containing high levels of carbonate based shells and other signs of marine life.',
  },
  volcanic: {
    title: 'volcanic',
    imageUrl: 'Soil_101/Soil_Nexus/volcanic.jpg',
    text: 'what goes up must come down.  when volcanoes erupt, they eject materials that are eventually deposited on the landscape.  the further from the eruption, the smaller the materials — ash can travel up to 1000’s of miles away!',
  },
  glacial: {
    title: 'glacial',
    imageUrl: 'Soil_101/Soil_Nexus/glacial.png',
    text: 'as glaciers grow and retreat, they move sediment, rocks, and even giant boulders. churning beneath the ice, these materials carve out beautiful new landscapes, leaving new parent material behind in the process.',
  },
  organic: {
    title: 'organic',
    imageUrl: 'Soil_101/Soil_Nexus/organic_parent_material.jpg',
    text: 'high water-tables and other environmental factors that slow microbial decomposition lead to the build up of organic materials and the formation of organic soils. in these soils, the parent material is actually just the original organic material that was buried or submerged in water.',
  },
};

export const ParentMaterialSection = () => {
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
      ['#parent_material_svg__Layer_54', 'colluvium'],
      ['#parent_material_svg__Layer_50', 'organic'],
      ['#parent_material_svg__Layer_61', 'lacustrine/marine'],
      ['#parent_material_svg__Layer_59', 'lacustrine/marine'],
      ['#parent_material_svg__Layer_65', 'glacial'],
      ['#parent_material_svg__Layer_56', 'volcanic'],
      ['#parent_material_svg__Layer_64', 'aeolian'],
      ['#parent_material_svg__Layer_55', 'alluvium'],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='regular' size='2xl' color='pink' className={`w-full ${styles['heading']}`}>
          parent material
        </Text>

        <div className='flex flex-col space-x-4 sm:flex-row sm:items-center sm:pl-20'>
          <Text type='p' weight='light' size='xl' color='pink'>
            sources
          </Text>
          <Text type='p' weight='thin' size='xs' className={styles['p-60']}>
            - rocks either {' '}
            <Text type='span' weight='bold' size='xs'>
              weather
            </Text>{' '}
            in place or are {' '}
            <Text type='span' weight='bold' size='xs'>
              deposited 
            </Text>{' '}
            in one of the following ways:
          </Text>
        </div>
        <ParentMaterial className='mx-auto max-h-[700px]' />
      </div>
      {modalType && (
        <GenericModal
          title={modalTypeMap[modalType].title}
          description={modalTypeMap[modalType].text}
          image={{ type: 'imagekit', url: modalTypeMap[modalType].imageUrl }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
