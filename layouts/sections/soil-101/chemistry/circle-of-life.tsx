// components
import { Text } from 'design-system/atoms';

// assets
import CircleOfLifeSvg from 'public/images/soil-101/chemistry/circle_of_life.svg';

export const CircleOfLifeSection = () => {
  return (
    <div>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        circle of life
      </Text>

      <CircleOfLifeSvg />
    </div>
  );
};
