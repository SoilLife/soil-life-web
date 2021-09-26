import { useState } from 'react';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';
import { useOrientation, useMedia } from 'react-use';

// components
import ReactModal from 'react-modal';
import { Text, Image, Icon } from 'design-system/atoms';

export const AnthrosolSection = () => {
  useFullpageOverflow();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orientation = useOrientation();
  const isMobile = useMedia('(max-width: 640px)');
  const isLandscape = orientation.type.includes('landscape');

  function handleOpenModal() {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div>
        <Text type='h1' weight='light' size='4xl' className='text-gray-500 mb-20'>
          anthrosol
        </Text>
        <Text type='h1' weight='light' size='2xl' className='text-pink-500 underline text-center mx-auto mb-10'>
          the human soil
        </Text>

        <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
          <Image
            url='Soil_101/Diversity_-_Soil_Profiles/anthrosol_surface_NKdtUYTsVh.jpg'
            className='object-cover cursor-pointer'
            onClick={handleOpenModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              height: isMobile ? '100%' : isLandscape ? '80vh' : '50vh',
              width: isMobile ? '100%' : isLandscape ? '65vw' : '80vw',
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
          <div className='h-full w-full grid place-items-center p-6' style={{ backgroundColor: '#5E5252' }}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-full w-full' viewBox='0 0 285.661 501.247'>
              <g id='Group_36189' data-name='Group 36189' transform='translate(-851.399 -445.428)'>
                <path
                  id='Path_203'
                  data-name='Path 203'
                  d='M8036.787,14782.255c-11.533,10-20.41,22.555-23.511,38.735-2.893,15.1,2.313,32.493,15.452,40.469,12.924,7.845,29.847,4.927,43.42-1.731,23.891-11.716,45.673-29.569,73.2-31.46,29.8-2.047,61.262,13.546,74.048,41.2,14.84,32.094,1.427,77.561-33.283,90.464-30.159,11.215-69.068-1.432-92.6,20.52-29.68,27.693-17.288,93.724-18.38,130.418-.336,11.229,2.429,23.738,11.7,30.094,19.582,13.418,52.27,8.221,54.3-18.6,1.989-26.28-19.549-60.977,2.316-83.855,19.625-20.526,52.543-15.044,77-25.082,27.835-11.421,47.809-37.21,60.023-63.816,23.624-51.445,15.009-116.66-22.6-159.277-35.072-39.741-90.212-52.921-141.158-43.533C8089.235,14751.865,8058.664,14763.29,8036.787,14782.255Z'
                  transform='translate(-7158.854 -14296.197)'
                  fill='#df6572'
                  stroke='#df6572'
                  stroke-miterlimit='10'
                  stroke-width='4.409'
                />
                <ellipse
                  id='Ellipse_79'
                  data-name='Ellipse 79'
                  cx='32.617'
                  cy='32.617'
                  rx='32.617'
                  ry='32.617'
                  transform='translate(919.967 879.441)'
                  fill='#df6572'
                  stroke='#df6572'
                  stroke-miterlimit='10'
                  stroke-width='4'
                />
              </g>
            </svg>
          </div>
        </ReactModal>
      )}
    </>
  );
};
