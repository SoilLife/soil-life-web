import { Section, Image } from 'components/atoms';

export function OurValuesSection() {
  return (
    <Section>
      <div className='h-full px-16 py-8 mx-auto space-y-10 text-center'>
        <h2 className='text-3xl text-teal-400 font-acre-regular'>Our Values</h2>
        <div className='grid grid-cols-3 grid-rows-3 gap-6' style={{}}>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/Soilutions_values_k9HolOlaLaW.jpg' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>1.</p>
              <p>solutions</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/Leaves_Hands_4otrtMnq3.jpg' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>2.</p>
              <p>the dirty truth</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/CommonGround_values_LUl2VhAGle4.jpg' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>3.</p>
              <p>common ground</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/Plants_Leaves_Green_2x_X1E_kzkTZ.png' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>4.</p>
              <p>aggregation</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/jacob-stone-rUO43lCcVMg-unsplash_Fr-T6A0J6.jpg' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>5.</p>
              <p>groundedness</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/Soil_Trees_Forest_Green_2x_XNilD-tPkN6.png' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>6.</p>
              <p>deep roots</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/kyle-johnson-387021-unsplash_2x_9jrssPs7F.png' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>7.</p>
              <p>exploring new depths</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/Grit_6ctWj_YuvhLE.jpg' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>8.</p>
              <p>grit</p>
            </div>
          </div>
          <div className='relative lg:h-48 2xl:h-64'>
            <Image url='/About_Us/Our_Values/Organic_growth_values_4SJcoYuvI.jpg' />
            <div className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-acre-medium'>
              <p>9.</p>
              <p>organic growth</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
