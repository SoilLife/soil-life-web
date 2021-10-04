import { useState, useRef, useEffect } from 'react';

// helpers
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import { Text } from 'design-system/atoms';

// assets
import EcosystemServices from 'public/images/soil-101/nexus/ecosystem_services.svg';
import styles from '../soil-101.module.css';
import { TextProps } from 'design-system/atoms/text/text.interfaces';

const modalTypeMap = {
  'climate regulation': {
    title: 'climate regulation:',
    color: 'pink' as TextProps['color'],
    text: 'soils are a key component of the carbon, nitrogen, and plant growth cycles, impacting both the level of greenhouse gases (CO2, CH4, and NOx) and plant growth vapor in the atmosphere.',
    className: 'top-0 right-[20%]',
  },
  'plant growth': {
    title: 'plant growth:',
    color: 'teal' as TextProps['color'],
    text: "produces the raw materials that form the base of our global economy, providing food, fiber, fuel, 'f'armaceuticals and more!",
    className: 'top-[15%] right-[20%]',
  },
  'water filtration': {
    title: 'water filtration:',
    color: 'gray' as TextProps['color'],
    text: 'as water moves through the soil, clays and organic matter, which carry an electrical charge, bind up contaminants, removing them from the water.',
    className: 'top-[40%] right-[20%]',
  },
  'nutrient cycling': {
    title: 'nutrient cycling:',
    color: 'yellow' as TextProps['color'],
    text: 'as soil organisms feed on roots, residues, and organic matter and each other, they recycle nutrients making them available for plant uptake or storing and preserving them against losses to the air or water.',
    className: 'top-1/2 right-[20%]',
  },
  'water storage': {
    title: 'water storage:',
    color: 'blue' as TextProps['color'],
    text: 'microbes, roots and organisms that burrow through the soil stick particles together and build structure, allowing water to infiltrate the soil and reducing the risk of flooding and erosion. the more clay and organic matter, the more water a soil can hold.',
    className: 'bottom-0 right-[20%]',
  },
  'historical record': {
    title: 'historical record:',
    color: 'pink' as TextProps['color'],
    text: 'like chapters in a book, soils record the history of past climate and vegetation, as well as the rise and fall of civilizations.',
    className: 'bottom-0 left-[20%]',
  },
  biodiversity: {
    title: 'habitat/biodiversity:',
    color: 'teal' as TextProps['color'],
    text: "soils harbor ¼ of the world's biodiversity. over a billion organisms live in one handful of soil and 90% of insects spend a portion of their lives underground.",
    className: 'top-1/2 left-[20%]',
  },
  'carbon storage': {
    title: 'carbon storage:',
    color: 'gray' as TextProps['color'],
    text: 'plants take in CO2 and use it to make sugars and proteins,  some of which exudes from their roots, feeding the life in the soil. living and dead biomass and decomposing plant and animal residues, store carbon underground, reducing CO2 levels in the atmosphere.',
    className: 'top-[20%] left-[20%]',
  },
  engineering: {
    title: 'medium engineering:',
    color: 'yellow' as TextProps['color'],
    text: 'soils support our homes, buildings, infrastructure, and parks.  the type of soil (sandy, clay, etc.) and its "load bearing capacity" must be considered when laying a foundation.',
    className: 'top-0 left-[20%]',
  },
};

export const EcosystemServicesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function handleOpenModal(type: typeof modalType) {
      return (_e: MouseEvent) => {
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

  function handleClose() {
    setModalType(null);
  }

  return (
    <>
      <div
        ref={(el) => {
          props.assignRef(el);
          sectionRef.current = el;
        }}
        className={styles['section']}
      >
        <Text type='h1' weight='bold' size='4xl' color='pink' className={styles['heading']}>
          ecosystem services
        </Text>
        <Text type='p' weight='light' size='md' className={`text-center ${styles['p-50']}`}>
          soils are the foundation of nearly every ecosystem on the planet. soil functions and processes provide
          ecosystem services that give rise to healthy plants, healthy people, and a healthy planet!
        </Text>
        <div className='relative' style={{ height: 'fit-content' }}>
          <EcosystemServices className='h-full mx-auto max-h-[500px] object-contain' />
          {modalType && <ServicePopup {...modalTypeMap[modalType]} onClose={handleClose} />}
        </div>
        <Text type='p' weight='regular' size='md' color='teal' className={`text-center ${styles['p-50']}`}>
          "essentially, all life depends upon the soil... there can be no life without soil and no soil without life;
          they have evolved together." -charles kellogg
        </Text>
      </div>
    </>
  );
};

function ServicePopup({
  color,
  title,
  text,
  className,
  onClose,
}: {
  color: TextProps['color'];
  title: string;
  text: string;
  className: string;
  onClose: () => void;
}) {
  return (
    <div className={`bg-white p-4 max-w-xs shadow-lg absolute cursor-pointer ${className}`} onClick={onClose}>
      <Text type='h1' weight='bold' size='2xs' color={color}>
        {title}
      </Text>
      <Text type='p' weight='light' size='2xs'>
        {text}
      </Text>
    </div>
  );
}
