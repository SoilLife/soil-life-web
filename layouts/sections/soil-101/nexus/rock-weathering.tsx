import { useState, useRef, useEffect } from 'react';

// helpers
import { useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import ReactModal from 'react-modal';
import { Text, Icon } from 'design-system/atoms';

// assets
import RockWeathering from 'public/images/soil-101/nexus/rock_weathering.svg';
import RockWeatheringTable from 'public/images/soil-101/nexus/rock_weathering_table.svg';
import styles from '../soil-101.module.css';

const modalTypeMap = {
  hydrolysis: {
    title: 'hydrolysis:',
    image: '/images/soil-101/nexus/hydrolysis.svg',
  },
  'carbonic acid': {
    title: 'carbonic acid weathering',
    image: '/images/soil-101/nexus/carbonic_acid.svg',
  },
  dissolution: {
    title: 'dissolution',
    image: '/images/soil-101/nexus/dissolution.svg',
  },
  'oxidation-reduction': {
    title: 'oxidation-reduction:',
    image: '/images/soil-101/nexus/oxidation_reduction.svg',
  },
};

const popupMap = {
  'freeze/thaw': {
    title: 'freeze/thaw',
    text: 'water that enters cracks in rocks can break them apart when it freezes and expands',
    className: 'max-w-[495px] top-[40%]',
  },
  gravity: {
    title: 'gravity',
    text: 'gravity moves materials downslope. as they knock into eachother rocks break down',
    className: 'max-w-[506px] top-[40%] left-[10%]',
  },
  'wind abrasion': {
    title: 'wind abrasion',
    text: 'water that enters cracks in rocks can break them apart when it freezes and expands',
    className: 'max-w-[581px] top-[40%] left-[20%]',
  },
  'root expansion': {
    title: 'root (physical)',
    text: 'as roots grow they exert an immense amount of pressure on the materials around them -- enough to break apart solid rock',
    className: 'max-w-[598px] top-[40%] left-[20%]',
  },
  fauna: {
    title: 'fauna',
    text: 'the wastes and decomposing bodies of living things produce acids that can weather rocks.',
    className: 'max-w-[450px] top-[40%] right-0',
  },
  roots: {
    title: 'roots (biochemical)',
    text: 'roots release CO2, which can turn into an acid, and other acids that chemically weather rocks.',
    className: 'max-w-[450px] top-[60%] right-0',
  },
  microbes: {
    title: 'microbes',
    text: 'microbes also release CO2 and organic acids that weather rocks. a symbiosis of bacteria and fungi, known as lichen, plays a major role in rock weathering on earth.',
    className: 'max-w-[628px] top-[80%] right-0',
  },
};

export const RockWeatheringSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);

  const [popup, setPopup] = useState<null | keyof typeof popupMap>(null);

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

    function handlePopup(type: typeof popup) {
      return (_e: MouseEvent) => {
        setPopup((p) => (p === type ? null : type));
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
    freezeThawSvg?.addEventListener('click', handlePopup('freeze/thaw'));
    gravitySvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    gravitySvg?.addEventListener('click', handlePopup('gravity'));
    windAbrasionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    windAbrasionSvg?.addEventListener('click', handlePopup('wind abrasion'));
    rootExpansionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    rootExpansionSvg?.addEventListener('click', handlePopup('root expansion'));
    faunaSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    faunaSvg?.addEventListener('click', handlePopup('fauna'));
    microbesSvg?.addEventListener('click', handlePopup('microbes'));
    rootsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    rootsSvg?.addEventListener('click', handlePopup('roots'));

    carbonicAcidSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    carbonicAcidSvg?.addEventListener('click', handleOpenModal('carbonic acid'));
    hydrolysisSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    hydrolysisSvg?.addEventListener('click', handleOpenModal('hydrolysis'));
    dissolutionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    dissolutionSvg?.addEventListener('click', handleOpenModal('dissolution'));
    oxidationReductionSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    oxidationReductionSvg?.addEventListener('click', handleOpenModal('oxidation-reduction'));
    microbesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');

    return () => {
      freezeThawSvg?.removeEventListener('click', handlePopup('freeze/thaw'));
      gravitySvg?.removeEventListener('click', handlePopup('gravity'));
      windAbrasionSvg?.removeEventListener('click', handlePopup('wind abrasion'));
      rootExpansionSvg?.removeEventListener('click', handlePopup('root expansion'));
      faunaSvg?.removeEventListener('click', handlePopup('fauna'));
      microbesSvg?.removeEventListener('click', handlePopup('microbes'));
      rootsSvg?.removeEventListener('click', handlePopup('roots'));

      carbonicAcidSvg?.removeEventListener('click', handleOpenModal('carbonic acid'));
      hydrolysisSvg?.removeEventListener('click', handleOpenModal('hydrolysis'));
      dissolutionSvg?.removeEventListener('click', handleOpenModal('dissolution'));
      oxidationReductionSvg?.removeEventListener('click', handleOpenModal('oxidation-reduction'));
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
          props.assignRef(el);
          sectionRef.current = el;
        }}
        className={styles['section']}
      >
        <div className='grid gap-4 sm:grid-cols-4'>
          <Text type='h1' weight='bold' size='4xl' color='pink' className={`sm:col-span-3 ${styles['heading']}`}>
            rock weathering
          </Text>
          <div className='sm:row-span-2'>
            <RockWeathering className='mx-auto h-[189px]' />
          </div>
          <Text type='p' weight='light' size='md' className={`sm:col-span-3 ${styles['p-60']}`}>
            over time, through a combination of physical, biological, and chemical processes, rocks break down into
            smaller and smaller pieces.
          </Text>
        </div>
        <div className='relative'>
          <RockWeatheringTable />
          {popup && (
            <Popup
              {...popupMap[popup]}
              onClick={() => {
                setPopup(null);
              }}
            />
          )}
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
              height: '100%',
              width: '100%',
              top: isMobile ? '40px' : '64px',
              right: 'auto',
              bottom: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
            overlay: {
              zIndex: 2,
            },
          }}
          onRequestClose={handleCloseModal}
        >
          <button className='absolute top-4 right-4' onClick={handleCloseModal}>
            <Icon icon='x' size={32} className='text-gray-500' />
          </button>
          <img src={modalTypeMap[modalType].image as string} className='h-full w-full max-h-[80vh] object-contain' />
        </ReactModal>
      )}
    </>
  );
};

function Popup({
  title,
  text,
  className,
  onClick,
}: {
  title: string;
  text: string;
  onClick: () => void;
  className: string;
}) {
  return (
    <div className={`py-8 px-12 absolute top-0 bg-white shadow-xl ${className}`}>
      <button onClick={onClick}>
        <Icon icon='x' size={24} className='absolute top-4 left-4 text-gray-500 opacity-50' />
      </button>
      <Text type='p' weight='bold' size='sm' style={{ lineHeight: '32px' }}>
        {title}:{' '}
        <Text type='span' weight='light' size='sm'>
          {text}
        </Text>
      </Text>
    </div>
  );
}
