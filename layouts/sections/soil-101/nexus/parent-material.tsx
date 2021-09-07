import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import ParentMaterial from 'public/images/soil-101/nexus/parent_material.svg';

export const ParentMaterialSection = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  return (
    <div ref={ref} className='py-16'>
      <div className='space-y-8'>
        <div className='flex items-center'>
          <Text type='h1' weight='bold' size='xl' className='text-pink-500 w-full'>
            parent material
          </Text>
          <div className='w-full'>
            <img src='/images/soil-101/nexus/mountains.png' />
          </div>
        </div>
        <div className='flex items-end pl-20 space-x-4'>
          <Text type='p' weight='light' size='lg' className='text-pink-500'>
            source
          </Text>
          <Text type='p' weight='thin' size='xs'>
            - rocks weather in place or are deposited in one of the following ways
          </Text>
        </div>
        <ParentMaterial className='mx-auto max-h-[700px]' />
      </div>
    </div>
  );
});
