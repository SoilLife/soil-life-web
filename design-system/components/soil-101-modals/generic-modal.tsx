import ReactModal from 'react-modal';

// helpers
import { useMedia } from 'react-use';

// components
import { Text, Icon, Image } from 'design-system/atoms';

export function GenericModal({
  title,
  description,
  imageUrl,
  onClose,
}: {
  title: string;
  description: string;
  imageUrl: string;
  onClose: () => void;
}) {
  const isMobile = useMedia('(max-width: 640px)');

  return (
    <ReactModal
      isOpen
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      preventScroll
      onRequestClose={onClose}
      style={{
        overlay: { zIndex: 2 },
        content: {
          inset: isMobile ? '40px 0 0 0' : '10%',
        },
      }}
    >
      <button className='absolute top-4 right-4' onClick={onClose}>
        <Icon icon='x' size={32} className='text-gray-500' />
      </button>
      <div className='h-full grid place-items-center text-center'>
        <div className='space-y-4'>
          <Text type='h1' weight='bold' size='2xl' color='pink'>
            {title}
          </Text>
          <Image url={imageUrl} className='object-cover mx-auto h-auto w-3/4 md:w-1/2' />
          <Text type='p' weight='light' size='xs' style={{ lineHeight: '38px' }}>
            {description}
          </Text>
        </div>
      </div>
    </ReactModal>
  );
}
