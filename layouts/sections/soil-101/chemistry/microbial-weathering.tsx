// components
import { Text } from 'design-system/atoms';

// assets
import MicrobialWeatheringSvg from 'public/images/soil-101/chemistry/microbial_weathering.svg';

export const MicrobialWeatheringSection = () => {
  return (
    <div>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        microbial weathering
      </Text>
      <MicrobialWeatheringSvg />
    </div>
  );
};
