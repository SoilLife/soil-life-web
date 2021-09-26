// components
import { Text } from 'design-system/atoms';

// assets
import PedogenesisSvg from 'public/images/soil-101/diversity/pedogenesis.svg';

export const PedogenesisSection = () => {
  return (
    <div>
      <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
        pedogenesis
      </Text>
      <Text type='p' weight='light' size='sm'>
        pedogenesis is the formation of soil. over time, as energy flows through the system, in the form of heat,
        precipitation, organisms, etc., soils weather, forming distinct layers and other morphological features.
      </Text>
      <PedogenesisSvg />
    </div>
  );
};
