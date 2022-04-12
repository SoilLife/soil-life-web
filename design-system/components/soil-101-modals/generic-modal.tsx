import ReactModal from 'react-modal';

// helpers
import { useMedia } from 'react-use';

// components
import { Text, Icon, Image } from 'design-system/atoms';

export function GenericModal({
  title,
  description,
  image,
  onClose,
}: {
  title: string;
  description: string;
  image:
    | {
        type: 'svg';
        element: JSX.Element;
        url?: never;
      }
    | { type: 'imagekit' | 'img'; url: string; element?: never };
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
      <button aria-label='Close Modal' className='absolute top-4 right-4' onClick={onClose}>
        <Icon icon='x' size={32} className='text-gray-500' />
      </button>
      <div className='h-full grid place-items-center text-center'>
        <div className='space-y-4'>
          <Text type='h1' weight='bold' size='2xl' color='pink'>
            {title}
          </Text>
          {image.type === 'svg' ? (
            image.element
          ) : image.type === 'imagekit' ? (
            <Image url={image.url} className='object-cover mx-auto h-auto w-3/4 md:w-1/2' />
          ) : (
            <img src={image.url} className='object-cover mx-auto h-auto w-3/4 md:w-1/2' />
          )}
          <Text type='p' weight='light' size='xs' style={{ lineHeight: '38px' }}>
            {description}
          </Text>
        </div>
      </div>
    </ReactModal>
  );
}
