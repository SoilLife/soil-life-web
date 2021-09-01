import { forwardRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets

export const FungalNetworksSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10'>
        <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
          fungal networks
        </Text>

        <Text type='p' weight='light' size='md'>
          plants release{' '}
          <Text type='span' weight='light' size='md' className='text-blue-500'>
            compounds
          </Text>{' '}
          to attract{' '}
          <Text type='span' weight='light' size='md' className='text-pink-500'>
            mycorrhizal fungi
          </Text>
          , stimulating the growth of thread-like hyphae, which connect within or outside the roots, extending them
          100-1000x. the root provides sugars to feed the fungus and in turn, its hyphae spread throughout the soil in
          search of water, nitrogen, phosphorus, and other nutrients.
        </Text>
      </div>
    </div>
  );
});
