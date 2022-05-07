import { useState } from 'react';
import ReactModal from 'react-modal';

// helpers
import { useMedia } from 'react-use';

// components
import { Icon, Image } from 'design-system/atoms';

// assets
import CameraSvg from 'public/images/camera.svg';
import BackArrow from 'public/images/left_arrow_pink_thick.svg'

const imageClassName = 'h-full object-contain max-h-[65vh] sm:w-3/4 ';

export function FoodWebModal({ onClose, front, back }: { onClose: () => void; front: JSX.Element; back: string[] }) {
  const isMobile = useMedia('(max-width: 639px)');
  const [isBackside, setIsBackside] = useState(false);
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
      <div className='absolute top-4 right-4 flex gap-6'>
        <button
          onClick={() => {
            setIsBackside(!isBackside);
          }}
          className="rounded-full p-1 h-8 w-8 border border-solid border-gray-500"
        >
          {isBackside ? <BackArrow className="h-full w-full" /> : <CameraSvg className="h-full w-full" />}
        </button>
        <button aria-label='Close Modal' onClick={onClose}>
          <Icon icon='x' size={32} className='text-gray-500' />
        </button>
      </div>

      <div className='h-full w-full grid place-items-center tw-overflow-hidden'>
        {isBackside ? (
          <div className='flex space-x-10 overflow-auto '>
            {back.map((url) => (
              <Image key={url} url={url} className={imageClassName} />
            ))}
          </div>
        ) : (
          front
        )}
      </div>
    </ReactModal>
  );
}
