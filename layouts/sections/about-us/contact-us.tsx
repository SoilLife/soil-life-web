import { Section, Image, Text } from 'design-system/atoms';

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
            <div className='space-y-2 xl:space-y-2'>
            <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              contact us
            </Text>
            <div className='space-y-2 xl:space-y-2'>
              <Text type='p' weight='thin' size='xs'>  
                e-mail:  <a href="mailto:jessica@soillife.org?subject=Soil Life Web Contact">jessica@soillife.org</a>          
              </Text>
             
               <Text type='h1' weight='regular' size='3xl' color='teal' className='mb-4 xl:mb-10'>
              credits <br/>
              </Text>
              <Text type='p' weight='thin' size='xs'>
                
             We would like to acknowldege the following for their contributions and inspiration -- <br/>
                </Text>
              <Text type='p' weight='regular' size='xs'>
                   Adapted Figures: 
              </Text>
              <Text type='p' weight='thin' size='xs'>
                The Nature and Property of Soils by Nyle Brady & Ray Weil 
                </Text>
              <Text type='p' weight='thin' size='2xs'>
                (Soil 101/Nexus/Soil Forming Factors; Soil 101/Diversity/Pedogenesis, Soil 101/Physics/Organic Matter) 
                <br/>
                    </Text>
              <Text type='p' weight='regular' size='xs'>  
                Photo Credits: 
                 </Text>
              <Text type='p' weight='thin' size='xs'> 
                Jim Richardson - National Geographic
                </Text>
              <Text type='p' weight='thin' size='2xs'>
                (Home Page (Header Photo, Dig Deeper); Soil 101/Soil Diversity (Header Photo), Soil 101/Soil Health (Header Photo), Soils at Risk - Erosion, Salinization)
               <br/>
                </Text>
              <Text type='p' weight='thin' size='xs'> 
                For the Love of Soil - Yamina Pressler 
                </Text>
              <Text type='p' weight='thin' size='2xs'>
                (Soil 101/Soil Physics/Structure - Wedge)
                <br/>
                <br/>
                  All other photos were licensed from Adobe Stock or sourced under creative commons.  All content is protected under fair use, as this website is 'not-for-profit' and intended for educational purposes only. 
              
                  </Text>{' '}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
