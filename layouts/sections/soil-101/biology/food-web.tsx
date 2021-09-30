import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import FoodWebSvg from 'public/images/soil-101/biology/food_web.svg';
import InvertebrateSvg from 'public/images/soil-101/biology/invertebrate.svg';
import BacteriaSvg from 'public/images/soil-101/biology/bacteria.svg';
import EarthwormSvg from 'public/images/soil-101/biology/earthworm.svg';
import FungiSvg from 'public/images/soil-101/biology/fungi.svg';
import NematodeSvg from 'public/images/soil-101/biology/nematode.svg';
import DungPatSvg from 'public/images/soil-101/biology/dung_pat.svg';
import ProtozoaSvg from 'public/images/soil-101/biology/protozoa.svg';

const modalTypeMap = {
  invertebrate: <InvertebrateSvg />,
  bacteria: <BacteriaSvg />,
  earthworm: <EarthwormSvg />,
  fungi: <FungiSvg />,
  nematode: <NematodeSvg />,
  dungPat: <DungPatSvg />,
  protozoa: <ProtozoaSvg />,
};

export const FoodWebSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
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
    const invertebrateSvg = sectionContainer.querySelector('#food_web_svg__Layer_20') as SVGGElement | null;
    invertebrateSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    invertebrateSvg?.addEventListener('click', handleOpenModal('invertebrate'));

    const fungiSvg = sectionContainer.querySelector('#food_web_svg__Layer_21') as SVGGElement | null;
    fungiSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    fungiSvg?.addEventListener('click', handleOpenModal('fungi'));

    const dungPatSvg = sectionContainer.querySelector('#food_web_svg__Layer_22') as SVGGElement | null;
    dungPatSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    dungPatSvg?.addEventListener('click', handleOpenModal('dungPat'));

    const protozoaSvg = sectionContainer.querySelector('#food_web_svg__Layer_24') as SVGGElement | null;
    protozoaSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    protozoaSvg?.addEventListener('click', handleOpenModal('protozoa'));

    const earthwormSvg = sectionContainer.querySelector('#food_web_svg__Layer_18') as SVGGElement | null;
    earthwormSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    earthwormSvg?.addEventListener('click', handleOpenModal('earthworm'));

    const bacteriaSvg = sectionContainer.querySelector('#food_web_svg__Layer_25') as SVGGElement | null;
    bacteriaSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    bacteriaSvg?.addEventListener('click', handleOpenModal('bacteria'));

    return () => {
      invertebrateSvg?.removeEventListener('click', handleOpenModal('invertebrate'));
      fungiSvg?.removeEventListener('click', handleOpenModal('fungi'));
      dungPatSvg?.removeEventListener('click', handleOpenModal('dungPat'));
      protozoaSvg?.removeEventListener('click', handleOpenModal('protozoa'));
      bacteriaSvg?.removeEventListener('click', handleOpenModal('bacteria'));
      earthwormSvg?.removeEventListener('click', handleOpenModal('earthworm'));
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
      >
        <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
          soil food web
        </Text>
        <FoodWebSvg />
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
          <div>{modalTypeMap[modalType]}</div>
        </ReactModal>
      )}
    </>
  );
};
