import { useRef, useEffect, useState, forwardRef } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Image, Icon } from 'design-system/atoms';

// assets
import ParentMaterial from 'public/images/soil-101/nexus/parent_material.svg';

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

export const ParentMaterialSection = forwardRef<HTMLDivElement, {}>(function (_, _ref) {
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

    const colluviumSvg = sectionContainer.querySelector('#parent_material_svg__Layer_54') as SVGGElement | null;
    colluviumSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    colluviumSvg?.addEventListener('click', handleOpenModal('colluvium'));

    const organicSvg = sectionContainer.querySelector('#parent_material_svg__Layer_50') as SVGGElement | null;
    organicSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    organicSvg?.addEventListener('click', handleOpenModal('organic'));

    const lacustringSvg = sectionContainer.querySelector('#parent_material_svg__Layer_61') as SVGGElement | null;
    lacustringSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    lacustringSvg?.addEventListener('click', handleOpenModal('lacustrine/marine'));

    const marineSvg = sectionContainer.querySelector('#parent_material_svg__Layer_59') as SVGGElement | null;
    marineSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    marineSvg?.addEventListener('click', handleOpenModal('lacustrine/marine'));

    const glacialSvg = sectionContainer.querySelector('#parent_material_svg__Layer_65') as SVGGElement | null;
    glacialSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    glacialSvg?.addEventListener('click', handleOpenModal('glacial'));

    const volcanicSvg = sectionContainer.querySelector('#parent_material_svg__Layer_56') as SVGGElement | null;
    volcanicSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    volcanicSvg?.addEventListener('click', handleOpenModal('volcanic'));

    const aeolianSvg = sectionContainer.querySelector('#parent_material_svg__Layer_64') as SVGGElement | null;
    aeolianSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    aeolianSvg?.addEventListener('click', handleOpenModal('aeolian'));

    const alluviumSvg = sectionContainer.querySelector('#parent_material_svg__Layer_55') as SVGGElement | null;
    alluviumSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    alluviumSvg?.addEventListener('click', handleOpenModal('alluvium'));

    return () => {
      colluviumSvg?.removeEventListener('click', handleOpenModal('colluvium'));
      organicSvg?.removeEventListener('click', handleOpenModal('organic'));
      lacustringSvg?.removeEventListener('click', handleOpenModal('lacustrine/marine'));
      marineSvg?.removeEventListener('click', handleOpenModal('lacustrine/marine'));
      glacialSvg?.removeEventListener('click', handleOpenModal('glacial'));
      volcanicSvg?.removeEventListener('click', handleOpenModal('volcanic'));
      aeolianSvg?.removeEventListener('click', handleOpenModal('aeolian'));
      alluviumSvg?.removeEventListener('click', handleOpenModal('alluvium'));
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
      <div ref={sectionRef}>
        <div className='space-y-8'>
          <div className='flex items-center'>
            <Text type='h1' weight='bold' size='xl' className='text-pink-500 w-full'>
              parent material
            </Text>
            <div className='w-full'>
              <img src='/images/soil-101/nexus/mountains.png' />
            </div>
          </div>
          <div className='flex items-end space-x-4 sm:pl-20'>
            <Text type='p' weight='light' size='lg' className='text-pink-500'>
              source
            </Text>
            <Text type='p' weight='thin' size='xs'>
              - rocks weather in place or are deposited in one of the following ways
            </Text>
          </div>
          <ParentMaterial className='mx-auto max-h-[700px]' />
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
          <div className='space-y-4'>
            <Text type='h1' weight='bold' size='2xl' className='text-pink-500 text-center'>
              {modalTypeMap[modalType].title}
            </Text>

            <Image url={modalTypeMap[modalType].imageUrl} className='object-cover mx-auto h-auto' />
            <Text type='p' weight='light' size='2xs' className='text-center'>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
});
