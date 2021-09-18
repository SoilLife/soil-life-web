import { forwardRef, useState, useRef, useEffect } from 'react';

// helpers
import { useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import ReactModal from 'react-modal';
import { Text, Icon } from 'design-system/atoms';

// assets
import EcosystemServices from 'public/images/soil-101/nexus/ecosystem_services.svg';

const modalTypeMap = {
  'climate regulation': {
    title: 'climate regulation:',
    titleColor: 'text-pink-500',
    text: 'soils are a key component of the carbon, nitrogen, and plant growth cycles, impacting both the level of greenhouse gases (CO2, CH4, and NOx) and plant growth vapor in the atmosphere. ',
  },
  'plant growth': {
    title: 'plant growth:',
    titleColor: 'text-teal-500',
    text: "produces the raw materials that form the base of our global economy, providing food, fiber, fuel, 'f'armaceuticals and more!",
  },
  'water filtration': {
    title: 'water filtration:',
    titleColor: 'text-gray-500',
    text: 'as water moves through the soil, clays and organic matter, which carry an electrical charge, bind up contaminants, removing them from the water.',
  },
  'nutrient cycling': {
    title: 'nutrient cycling:',
    titleColor: 'text-yellow-500',
    text: 'as soil organisms feed on roots, residues, and organic matter and each other, they recycle nutrients making them available for plant uptake or storing and preserving them against losses to the air or water.',
  },
  'water storage': {
    title: 'water storage:',
    titleColor: 'text-blue-500',
    text: 'microbes, roots and organisms that burrow through the soil stick particles together and build structure, allowing water to infiltrate the soil and reducing the risk of flooding and erosion. the more clay and organic matter, the more water a soil can hold.',
  },
  'historical record': {
    title: 'historical record:',
    titleColor: 'text-pink-500',
    text: 'like chapters in a book, soils record the history of past climate and vegetation, as well as the rise and fall of civilizations.',
  },
  biodiversity: {
    title: 'habitat/biodiversity:',
    titleColor: 'text-teal-500',
    text: "soils harbor ¼ of the world's biodiversity. over a billion organisms live in one handful of soil and 90% of insects spend a portion of their lives underground.",
  },
  'carbon storage': {
    title: 'carbon storage:',
    titleColor: 'text-gray-500',
    text: 'plants take in CO2 and use it to make sugars and proteins,  some of which exudes from their roots, feeding the life in the soil. living and dead biomass and decomposing plant and animal residues, store carbon underground, reducing CO2 levels in the atmosphere.',
  },
  engineering: {
    title: 'medium engineering:',
    titleColor: 'text-yellow-500',
    text: 'soils support our homes, buildings, infrastructure, and parks.  the type of soil (sandy, clay, etc.) and its "load bearing capacity" must be considered when laying a foundation.',
  },
};

export const EcosystemServicesSection = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
  const [modalType, setModalType] = useState<
    | null
    | 'climate regulation'
    | 'plant growth'
    | 'water filtration'
    | 'nutrient cycling'
    | 'water storage'
    | 'historical record'
    | 'biodiversity'
    | 'carbon storage'
    | 'engineering'
  >(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModal(type: typeof modalType) {
      return (_e: MouseEvent) => {
        const body = document.querySelector('body');
        if (body) {
          body.style.overflow = 'hidden';
        }
        setModalType(type);
      };
    }

    const sectionContainer = sectionRef.current;
    const climateRegulationsSvg = sectionContainer.querySelector(
      '#ecosystem_services_svg__Layer_2-2'
    ) as SVGGElement | null;
    const plantGrowthSvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_3') as SVGGElement | null;
    const waterFiltrationSvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_4') as SVGGElement | null;
    const nutrientCyclingSvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_5') as SVGGElement | null;
    const waterStorageSvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_6') as SVGGElement | null;
    const historicalRecordSvg = sectionContainer.querySelector(
      '#ecosystem_services_svg__Layer_7'
    ) as SVGGElement | null;
    const biodiversitySvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_8') as SVGGElement | null;
    const carbonStorageSvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_9') as SVGGElement | null;
    const engineeringSvg = sectionContainer.querySelector('#ecosystem_services_svg__Layer_10') as SVGGElement | null;

    climateRegulationsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    climateRegulationsSvg?.addEventListener('click', handleOpenModal('climate regulation'));
    plantGrowthSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    plantGrowthSvg?.addEventListener('click', handleOpenModal('plant growth'));
    waterFiltrationSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    waterFiltrationSvg?.addEventListener('click', handleOpenModal('water filtration'));
    nutrientCyclingSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    nutrientCyclingSvg?.addEventListener('click', handleOpenModal('nutrient cycling'));
    waterStorageSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    waterStorageSvg?.addEventListener('click', handleOpenModal('water storage'));
    historicalRecordSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    historicalRecordSvg?.addEventListener('click', handleOpenModal('historical record'));
    biodiversitySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    biodiversitySvg?.addEventListener('click', handleOpenModal('biodiversity'));
    carbonStorageSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    carbonStorageSvg?.addEventListener('click', handleOpenModal('carbon storage'));
    engineeringSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    engineeringSvg?.addEventListener('click', handleOpenModal('engineering'));

    return () => {
      climateRegulationsSvg?.removeEventListener('click', handleOpenModal('climate regulation'));
      plantGrowthSvg?.removeEventListener('click', handleOpenModal('plant growth'));
      waterFiltrationSvg?.removeEventListener('click', handleOpenModal('water filtration'));
      nutrientCyclingSvg?.removeEventListener('click', handleOpenModal('nutrient cycling'));
      waterStorageSvg?.removeEventListener('click', handleOpenModal('water storage'));
      historicalRecordSvg?.removeEventListener('click', handleOpenModal('historical record'));
      biodiversitySvg?.removeEventListener('click', handleOpenModal('biodiversity'));
      carbonStorageSvg?.removeEventListener('click', handleOpenModal('carbon storage'));
      engineeringSvg?.removeEventListener('click', handleOpenModal('engineering'));
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div
        ref={(el) => {
          // @ts-ignore
          ref(el);
          sectionRef.current = el;
        }}
      >
        <div className='space-y-8'>
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
            "essentially, all life depends upon the soil... there can be no life without soil and no soil without life;
            they have evolved together." -charles kellogg
          </Text>
        </div>
      </div>
      {modalType && (
        <ReactModal
          isOpen
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{
            content: {
              padding: 40,
              height: isMobile ? 'auto' : '200px',
              width: isMobile ? '60%' : '500px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-pink-500' />
          </button>
          <div>
            <Text type='h1' weight='bold' size='2xs' className={modalTypeMap[modalType].titleColor}>
              {modalTypeMap[modalType].title}
            </Text>
            <Text type='p' weight='light' size='2xs'>
              {modalTypeMap[modalType].text}
            </Text>
          </div>
        </ReactModal>
      )}
    </>
  );
});
