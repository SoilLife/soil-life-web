import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon, Image } from 'design-system/atoms';

// assets
import StructureSvg from 'public/images/soil-101/physics/structure.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  granular: {
    title: 'granular',
    imageUrl: 'Soil_101/Soil_Physics/granular_structure_ViHk-cnG7.png',
    text: 'nearly spherical aggregates commonly found in surface soils (especially with high organic matter)',
  },
  wedge: {
    title: 'wedge',
    imageUrl: 'Soil_101/Soil_Physics/wedge_structure_okJkM6JmU.png',
    text: 'elongated structure caused by clays that shrink and swell,  churning/sliding over each other again and again',
  },
  platy: {
    title: 'platy',
    imageUrl: 'Soil_101/Soil_Physics/platy.png',
    text: 'flat, stacked, “plate-like” structure; often caused by compaction',
  },
  prismatic: {
    title: 'prismatic',
    imageUrl: 'Soil_101/Soil_Physics/Structure_Prismatic_2s1S3USk6.JPG',
    text: 'large, vertical columns with flat tops, found in subsoils with accumulation of clay',
  },
  massive: {
    title: 'massive',
    imageUrl: 'Soil_101/Soil_Physics/masssive_old.JPG',
    text: 'the absence of structure; just a giant mass of solid material.',
  },
  columnar: {
    title: 'columnar',
    imageUrl: 'Soil_101/Soil_Physics/columnar_FrnNpqkbq.png',
    text: 'large, vertical columns with round tops, found in subsoils with high sodium and clay built up',
  },
  blocky: {
    title: 'blocky',
    imageUrl: 'Soil_101/Soil_Physics/blocky.jpg',
    text: 'well-aggregated with rounded or sharp edges, common with clay',
  },
  'single grain': {
    title: 'single grain',
    imageUrl: 'Soil_101/Soil_Physics/singlegrained.jpg',
    text: 'absence of structure; each particle is separate and distinct from the other',
  },
};

export const StructureSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
    const granularSvg = sectionContainer.querySelector('#structure_svg__Layer_116') as SVGGElement | null;
    granularSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    granularSvg?.addEventListener('click', handleOpenModal('granular'));

    const wedgeSvg = sectionContainer.querySelector('#structure_svg__Layer_115') as SVGGElement | null;
    wedgeSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    wedgeSvg?.addEventListener('click', handleOpenModal('wedge'));

    const platySvg = sectionContainer.querySelector('#structure_svg__Layer_114') as SVGGElement | null;
    platySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    platySvg?.addEventListener('click', handleOpenModal('platy'));

    const prismaticSvg = sectionContainer.querySelector('#structure_svg__Layer_113') as SVGGElement | null;
    prismaticSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    prismaticSvg?.addEventListener('click', handleOpenModal('prismatic'));

    const massiveSvg = sectionContainer.querySelector('#structure_svg__Layer_112') as SVGGElement | null;
    massiveSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    massiveSvg?.addEventListener('click', handleOpenModal('massive'));

    const columnarSvg = sectionContainer.querySelector('#structure_svg__Layer_111') as SVGGElement | null;
    columnarSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    columnarSvg?.addEventListener('click', handleOpenModal('columnar'));

    const blockySvg = sectionContainer.querySelector('#structure_svg__Layer_110') as SVGGElement | null;
    blockySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    blockySvg?.addEventListener('click', handleOpenModal('blocky'));

    const singleGrainedSvg = sectionContainer.querySelector('#structure_svg__Layer_109') as SVGGElement | null;
    singleGrainedSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    singleGrainedSvg?.addEventListener('click', handleOpenModal('single grain'));

    return () => {
      granularSvg?.removeEventListener('click', handleOpenModal('granular'));
      wedgeSvg?.removeEventListener('click', handleOpenModal('wedge'));
      platySvg?.removeEventListener('click', handleOpenModal('platy'));
      prismaticSvg?.removeEventListener('click', handleOpenModal('prismatic'));
      massiveSvg?.removeEventListener('click', handleOpenModal('massive'));
      columnarSvg?.removeEventListener('click', handleOpenModal('columnar'));
      blockySvg?.removeEventListener('click', handleOpenModal('blocky'));
      singleGrainedSvg?.removeEventListener('click', handleOpenModal('single grain'));
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
        <Text type='h1' weight='bold' size='4xl' color='yellow' className={styles['heading']}>
          structure
        </Text>
        <Text type='p' weight='thin' size='md' className={styles['p-60']}>
          the way these structural units stack together determines the size, shape, and distribution of pore space
          within the soil profile. the density of the individual soil particles and the amount of empty space within and
          between them determines the bulk density, or mass per unit volume of the soil.
        </Text>
        <StructureSvg className='mx-auto max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)]' />
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
              width: isMobile ? '100%' : '80vw',
              left: isMobile ? 0 : '50%',
              top: isMobile ? '40px' : '50%',
              transform: isMobile ? undefined : 'translate(-50%, -50%)',
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
          <div className='space-y-10'>
            <Text type='h1' weight='thin' size='xl'>
              {modalTypeMap[modalType].title}
            </Text>

            <div className='flex flex-col items-center sm:space-x-6 sm:flex-row'>
              <Image
                url={modalTypeMap[modalType].imageUrl}
                className='flex-shrink-0 object-contain mb-10 max-h-[50vh] sm:mb-0 sm:w-3/5'
              />
              <Text
                type='p'
                weight='light'
                size='lg'
                className={`flex-shrink-0 text-center sm:w-2/5 ${styles['p-50']}`}
              >
                {modalTypeMap[modalType].text}
              </Text>
            </div>
          </div>
        </ReactModal>
      )}
    </>
  );
};
