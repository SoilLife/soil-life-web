import { forwardRef, useState, useRef, useEffect } from 'react';

// helpers
import { useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import ReactModal from 'react-modal';
import { Text, Icon } from 'design-system/atoms';

// assets

// assets
import RockWeathering from 'public/images/soil-101/nexus/rock_weathering.svg';
import RockWeatheringTable from 'public/images/soil-101/nexus/rock_weathering_table.svg';

const modalTypeMap = {
  'freeze/thaw': {
    isSimple: true,
    title: 'freeze/thaw:',
    text: 'water that enters cracks in rocks can break them apart when it freezes and expands',
  },
  gravity: {
    isSimple: true,
    title: 'gravity:',
    text: 'gravity moves materials downslope. as they knock into eachother rocks break down',
  },
  'wind abrasion': {
    isSimple: true,
    title: 'wind abrasion:',
    text: 'water that enters cracks in rocks can break them apart when it freezes and expands ',
  },
  'root expansion': {
    isSimple: true,
    title: 'root (physical):',
    text: 'as roots grow they exert an immense amount of pressure on the materials around them -- enough to break apart solid rock',
  },
  fauna: {
    isSimple: true,
    title: 'fauna:',
    text: 'the wastes and decomposing bodies of living things produce acids that can weather rocks.',
  },
  roots: {
    isSimple: true,
    title: 'roots (biochemical):',
    text: 'roots release CO2, which can turn into an acid, and other acids that chemically weather rocks.',
  },
  microbes: {
    isSimple: true,
    title: 'microbes:',
    text: 'microbes also release CO2 and organic acids that weather rocks. a symbiosis of bacteria and fungi, known as lichen, plays a major role in rock weathering on earth.',
  },
  hydrolysis: {
    isSimple: false,
    title: 'hydrolysis:',
    text: 'like chapters in a book, soils record the history of past climate and vegetation, as well as the rise and fall of civilizations.',
  },
  'carbonic acid': {
    isSimple: false,
    title: 'carbonic acid weathering',
    text: 'like chapters in a book, soils record the history of past climate and vegetation, as well as the rise and fall of civilizations.',
  },
  dissolution: {
    isSimple: false,
    title: 'dissolution',
    image: '/images/soil-101/nexus/dissolution.svg',
    text: 'when compounds (solutes) break apart and are surrounded by a solvent. in soil, many minerals dissolve in water, making plant nutrients available for uptake',
  },
  'oxidation-reduction': {
    isSimple: false,
    title: 'oxidation-reduction:',
    text: 'plants take in CO2 and use it to make sugars and proteins, some of which exudes from their roots, feeding the life in the soil. living and dead biomass and decomposing plant and animal residues, store carbon underground, reducing CO2 levels in the atmosphere.',
  },
};

export const RockWeatheringSection = forwardRef<HTMLDivElement, {}>(function (_, ref) {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
  const [modalType, setModalType] = useState<
    | null
    | 'freeze/thaw'
    | 'gravity'
    | 'wind abrasion'
    | 'root expansion'
    | 'carbonic acid'
    | 'hydrolysis'
    | 'dissolution'
    | 'oxidation-reduction'
    | 'fauna'
    | 'roots'
    | 'microbes'
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
    const freezeThawSvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_32') as SVGGElement | null;
    const gravitySvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_33') as SVGGElement | null;
    const windAbrasionSvg = sectionContainer.querySelector(
      '#rock_weathering_table_svg__Layer_34'
    ) as SVGGElement | null;
    const rootExpansionSvg = sectionContainer.querySelector(
      '#rock_weathering_table_svg__Layer_35'
    ) as SVGGElement | null;
    const carbonicAcidSvg = sectionContainer.querySelector(
      '#rock_weathering_table_svg__Layer_36'
    ) as SVGGElement | null;
    const hydrolysisSvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_37') as SVGGElement | null;
    const dissolutionSvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_38') as SVGGElement | null;
    const oxidationReductionSvg = sectionContainer.querySelector(
      '#rock_weathering_table_svg__Layer_39'
    ) as SVGGElement | null;
    const microbesSvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_40') as SVGGElement | null;
    const rootsSvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_41') as SVGGElement | null;
    const faunaSvg = sectionContainer.querySelector('#rock_weathering_table_svg__Layer_42') as SVGGElement | null;

    freezeThawSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    freezeThawSvg?.addEventListener('click', handleOpenModal('freeze/thaw'));
    gravitySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    gravitySvg?.addEventListener('click', handleOpenModal('gravity'));
    windAbrasionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    windAbrasionSvg?.addEventListener('click', handleOpenModal('wind abrasion'));
    rootExpansionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    rootExpansionSvg?.addEventListener('click', handleOpenModal('root expansion'));
    faunaSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    faunaSvg?.addEventListener('click', handleOpenModal('fauna'));
    carbonicAcidSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    carbonicAcidSvg?.addEventListener('click', handleOpenModal('carbonic acid'));
    hydrolysisSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    hydrolysisSvg?.addEventListener('click', handleOpenModal('hydrolysis'));
    dissolutionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    dissolutionSvg?.addEventListener('click', handleOpenModal('dissolution'));
    oxidationReductionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    oxidationReductionSvg?.addEventListener('click', handleOpenModal('oxidation-reduction'));
    microbesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    microbesSvg?.addEventListener('click', handleOpenModal('microbes'));
    rootsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    rootsSvg?.addEventListener('click', handleOpenModal('roots'));

    return () => {
      freezeThawSvg?.removeEventListener('click', handleOpenModal('freeze/thaw'));
      gravitySvg?.removeEventListener('click', handleOpenModal('gravity'));
      windAbrasionSvg?.removeEventListener('click', handleOpenModal('wind abrasion'));
      rootExpansionSvg?.removeEventListener('click', handleOpenModal('root expansion'));
      faunaSvg?.removeEventListener('click', handleOpenModal('fauna'));
      carbonicAcidSvg?.removeEventListener('click', handleOpenModal('carbonic acid'));
      hydrolysisSvg?.removeEventListener('click', handleOpenModal('hydrolysis'));
      dissolutionSvg?.removeEventListener('click', handleOpenModal('dissolution'));
      oxidationReductionSvg?.removeEventListener('click', handleOpenModal('oxidation-reduction'));
      microbesSvg?.removeEventListener('click', handleOpenModal('microbes'));
      rootsSvg?.removeEventListener('click', handleOpenModal('roots'));
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
        className='py-8 sm:py-16'
      >
        <div className='space-y-8'>
          <div className='flex'>
            <div className='space-y-4'>
              <Text type='h1' weight='bold' size='3xl' className='text-pink-500'>
                rock weathering
              </Text>
              <Text type='p' weight='light' size='md'>
                over time, through a combination of physical, biological, and chemical processes, rocks break down into
                smaller and smaller pieces.
              </Text>
            </div>
            <RockWeathering height='189px' />
          </div>
          <RockWeatheringTable />
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
              height: '200px',
              width: isMobile ? '100%' : '500px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          {
            modalTypeMap[modalType].isSimple ? (
              <Text type='p' weight='bold' size='2xs'>
                {modalTypeMap[modalType].title}{' '}
                <Text type='span' weight='light' size='2xs'>
                  {modalTypeMap[modalType].text}
                </Text>
              </Text>
            ) : 'image' in modalTypeMap[modalType] ? (
              // @ts-ignore
              <img src={modalTypeMap[modalType]?.image} />
            ) : null
            // <div className="space-y-4">
            //   <Text type='h1' weight='bold' size='md' className="text-pink-500">
            //     {modalTypeMap[modalType].title}
            //   </Text>
            //   <Text type='p' weight='light' size='sm'>
            //     {modalTypeMap[modalType].text}
            //   </Text>
            // </div>
          }
        </ReactModal>
      )}
    </>
  );
});
