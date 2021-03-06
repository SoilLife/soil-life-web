import { useState, useEffect, useRef } from 'react';
import { useMedia } from 'react-use';
import ReactModal from 'react-modal';

// components
import { Text, Image, Icon } from 'design-system/atoms';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  desertification: {
    imageUrl: 'Soil_101/Soil_Health/Soils_at_Risk_xa3jFk-qG.jpg',
    text: '~46% of the global land surface is affected by desertification; primarily in arid, semi-arid to dry sub-humid regions. desertification leads to fragile, dry soils and low vegetative and agricultural productivity. climate change is increasing the risk.',
  },
  erosion: {
    imageUrl: 'Soil_101/Soil_Health/natgeo8_LM18ks0gTcb.jpg',
    text: 'occurs when wind or water carries away valuable topsoil, taking nutrients and other agrochemicals along with it and contaminating our air and waterways. one third to half of all topsoil has been lost in the last 150 years.',
  },
  'loss of structure': {
    imageUrl: 'Soil_101/Soil_Health/natgeo7_FWW0JHPzP.jpg',
    text: 'loss of soil structure occurs due to frequent disturbance (i.e. tillage, compaction) and the loss of organic matter.  poorly aggregated soil falls apart more easily when wet, clogging pores, and increasing surface sealing that leads to flooding.',
  },
  salinization: {
    imageUrl: 'Soil_101/Soil_Health/natgeo2_q1lRr9XA1.jpg',
    text: 'the excessive accumulation of salts in soil (3-6,000 ppm), reducing the ability of plants to take up water and restricting overall growth. most common in arid and semi-arid regions where evaporation exceeds precipitation. can be caused and treated by management.',
  },
  acidification: {
    imageUrl: 'Soil_101/Soil_Health/acid_sulfate_Southern_Cross_University_xfxO7chz6.png',
    text: 'the build-up of hydrogen ions (or protons) in soil and/or the loss of basic cations (i.e. calcium, magnesium). this increases soil acidity, affecting plant and microbial growth. adding lime and reducing use of acidifying fertilizers can help.',
  },
  urbanization: {
    imageUrl: 'Soil_101/Soil_Health/Greening-empty-lots-helps-reduce-depression-for-city-residents_hYgARqy5e.jpeg',
    text: 'urban land area expanded 4x from 1970 to 2000, compacting and sealing off the once fertile soils upon which our cities are situated. this reduces infiltration of water and cuts off oxygen to life underground. pollution can also be a problem in urban soils. get a soil test!',
  },
};

export const RisksSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const isMobile = useMedia('(max-width: 640px)');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const modalRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!modalRef.current || !modalType) return;

      modalRef.current.querySelector(`#${modalType.replaceAll(' ', '-')}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, [modalType]);

  function handleButtonClick(type: typeof modalType) {
    return () => {
      setModalType(type);
    };
  }

  function handleCloseModal() {
    setModalType(null);
  }

  return (
    <>
      <div ref={props.assignRef} className={styles['section']}>
        <Text
          id='soils-at-risk'
          type='h1'
          weight='bold'
          size='3xl'
          color='blue'
          className={`${styles['anchor']} ${styles['heading']}`}
        >
          soils at risk
        </Text>
        <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-50']}`}>
          a soccer field of soil is eroded every 5 seconds, an area the size of new york is sealed up every day, and 33%
          of the world's soils are considered moderately to highly degraded. this poses an existential threat -- to our
          food supply and the global economy. by working together to improve soil health, we can provide solutions to
          these global challenges.
        </Text>

        <ul className='mx-auto space-y-4 sm:w-1/2'>
          {Object.entries(modalTypeMap).map(([type]) => (
            <li key={type}>
              <button
                className='w-full py-2 bg-teal-500 text-center sm:py-8'
                onClick={handleButtonClick(type as typeof modalType)}
              >
                <Text type='span' weight='light' size='lg' color='white'>
                  {type}
                </Text>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              inset: isMobile ? '40px 0 0 0' : '10% 20%',
            },
            overlay: {
              zIndex: 2,
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <div ref={modalRef} className='flex gap-20 pb-4 overflow-x-auto'>
            {Object.entries(modalTypeMap).map(([modalTitle, { text, imageUrl }]) => {
              return (
                <div
                  key={modalTitle}
                  id={modalTitle.replaceAll(' ', '-')}
                  className='flex-shrink-0 h-full w-full grid place-items-center space-y-4'
                >
                  <Text type='h1' weight='bold' size='2xl' color='blue' className='text-center'>
                    {modalTitle}
                  </Text>
                  <Image url={imageUrl} className='object-contain mx-auto max-w-[50vh]' />
                  <Text type='p' weight='light' size='sm' className={`text-center ${styles['p-38']}`}>
                    {text}
                  </Text>
                </div>
              );
            })}
          </div>
        </ReactModal>
      )}
    </>
  );
};
