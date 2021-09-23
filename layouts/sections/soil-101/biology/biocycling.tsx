// components
import { Text } from 'design-system/atoms';

// assets
import Biocycling from 'public/images/soil-101/biology/biocycling.svg';

export const BiocyclingSection = () => {
  return (
    <div>
      <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
        biocycling
      </Text>
      <Text type='p' weight='light' size='sm'>
        plants combine carbon from the atmosphere with water and nutrients from soil to form the building blocks of life
        -- carbohydrates, proteins, and lipids that form plant leaves, stems, roots, and fruits.
      </Text>
      <Biocycling />
      <Text type='p' weight='light' size='sm'>
        plant biomass is eaten and excreted by animals or it decomposes when the plant dies. carbon is also pumped
        directly underground by roots. mineral weathering and decomposition then make nutrients available for future
        growth and the cycle continues.
      </Text>
    </div>
  );
};
