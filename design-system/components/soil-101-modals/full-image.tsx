import ReactModal from 'react-modal';

// helpers
import { useMedia } from 'react-use';

// components
import { Icon, Image } from 'design-system/atoms';

const imageClassName = 'h-full object-contain max-h-[80vh] sm:w-3/4 ';

export function FullImage({
  image,
  onClose,
}: {
  onClose: () => void;
  image: { url: string; type: 'imagekit' | 'img' };
}) {
  const isMobile = useMedia('(max-width: 639px)');

  return (
    <ReactModal
      isOpen
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      preventScroll
      style={{
        content: {
          inset: isMobile ? '40px 0 0 0' : '10%',
          padding: 60,
        },
        overlay: {
          zIndex: 30,
        },
      }}
      onRequestClose={onClose}
    >
      <button className='absolute top-4 right-4' onClick={onClose}>
        <Icon icon='x' size={32} className='text-gray-500' />
      </button>
      <div className='h-full w-full grid place-items-center'>
        {image.type === 'imagekit' ? (
          <Image url={image.url} className={imageClassName} />
        ) : (
          <img src={image.url} className={imageClassName} />
        )}
      </div>
    </ReactModal>
  );
}
