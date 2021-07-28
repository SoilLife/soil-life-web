import React, { useState } from 'react';

// helpers
import { useMedia } from 'react-use';

// components
import { Section, Image, Text } from 'design-system/atoms';

// data
const valueCards: {
  imageUrl: string;
  label: string;
  content: string;
}[] = [
  {
    imageUrl: '/About_Us/Our_Values/Soilutions_values_k9HolOlaLaW.jpg',
    label: 'soilutions',
    content:
      'we value positivity and optimism over fear and empowering people with solutions, rather than focusing on the problems. rather than fighting against broken systems, we strive to create new models that make old paradigms obsolete.',
  },
  {
    imageUrl: '/About_Us/Our_Values/Leaves_Hands_4otrtMnq3.jpg',
    label: 'the dirty truth',
    content:
      'with fake news and misinformation on the rise, we value accuracy, scientific rigor, and integrity in everything we do. truth is power.',
  },
  {
    imageUrl: '/About_Us/Our_Values/CommonGround_values_LUl2VhAGle4.jpg',
    label: 'common ground',
    content:
      'in an increasingly black and white world, we value the spectrum of gray that lies in the middle, as well as the ability to nd alignment amongst disparate groups. far more unites us than divides us.',
  },
  {
    imageUrl: '/About_Us/Our_Values/Plants_Leaves_Green_2x_X1E_kzkTZ.png',
    label: 'aggregation',
    content:
      'we value the interconnectedness of all things. just as fungal threads and plant roots bring soil particles together to form aggregates, we believe in bringing together consumers, farmers, and businesses with shared values. strength in numbers.',
  },
  {
    imageUrl: '/About_Us/Our_Values/jacob-stone-rUO43lCcVMg-unsplash_Fr-T6A0J6.jpg',
    label: 'groundedness',
    content:
      'in a cloud-driven world, we strive to bring people back down-to-earth. we value balance in our agricultural systems, businesses, and individual lives, as well as holistic, place based thinking.',
  },
  {
    imageUrl: '/About_Us/Our_Values/Soil_Trees_Forest_Green_2x_XNilD-tPkN6.png',
    label: 'deep roots',
    content:
      'while we all need wings to fly, we value investing in deep roots. now, more than ever, we must build stable, resilient, relocalized agriculture and food systems. cultivate you inner and outer garden.',
  },
  {
    imageUrl: '/About_Us/Our_Values/kyle-johnson-387021-unsplash_2x_9jrssPs7F.png',
    label: 'explore new depths',
    content:
      'space may be the final frontier, but some argue we know less about the soil underfoot then the celestial bodies overhead. we value exploration and inquiry to discover what lies beneath!',
  },
  {
    imageUrl: '/About_Us/Our_Values/Grit_6ctWj_YuvhLE.jpg',
    label: 'grit',
    content:
      'we value the courage and resolve to stand up to naysayers and fight for what’s right; the strength of character to never give up on what we believe in; and the tenacity to pursue our vision relentlessly.',
  },
  {
    imageUrl: '/About_Us/Our_Values/Organic_growth_values_4SJcoYuvI.jpg',
    label: 'organic growth',
    content:
      'we value the courage and resolve to stand up to naysayers and fight for what’s right; the strength of character to never give up on what we believe in; and the tenacity to pursue our vision relentlessly.',
  },
];

export function OurValuesSection() {
  const isMobile = useMedia('(max-width: 639px)');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleMouseEnter(index: number) {
    return (_e: React.MouseEvent<HTMLDivElement>) => {
      setActiveIndex(index);
    };
  }
  function handleMouseLeave() {
    setActiveIndex(null);
  }
  return (
    <Section>
      <div className='container h-full flex flex-col items-center justify-center text-center'>
        <Text type='h1' weight='regular' size='xl' className='text-yellow-500 mb-4 sm:mb-10'>
          our values
        </Text>
        {
          <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-4'>
            {valueCards.map(({ content, imageUrl, label }, index) => {
              const isActive = activeIndex === index;
              if (isMobile && isActive) {
                return (
                  <div className='relative col-span-full row-span-full'>
                    <Image url={imageUrl} className='h-40' />
                    <div
                      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-teal-600 to-transparent text-white`}
                    >
                      <div className='flex space-x-2 mb-8'>
                        <Text type='p' weight='medium' size='sm'>
                          {index + 1}
                        </Text>
                        <Text type='p' weight='medium' size='sm'>
                          {label}
                        </Text>
                      </div>
                      <Text type='p' weight='light' size='xs'>
                        {content}
                      </Text>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className='relative h-24 sm:h-40 md:h-60 lg:h-96 xl:h-52 2xl:h-64'
                  onMouseEnter={handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image url={imageUrl} className='object-cover' />
                  <div
                    className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 text-white ${
                      isActive ? 'bg-gradient-to-br from-teal-600 to-transparent' : ''
                    }`}
                  >
                    {isActive ? (
                      <Text type='p' weight='light' size='xs'>
                        {content}
                      </Text>
                    ) : (
                      <div>
                        <Text type='p' weight='medium' size='sm'>
                          {index + 1}
                        </Text>
                        <Text type='p' weight='medium' size='sm'>
                          {label}
                        </Text>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    </Section>
  );
}
