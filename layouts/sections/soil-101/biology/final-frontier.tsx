// components
import { Text } from 'design-system/atoms';

// assets
import FinalFrontierSvg from 'public/images/soil-101/biology/final_frontier.svg';

export const FinalFrontierSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  return (
    <div ref={props.assignRef}>
      <Text type='h1' weight='light' size='2xl' className='text-teal-500 mb-20'>
        soil: the final frontier
      </Text>
      <Text type='p' weight='light' size='md'>
        soil is home to{' '}
        <Text type='span' weight='bold' size='md'>
          1/4 of the world’s biodiversity
        </Text>{' '}
        with billions of microscopic organisms in a single teaspoon.{' '}
        <Text type='span' weight='bold' size='md'>
          95-99%
        </Text>{' '}
        of these microorganisms{' '}
        <Text type='span' weight='bold' size='md'>
          have yet to be discovered, making soils a major frontier in
        </Text>{' '}
        <Text type='span' weight='bold' size='md' className='text-pink-500'>
          genetic discovery!
        </Text>
      </Text>
      <FinalFrontierSvg />

      <Text type='p' weight='light' size='md' className='text-center'>
        "essentially,{' '}
        <Text type='span' weight='bold' size='md' className='text-pink-500'>
          all life depends upon the soil...
        </Text>{' '}
        there can be no life without soil and{' '}
        <Text type='span' weight='bold' size='md' className='text-pink-500'>
          no soil without life;
        </Text>{' '}
        they have evolved together.""
      </Text>
      <Text type='p' weight='light' size='md' className='text-pink-500 text-center'>
        - charles kellogg
      </Text>
    </div>
  );
};
