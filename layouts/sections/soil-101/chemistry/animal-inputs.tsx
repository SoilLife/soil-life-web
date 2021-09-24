// components
import { Text } from 'design-system/atoms';

// assets
import AnimalInputs1Svg from 'public/images/soil-101/chemistry/animal_inputs_1.svg';
import AnimalInputs2Svg from 'public/images/soil-101/chemistry/animal_inputs_2.svg';
import AnimalInputs3Svg from 'public/images/soil-101/chemistry/animal_inputs_3.svg';

export const AnimalInputsSection = () => {
  return (
    <div>
      <Text type='h1' weight='light' size='2xl' className='text-orange-500 mb-20'>
        animal inputs
      </Text>
      <AnimalInputs1Svg />
      <Text type='p' weight='light' size='md'>
        above ground, animal nibbles on plants. in response, plants change their root growth patterns and pump more
        carbon underground, in search of nutrients for regrowth. this herbivory has been shown to increase soil
        microbial biomass.
      </Text>
      <AnimalInputs2Svg />
      <Text type='p' weight='light' size='md'>
        urine and feces that grazers leave behind provides nutrient-rich food for microbes, enhancing nutrient
        cycling/availability. applications of these inputs have been found to increase soil organic matter.
      </Text>
      <AnimalInputs3Svg />
      <Text type='p' weight='light' size='md'>
        trampling from animal hooves helps break up the soil and vegetation. this increases water infiltration,
        promoting decomposition and seed germination, allowing the cycle to begin again!
      </Text>
    </div>
  );
};
