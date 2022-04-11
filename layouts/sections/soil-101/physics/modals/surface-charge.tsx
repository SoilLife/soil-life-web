import { useOrientation, useMedia } from 'react-use';
import ReactModal from 'react-modal';

// components
import { Text, Icon } from 'design-system/atoms';

// assets
import CationExchangeSvg from 'public/images/soil-101/physics/cation_exchange_capacity.svg';
import AnionExchangeSvg from 'public/images/soil-101/physics/anion_exchange_capacity.svg';
import MetalOxideExchangeSvg from 'public/images/soil-101/physics/metal_oxides_exchange_capacity.svg';

export const surfaceChargeModalMap = {
  'cation exchange': {
    title: 'cation exchange capacity',
    image: <CationExchangeSvg className='h-full w-full' />,
    text: 'cations are positively charged ions. cation exchange capacity is the number of negatively charged sites (on clays or organic matter) that can hold onto these ions.',
  },
  'anion exchange': {
    title: 'anion exchange capacity',
    image: <AnionExchangeSvg className='h-full w-full' />,
    text: 'anions are negatively charged ions. anion exchange capacity is the number of positively charged sites (on metal oxides or organic matter) that can hold onto these ions.',
  },
  'metal oxide exchange': {
    title: '',
    image: <MetalOxideExchangeSvg className='h-full w-full' />,
    text: '',
  },
};

export function SurfaceChargeModal({
  onClose,
  type,
}: {
  onClose: () => void;
  type: keyof typeof surfaceChargeModalMap;
}) {
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');

  return (
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
      onRequestClose={onClose}
    >
      <button className='absolute top-4 right-4' onClick={onClose}>
        <Icon icon='x' size={32} className='text-gray-500' />
      </button>
      <div className='space-y-4'>
        <Text type='h1' weight='thin' size='2xl' color='pink' className='text-center'>
          {surfaceChargeModalMap[type].title}
        </Text>

        <Text type='p' weight='light' size='md' className='text-center'>
          {surfaceChargeModalMap[type].text}
        </Text>

        {surfaceChargeModalMap[type].image}
      </div>
    </ReactModal>
  );
}
