import React, { useState } from 'react';

// components
import { Section, Typography, Image } from 'components/atoms';

// data
const valueCards: {
  imageUrl: string;
  label: string;
  content: string;
}[] = [
  {
    imageUrl: '/About_Us/Our_Values/Soilutions_values_k9HolOlaLaW.jpg',
    label: 'solutions',
    content:
      'there is enough fear based media out there. we value the kind of positivity and optimism that empowers people with solutions, rather than focuses on the problems. rather than fighting against broken systems, we value the creation of new models that make old paradigms obsolete.',
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
  const [isHovered, setIsHovered] = useState<{ [index: number]: boolean }>({});

  function handleMouseEnter(index: number) {
    return (_e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered((prevState) => ({ ...prevState, [index]: true }));
    };
  }
  function handleMouseLeave(index: number) {
    return (_e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered((prevState) => ({ ...prevState, [index]: false }));
    };
  }
  return (
    <Section>
      <div className='flex flex-col items-center justify-center h-full p-4 mx-auto text-center sm:px-16 sm:py-8 sm:space-y-10'>
        <Typography type='subheading' className='mb-4 text-teal-400'>
          Our Values
        </Typography>
        <div className='grid w-full grid-cols-3 grid-rows-3 gap-6'>
          {valueCards.map(({ content, imageUrl, label }, index) => (
            <div
              key={index}
              className='relative h-40 md:h-60 lg:h-96 xl:h-52 2xl:h-64'
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave(index)}
            >
              <Image url={imageUrl} className='object-cover' />
              <div
                className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 ${
                  isHovered[index] ? 'bg-gradient-to-br from-teal-600 to-transparent' : ''
                }`}
              >
                {isHovered[index] ? (
                  <Typography type='paragraph' className=' text-white'>
                    {content}
                  </Typography>
                ) : (
                  <Typography type='subheading' className='text-white'>
                    {index + 1}. {label}
                  </Typography>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
