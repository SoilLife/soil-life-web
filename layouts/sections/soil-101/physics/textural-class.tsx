import React, { useEffect, useState, useRef } from 'react';

// components
import { Text } from 'design-system/atoms';

import styles from '../soil-101.module.css';

export const TexturalClassSection = () => {
  const [values, setValues] = useState({
    sand: '',
    silt: '',
    clay: '',
  });

  const imageContainer = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imgBoundingClientRect = imageContainer.current
      ?.querySelector('#soil-textural-class-image')
      ?.getBoundingClientRect();

    if (!dotRef.current || !imgBoundingClientRect) return;

    const sum = Object.values(values).reduce((sum, val) => sum + +val, 0);
    if (sum < 0 || sum > 100 || sum !== 100) {
      dotRef.current.classList?.add('hidden');
      return;
    }

    const top = +values.clay;
    const left = +values.silt;

    const x = (left + top / 2) / 100;
    const y = top / 100;

    dotRef.current.classList.remove('hidden');
    dotRef.current.style.left = `calc(${imgBoundingClientRect.width * x}px - 8px)`;
    dotRef.current.style.top = `calc(${imgBoundingClientRect.height * (1 - y)}px - 8px)`;
  }, [values]);

  function handleOnChange(type: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (+value < 0) {
        setValues((values) => ({ ...values, [type]: '0' }));
      } else if (+value > 100) {
        setValues((values) => ({ ...values, [type]: '100' }));
      } else {
        setValues((values) => ({ ...values, [type]: value }));
      }
    };
  }

  return (
    <div className={styles['section']}>
      <Text type='h1' weight='light' size='3xl' color='yellow' className={styles['heading']}>
        textural class
      </Text>
      <Text type='p' weight='thin' size='md' className='ml-8'>
        soils are grouped into 12 different textural classes (based on ranges of sand, silt, and clay) that behave similarly. 
         </Text>
      <Text type='p' weight='thin' size='xs' className='ml-8'> enter numbers (equal to 100) in the boxes below to see what the textural class will be: <br/>
      </Text>
      <div className='sm:grid sm:grid-cols-2'>
        <div className='mb-10 sm:mb-0'>
          <div ref={imageContainer} className='relative'>
            <div
              ref={dotRef}
              className='absolute h-4 w-4 bg-pink-500 rounded-full border border-sold border-gray-500 hidden z-[1]'
            />
            <img id='soil-textural-class-image' src='/images/soil-101/physics/soil_textural_class.png' />
          </div>
        </div>
        <div className='flex flex-col justify-center space-y-8 sm:ml-20'>
          <div className='flex space-x-4'>
            <input
              type='number'
              className='h-10 w-40 border border-solid border-pink-500 rounded-lg sm:w-60'
              inputMode='numeric'
              step='1'
              min='0'
              max='100'
              onChange={handleOnChange('sand')}
              value={values.sand}
            />
            <Text type='p' weight='regular' size='xl'>
              = % sand
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input
              type='number'
              className='h-10 w-40 border border-solid border-pink-500 rounded-lg sm:w-60'
              inputMode='numeric'
              step='1'
              min='0'
              max='100'
              onChange={handleOnChange('silt')}
              value={values.silt}
            />
            <Text type='p' weight='regular' size='xl'>
              = % silt
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input
              type='number'
              className='h-10 w-40 border border-solid border-pink-500 rounded-lg sm:w-60'
              inputMode='numeric'
              step='1'
              min='0'
              max='100'
              onChange={handleOnChange('clay')}
              value={values.clay}
            />
            <Text type='p' weight='regular' size='xl'>
              = % clay
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
