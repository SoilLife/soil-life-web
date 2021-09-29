// components
import { Text } from 'design-system/atoms';

export const SoilOrdersSection = () => {
  return (
    <div className='space-y-4 sm:space-y-8'>
      <Text type='h1' weight='light' size='4xl' className='text-gray-500'>
        soil orders
      </Text>
      <Text type='p' weight='light' size='md' className='text-gray-500 text-center'>
        the diversity of{' '}
        <Text type='span' weight='bold' size='md'>
          soil forming factors
        </Text>{' '}
        and{' '}
        <Text type='span' weight='bold' size='md'>
          pedogenic processes
        </Text>{' '}
        give rise to a diversity of soils, which are classified into 12 distinct groups called{' '}
        <Text type='span' weight='bold' size='md'>
          soil orders
        </Text>
        . the 12 soil orders can be found all over the world with{' '}
        <Text type='span' weight='bold' size='md'>
          similar soils
        </Text>{' '}
        appearing under{' '}
        <Text type='span' weight='bold' size='md'>
          similar climates
        </Text>{' '}
        or{' '}
        <Text type='span' weight='bold' size='md'>
          ecosystems
        </Text>
        .
      </Text>
    </div>
  );
};
