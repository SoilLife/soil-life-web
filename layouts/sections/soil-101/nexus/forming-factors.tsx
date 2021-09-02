// components
import { Text } from 'design-system/atoms';

export function FormingFactorsSection() {
  return (
    <div className='py-16 h-full grid grid-cols-12'>
      <div className='col-start-3 col-span-10  space-y-8'>
        <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
          soil forming factors
        </Text>
      </div>
    </div>
  );
}