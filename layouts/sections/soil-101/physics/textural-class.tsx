import React, { useEffect, useState, useRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import SoilTexturalClassSvg from 'public/images/soil-101/physics/soil_textural_class.svg';

import styles from '../soil-101.module.css';

export const TexturalClassSection = () => {
  const [values, setValues] = useState({
    sand: '',
    silt: '',
    clay: '',
  });

  const svgContainerRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svgBoundingClientRect = svgContainerRef.current
      ?.querySelector('#soil_textural_class_svg__Layer_2')
      ?.getBoundingClientRect();

    if (!dotRef.current || !svgBoundingClientRect) return;

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
    dotRef.current.style.left = `${svgBoundingClientRect.width * x}px`;
    dotRef.current.style.top = `${svgBoundingClientRect.height * (1 - y)}px`;
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
      <Text type='p' weight='thin' size='lg' className='ml-8'>
        the ratio of sand, silt, and clay determines a soil's textural class, which groups soils into categories that
        behave similarly
      </Text>
      <div className='sm:grid sm:grid-cols-2'>
        <div ref={svgContainerRef} className='relative mb-10 sm:mb-0'>
          <div
            ref={dotRef}
            className='absolute h-4 w-4 bg-pink-500 rounded-full border border-sold border-black hidden z-[1]'
          />
          <SoilTexturalClassSvg />
        </div>
        <div className='ml-20 flex flex-col justify-center space-y-8'>
          <div className='flex space-x-4'>
            <input
              type='number'
              className='border border-solid border-pink-500 rounded-lg w-60'
              inputMode='numeric'
              step='1'
              min='0'
              max='100'
              onChange={handleOnChange('sand')}
              value={values.sand}
            />
            <Text type='h3' weight='regular' size='xl'>
              = % sand
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input
              type='number'
              className='border border-solid border-pink-500 rounded-lg w-60'
              inputMode='numeric'
              step='1'
              min='0'
              max='100'
              onChange={handleOnChange('silt')}
              value={values.silt}
            />
            <Text type='h3' weight='regular' size='xl'>
              = % silt
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input
              type='number'
              className='border border-solid border-pink-500 rounded-lg w-60'
              inputMode='numeric'
              step='1'
              min='0'
              max='100'
              onChange={handleOnChange('clay')}
              value={values.clay}
            />
            <Text type='h3' weight='regular' size='xl'>
              = % clay
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
