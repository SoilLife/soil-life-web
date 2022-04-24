import ReactModal from 'react-modal';

// helpers
import { useMedia } from 'react-use';

// components
import { Icon, Image, Text } from 'design-system/atoms';

const imageClassName = 'h-full object-contain max-h-[65vh] sm:w-3/4 ';

export function FullImage({
  image,
  onClose,
  title,
  titleColor,
}: {
  onClose: () => void;
  image:
    | { url: string; type: 'imagekit' | 'img'; element?: never }
    | { element: JSX.Element; type: 'svg'; url?: never };
  title?: string;
  titleColor?: Color;
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
          padding: isMobile ? 0 : 60,
          display: isMobile ? 'flex' : undefined,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        overlay: {
          zIndex: 30,
        },
      }}
      onRequestClose={onClose}
    >
      <button aria-label='Close Modal' className='absolute top-4 right-4' onClick={onClose}>
        <Icon icon='x' size={32} className='text-gray-500' />
      </button>
      {title && (
        <Text type='h1' weight='bold' size='2xl' color={titleColor} className='mb-5 text-center'>
          {title}
        </Text>
      )}
      <div className='h-full w-full grid place-items-center'>
        {image.type === 'svg' ? (
          image.element
        ) : image.type === 'imagekit' ? (
          <Image url={image.url} className={imageClassName} />
        ) : (
          <img src={image.url} className={imageClassName} />
        )}
      </div>
    </ReactModal>
  );
}

FullImage.defaultProps = {
  titleColor: 'pink' as Color,
};
