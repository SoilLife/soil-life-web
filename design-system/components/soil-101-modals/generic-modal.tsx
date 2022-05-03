import ReactModal from 'react-modal';

// helpers
import { useMedia } from 'react-use';

// components
import { Text, Icon, Image } from 'design-system/atoms';

const imageClassName = 'object-contain mx-auto h-auto w-3/4 md:max-h-[40vh] md:w-3/4';

export function GenericModal({
  title,
  description,
  image,
  onClose,
  reverseContent,
}: {
  title: string;
  description: string | JSX.Element;
  image:
    | {
        type: 'svg';
        element: JSX.Element;
        url?: never;
      }
    | { type: 'imagekit' | 'img'; url: string; element?: never };
  onClose: () => void;
  reverseContent?: boolean;
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
          <div className={` ${reverseContent ? 'flex flex-col-reverse gap-4' : 'space-y-4'}`}>
            {image.type === 'svg' ? (
              image.element
            ) : image.type === 'imagekit' ? (
              <Image url={image.url} className={imageClassName} />
            ) : (
              <img src={image.url} className={imageClassName} />
            )}
            {typeof description === 'string' ? (
              <Text type='p' weight='light' size='xs' style={{ lineHeight: '38px' }}>
                {description}
              </Text>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
