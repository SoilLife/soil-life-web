// components
import { Text, Image } from 'design-system/atoms';

export const DiversitySection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef} className='space-y-4 sm:space-y-8'>
      <Text type='h1' weight='light' size='4xl' className='text-gray-500 mb-20'>
        soil diversity
      </Text>
      <Text type='p' weight='light' size='md'>
        the{' '}
        <Text type='span' weight='bold' size='md'>
          diversity of soils
        </Text>{' '}
        beneath our feet gives rise to the diversity of{' '}
        <Text type='span' weight='bold' size='md'>
          plants
        </Text>
        ,{' '}
        <Text type='span' weight='bold' size='md'>
          animals
        </Text>
        , and{' '}
        <Text type='span' weight='bold' size='md'>
          ecosystems
        </Text>{' '}
        on earth, which in turn, further influence the diversity of soils.{' '}
        <Text type='span' weight='bold' size='md'>
          it's all connected
        </Text>
        .
      </Text>
      <Image url='Soil_101/Diversity_-_Soil_Profiles/soil_diversity_1_QomzKR0K5.png' className='object-fit' />
    </div>
  );
};
