import { useRef, useEffect, useState } from 'react';
import { useOrientation, useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import FoodWebSvg from 'public/images/soil-101/biology/food_web.svg';

const modalTypeMap = {
  insects: {
    title: {
      image: '',
      text: 'the shredders:',
      subtext: 'insects',
      floatingText: '   ',
      color: 'text-yellow-500',
    },
    image: '',
    text: {
      body: 'on the prowl for bacteria, fungi, and other little critters to eat, insects inadvertently ingest and dhred up plant matter. microbes hitching a ride in their guts break it down. like a bioreactor they convert organic residues in to plant-available nutrients.',
      footer: (
        <Text type='p' weight='light' size='sm'>
          a single square yard of soil contains{' '}
          <Text type='span' weight='bold' size='sm'>
            500 to 200,000
          </Text>{' '}
          individual arthopods
        </Text>
      ),
    },
  },
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
    const cationExchangeSvg = sectionContainer.querySelector('#food_web_svg__Layer_20') as SVGGElement | null;
    cationExchangeSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    cationExchangeSvg?.addEventListener('click', handleOpenModal('insects'));

    return () => {
      cationExchangeSvg?.removeEventListener('click', handleOpenModal('insects'));
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
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div>
            <Text type='h1' weight='thin' size='md' className={`text-center ${modalTypeMap[modalType].title.color}`}>
              {modalTypeMap[modalType].title.text}
            </Text>
            <Text
              type='h2'
              weight='bold'
              size='md'
              className={`text-center pb-4 mb-4 border-b border-solid border-gray-500 ${modalTypeMap[modalType].title.color}`}
            >
              {modalTypeMap[modalType].title.subtext}
            </Text>

            <Text type='p' weight='light' size='sm' className='text-center'>
              {modalTypeMap[modalType].text.body}
            </Text>

            <Text type='p' weight='light' size='sm' className='text-center'>
              {modalTypeMap[modalType].text.footer}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
};
