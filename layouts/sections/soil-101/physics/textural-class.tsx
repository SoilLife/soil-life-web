// components
import { Text } from 'design-system/atoms';

// assets
import SoilTexturalClassSvg from 'public/images/soil-101/physics/soil_textural_class.svg';

import styles from '../soil-101.module.css';

export const TexturalClassSection = () => {
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
        <div className='mb-10 sm:mb-0'>
          <SoilTexturalClassSvg />
        </div>
        <div className='flex flex-col justify-center mx-auto space-y-8'>
          <div className='flex space-x-4'>
            <input type='number' className='border border-solid border-pink-500 rounded-lg' />
            <Text type='h2' weight='regular' size='xl'>
              = % sand
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input type='number' className='border border-solid border-pink-500 rounded-lg' />
            <Text type='h2' weight='regular' size='xl'>
              = % silt
            </Text>
          </div>

          <div className='flex space-x-4'>
            <input type='number' className='border border-solid border-pink-500 rounded-lg' />
            <Text type='h2' weight='regular' size='xl'>
              = % clay
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
