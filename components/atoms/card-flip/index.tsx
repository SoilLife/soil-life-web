import { useState } from 'react';

// components
import { Image, Typography } from 'components/atoms';

// assets
import styles from './card-flip.module.css';

// interfaces
import { CardFlipProps } from './card-flip.interfaces';

export function CardFlip({ imageUrl, order, label, content }: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleFlipped() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className={`bg-transparent h-full w-full cursor-pointer ${styles['card-flip']}`} onClick={toggleFlipped}>
      <div
        className={`relative w-full h-full transition-transform duration-700 ${styles['card-flip-inner']}`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : undefined,
        }}
      >
        {/* Front */}
        <div className={`absolute w-full h-full ${styles['card-flip-front']}`}>
          <Image url={imageUrl} />
          <div className='absolute p-2.5 inset-0 flex flex-col items-center justify-center w-full h-full'>
            <Typography type='label' className='text-white'>
              {order}
            </Typography>
            <Typography type='label' className='text-white break-all'>
              {label}
            </Typography>
          </div>
        </div>

        {/* Back */}
        <div
          className={`bg-white shadow-lg absolute flex flex-col items-center justify-center w-full h-full rotate-180 transform p-4 text-center ${styles['card-flip-back']}`}
        >
          <Typography type='paragraph' className='text-base'>
            {content}
          </Typography>
        </div>
      </div>
    </div>
  );
}
