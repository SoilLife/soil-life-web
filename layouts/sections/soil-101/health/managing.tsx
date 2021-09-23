import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets

const headers = ['no-tillage', 'cover cropping', 'hedgerows', 'nutrient management', 'organic amendments'];

export const ManagingSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <Text type='h1' weight='light' size='2xl' className='text-blue-500 mb-20'>
        managing for soil health
      </Text>
      <div className='flex justify-between'>
        {headers.map((header) => (
          <Text key={header} type='p' weight='light' size='md'>
            {header}
          </Text>
        ))}
      </div>
    </div>
  );
});
