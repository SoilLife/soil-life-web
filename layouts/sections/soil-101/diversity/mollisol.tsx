// components
import { Text, Image } from 'design-system/atoms';

export const MollisolSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='2xl' className='text-gray-500 mb-20'>
        mollisol
      </Text>
      <Text type='h1' weight='light' size='xl' className='text-pink-500 underline text-center mx-auto mb-10'>
        the prairie soil
      </Text>

      <div className='w-3/4 max-h-full mx-auto border-2 border-solid border-gray-500'>
        <Image
          url='Soil_101/Diversity_-_Soil_Profiles/Mollisol_surface_WLB_wxigXiVFyIr.jpg'
          className='object-cover '
        />
      </div>
    </div>
  );
};
