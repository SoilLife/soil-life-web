import { useState } from 'react';

import { soil101Subheadings } from 'data/main-headings';

import { FullPage } from 'design-system/components/fullpage';
import { Section, Image, Text } from 'design-system/atoms';

// assets

import DownArrow from 'public/images/down_arrow_white.svg';
import AirWaterMineralOrganic from 'public/images/soil-101/nexus/air_water_mineral_organic.svg';
import NexusIntro from 'public/images/soil-101/nexus/nexus_intro.svg';
import EcosystemServices from 'public/images/soil-101/nexus/ecosystem_services.svg';
import RockWeathering from 'public/images/soil-101/nexus/rock_weathering.svg';
import RockWeatheringTable from 'public/images/soil-101/nexus/rock_weathering_table.svg';
import ParentMaterial from 'public/images/soil-101/nexus/parent_material.svg';
import SoilFormation from 'public/images/soil-101/nexus/soil_formation.svg';
import SoilProcesses from 'public/images/soil-101/nexus/soil_processes.svg';

const sections = ['soil nexus', 'rock weathering', 'soil formation', 'soil processes', 'soil services'] as const;

function SidePanel({ currentSection, onClick }: { currentSection: string; onClick: (section: string) => () => void }) {
  return (
    <aside className='col-span-2'>
      <ul className='text-pink-500 space-y-5 h-full border-r border-solid border-pink-500'>
        {sections.map((section) => (
          <li key={section}>
            <div className='inline-block cursor-pointer' onClick={onClick(section)}>
              <Text
                type='h3'
                weight='medium'
                size='sm'
                className={`py-2  ${section === currentSection ? 'border-b border-soild border-pink-500' : ''}`}
              >
                {section}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function SoilNexusPage() {
  const [currentSection, setCurrentSection] = useState('soil nexus');
  function handleClick(section: string) {
    return () => {
      setCurrentSection(section);
    };
  }
  return (
    <FullPage
      type='main'
      subHeaderProps={{
        headings: soil101Subheadings,
        pathName: 'soil-101',
        className: 'bg-pink-500',
      }}
    >
      <Section>
        <div className='h-full grid grid-cols-2 grid-rows-2 text-white'>
          <div className='relative'>
            <Image url='Soil_101/atmosphere_UTyTSatt0.jpg' className='object-cover' />
            <Text
              type='h2'
              size='4xl'
              weight='medium'
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
            >
              atmosphere
            </Text>
          </div>
          <div className='relative'>
            <Image url='Soil_101/hydrosphere_bBzkj3nZj' className='object-cover' />
            <Text
              type='h2'
              size='4xl'
              weight='medium'
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
            >
              hydrosphere
            </Text>
          </div>
          <div className='relative'>
            <Image url='Soil_101/climate_nexus_HFcemzqs-.jpg' className='object-cover' />
            <Text type='h2' size='4xl' weight='medium' className='absolute top-0 left-1/2 transform -translate-x-1/2'>
              biosphere
            </Text>
          </div>
          <div className='relative'>
            <Image url='Soil_101/Soil_Habitat_a4f2tAtMH.jpg?updatedAt=1620587191257' className='object-cover' />
            <Text type='h2' size='4xl' weight='medium' className='absolute top-0 left-1/2 transform -translate-x-1/2'>
              lithosphere
            </Text>
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solid border-white  overflow-hidden max-h-[264px] max-w-[264px]'>
          <Image
            url='Soil_101/Players_Soil_Biology_tardigrade_protozoaslide_bmxw1jrtlnE.jpg'
            className='h-full w-full object-cover'
          />
          <div className='absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-white'>
            <Text type='h2' weight='medium' size='3xl'>
              soil
            </Text>
            <Text type='p' weight='medium' size='xs'>
              is the
            </Text>
            <Text type='h2' weight='bold' size='xl'>
              nexus
            </Text>
          </div>
        </div>
        <DownArrow height={60} className='absolute bottom-4 left-1/2 transform -translate-x-1/2' />
      </Section>
      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />

          <div className='col-span-10 pl-10'>
            <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
              soil: the nexus
            </Text>
            <Text type='p' weight='light' size='md'>
              the{' '}
              <Text type='span' weight='bold' size='md' className='text-pink-500'>
                "solid ground"
              </Text>{' '}
              we walk on is only about{' '}
              <Text type='span' weight='bold' size='md' className='text-pink-500'>
                50% solid
              </Text>{' '}
              material made of mostly mineral and 1-10% organic matter. the remaining{' '}
              <Text type='span' weight='bold' size='md' className='text-pink-500'>
                50% is empty, pore space
              </Text>{' '}
              — filled with either air or water.
            </Text>
            <div className='flex space-x-10 p-6'>
              <NexusIntro />
              <AirWaterMineralOrganic />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />

          <div className='col-span-10 pl-10 space-y-8'>
            <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
              ecosystem services
            </Text>
            <Text type='p' weight='light' size='md' className='text-center'>
              soils are the foundation of nearly every ecosystem on the planet. soil functions and processes provide
              ecosystem services that give rise to healthy plants, healthy people, and a healthy planet!
            </Text>
            <div style={{ height: 'fit-content' }}>
              <EcosystemServices className='h-full mx-auto max-h-[500px] object-contain' />
            </div>
            <Text type='p' weight='light' size='md' className='text-center text-teal-500'>
              "essentially, all life depends upon the soil... there can be no life without soil and no soil without
              life; they have evolved together." -charles kellogg
            </Text>
          </div>
        </div>
      </Section>
      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />

          <div className='col-span-10 pl-10 space-y-8'>
            <div className='flex'>
              <div>
                <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
                  rock weathering
                </Text>
                <Text type='p' weight='light' size='md'>
                  over time, through a combination of physical, biological, and chemical processes, rocks break down
                  into smaller and smaller pieces.
                </Text>
              </div>
              <RockWeathering height='189px' />
            </div>
            <RockWeatheringTable />
          </div>
        </div>
      </Section>

      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />
          <div className='col-span-10 pl-10 space-y-8'>
            <div className='flex items-center'>
              <Text type='h1' weight='bold' size='xl' className='text-pink-500 w-full'>
                parent material
              </Text>
              <div className='w-full'>
                <img src='/images/soil-101/nexus/mountains.png' />
              </div>
            </div>
            <div className='flex items-end pl-20 space-x-4'>
              <Text type='p' weight='light' size='lg' className='text-pink-500'>
                source
              </Text>
              <Text type='p' weight='thin' size='xs'>
                - rocks weather in place or are deposited in one of the following ways
              </Text>
            </div>
            <ParentMaterial height='760' className='mx-auto' />
          </div>
        </div>
      </Section>
      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />
          <div className='col-span-10 pl-10 space-y-8'>
            <div className='flex items-end pl-20 space-x-4'>
              <Text type='p' weight='light' size='lg' className='text-pink-500'>
                types
              </Text>
              <Text type='p' weight='thin' size='xs'>
                - rocks are composed of different types of minerals that weather at different rates
              </Text>
            </div>
            <Image url='/Soil_101/Soil_Nexus/pm_types_ptw5coXfG.svg' className='h-[685px] object-contain' />
          </div>
        </div>
      </Section>

      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />

          <div className='col-span-10 pl-10 space-y-8'>
            <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
              soil formation
            </Text>

            <SoilFormation className='h-[668px] mx-auto' />
          </div>
        </div>
      </Section>

      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />

          <div className='col-span-10 pl-10 space-y-8'>
            <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
              soil forming factors
            </Text>
          </div>
        </div>
      </Section>

      <Section>
        <div className='container py-16 h-full grid grid-cols-12'>
          <SidePanel currentSection={currentSection} onClick={handleClick} />

          <div className='col-span-10 pl-10 space-y-8'>
            <div className='grid grid-cols-2'>
              <div className='space-y-10'>
                <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
                  soil processes
                </Text>
                <ul className='space-y-10'>
                  <li>
                    <Text type='p' weight='medium' size='lg' className='text-pink-500'>
                      additions:
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      rain/flooding, dust, animal
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      and plant residues, fertilizers
                    </Text>
                  </li>
                  <li>
                    <Text type='p' weight='medium' size='lg' className='text-teal-500'>
                      losses:
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      erosion/runoff, leaching,
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      metabolism, volatilization
                    </Text>
                  </li>
                  <li>
                    <Text type='p' weight='medium' size='lg' className='text-yellow-500'>
                      translocations:
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      gravity/water, evaporation of
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      salts, mixing by organisms
                    </Text>
                  </li>
                  <li>
                    <Text type='p' weight='medium' size='lg' className='text-blue-500'>
                      transformations:
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      decomposition of residues,
                    </Text>
                    <Text type='p' weight='medium' size='md'>
                      weathering of rocks to clay, iron oxidation{' '}
                    </Text>
                  </li>
                </ul>
              </div>
              <div>
                <SoilProcesses />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </FullPage>
  );
}
