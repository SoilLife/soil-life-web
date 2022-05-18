import { useState, useRef, useEffect } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text, Icon } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

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
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const [popup, setPopup] = useState<null | keyof typeof popupMap>(null);

  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    function showPopup(type: typeof popup) {
      return () => {
        setPopup(type);
      };
    }

    const modalSvgs: [string, typeof modalType][] = [
      ['#rock_weathering_table_svg__Layer_36', 'carbonic acid'],
      ['#rock_weathering_table_svg__Layer_37', 'hydrolysis'],
      ['#rock_weathering_table_svg__Layer_38', 'dissolution'],
      ['#rock_weathering_table_svg__Layer_39', 'oxidation-reduction'],
    ];
    const popupSvgs: [string, typeof popup][] = [
      ['#rock_weathering_table_svg__Layer_32', 'freeze/thaw'],
      ['#rock_weathering_table_svg__Layer_33', 'gravity'],
      ['#rock_weathering_table_svg__Layer_34', 'wind abrasion'],
      ['#rock_weathering_table_svg__Layer_35', 'root expansion'],
      ['#rock_weathering_table_svg__Layer_40', 'microbes'],
      ['#rock_weathering_table_svg__Layer_41', 'roots'],
      ['#rock_weathering_table_svg__Layer_42', 'fauna'],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveModalSvgs = modalSvgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    const interactivePopSvgs = popupSvgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: showPopup(type),
        onKeydown: showPopup(type),
        ariaLabel: `show ${type} popup`,
      })
    );

    return () => {
      interactiveModalSvgs.forEach((svg) => svg?.unmount());
      interactivePopSvgs.forEach((svg) => svg?.unmount());
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
          <Text
            id='rock-weathering'
            type='h1'
            weight='bold'
            size='4xl'
            color='pink'
            className={`sm:col-span-3 ${styles['anchor']} ${styles['heading']}`}
          >
            rock weathering
          </Text>
          <div className='sm:row-span-2'>
            <RockWeathering className='mx-auto max-h-[189px]' />
          </div>
          <Text type='p' weight='light' size='md' className={`sm:col-span-3 ${styles['p-60']}`}>
            through a combination of physical, biological, and chemical processes, rocks break down into
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
        <FullImage
          image={{
            type: 'img',
            url: modalTypeMap[modalType].image,
          }}
          onClose={handleCloseModal}
        />
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
