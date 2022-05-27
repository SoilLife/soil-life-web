import { Section, Image, Text } from 'design-system/atoms';

function Paragraph(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`font-acre-thin font-[18px] leading-[28px] xl:font-[22px] 2xl:font-[28px] 2xl:leading-[36px] ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </p>
  );
}

export function ContactUsSection() {
  return (
    <Section>
      <div className='relative h-full flex flex-col xl:flex-row'>
        <Image
          className={`absolute top-0 left-0 h-1/3 object-cover
          sm:static sm:h-1/2
          xl:h-full xl:w-1/2
          `}
          url='/About_Us/About_Us_Contact_Us_qr_gIU5QC.jpeg'
        />
        <div
          className={`z-10 max-w-xs mx-auto flex items-center justify-center w-full h-full transform translate-y-6 
     sm:translate-y-0 sm:max-w-lg
     xl:max-w-2xl
     2xl:max-w-3xl
          `}
        >
          <div
            className={`p-4 bg-white text-center rounded-3xl shadow-xl
          sm:shadow-none
          `}
          >
            <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              contact us
            </Text>
            <div className='space-y-2 xl:space-y-8'>
              <Text type='p' weight='thin' size='xs'>
                  <Paragraph>
                e-mail: jessica@soillife.org
                    </Paragraph>
              </Text>
             
               <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              credits
              </Text>
              <Text type='p' weight='thin' size='xs'>
                <Paragraph>
             We would like to acknowldege and credit the following for their content contributions :
                </Paragraph>
                <Paragraph>
                  </Text>
              <Text type='p' weight='semibold' size='xs'>
                Jim Richardson & National Geographic 
                   </Text>
              <Text type='p' weight='thin' size='xs'>
                  (photo credit: Home Page (Hero Image, Dig Deeper); Soil 101/Soil Diversity (Hero Image), Soil 101/Soil Health (Hero Image), Soils at Risk - Erosion, Salinization)
                </Text>
                </Paragraph>
                 <Paragraph>
                The Nature and Property of Soils by Nyle Brady & Ray Weil (adapted figures - Soil 101/Soil Nexus/Soil Forming Factors; Soil 101/Soil Diversity/Pedogenesis, Soil 101/Soil Physics/Soil Organic Matter) 
                </Paragraph>
                 <Paragraph>
                For the Love of Soil - Karen Vaughn and Yamina Pressler (photo credit: Soil 101/Soil Physics/Structure - Wedge)
                   </Paragraph>
                <Paragraph>
                  All other photos were licensed from Adobe Stock or sourced under creative commons. All content is protected under fair use, as this website is not for profit and intended for educational purposes only. 
              </Paragraph>
                  </Text>{' '}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
