import React, { useState, useRef, useEffect } from 'react';

// helpers
import { useMedia } from 'react-use';
import { useFullpageOverflow } from 'helpers/use-fullpage-overflow';

// components
import ReactModal from 'react-modal';
import { Text, Icon } from 'design-system/atoms';

// interfaces
import { TextProps } from 'design-system/atoms/text/text.interfaces';

// assets
import LeftArrow from 'public/images/left_arrow_pink_thick.svg';
import RightArrow from 'public/images/right_arrow_pink_thick.svg';
import SoilProcessesSvg from 'public/images/soil-101/nexus/soil_processes.svg';
import AdditionsSvg from 'public/images/soil-101/nexus/additions.svg';
import LossesSvg from 'public/images/soil-101/nexus/losses.svg';
import TransformationsSvg from 'public/images/soil-101/nexus/transformations.svg';
import TranslocationsSvg from 'public/images/soil-101/nexus/translocations.svg';

import styles from '../soil-101.module.css';

const processes: { title: string; text1: string; text2: string; color: TextProps['color'] }[] = [
  {
    title: 'additions',
    text1: 'rain/flooding, dust, animal',
    text2: 'and plant residues, fertilizers',
    color: 'pink',
  },
  {
    title: 'losses',
    text1: 'erosion/runoff, leaching,',
    text2: 'metabolism, volatilization',
    color: 'teal',
  },
  {
    title: 'translocations',
    text1: 'gravity/water, evaporation of',
    text2: 'salts, mixing by organisms',
    color: 'yellow',
  },
  {
    title: 'transformations',
    text1: 'decomposition of residues,',
    text2: 'weathering of rocks to clay, iron oxidation',
    color: 'blue',
  },
];

const modalTypeMap = {
  additions: <AdditionsSvg className='w-full' />,
  losses: <LossesSvg className='w-full' />,
  transformations: <TransformationsSvg className='w-full' />,
  translocations: <TranslocationsSvg className='w-full' />,
};

export const ProcessesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  useFullpageOverflow();
  const isMobile = useMedia('(max-width: 640px)');
  const [modalType, setModalType] = useState<null | 'additions' | 'losses' | 'transformations' | 'translocations'>(
    null
  );
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
    const additionsSvg = sectionContainer.querySelector('#soil_processes_svg__Layer_83') as SVGGElement | null;
    const lossesSvg = sectionContainer.querySelector('#soil_processes_svg__Layer_84') as SVGGElement | null;
    const transformationsSvg = sectionContainer.querySelector('#soil_processes_svg__Layer_85') as SVGGElement | null;
    const translocationSvg = sectionContainer.querySelector('#soil_processes_svg__Layer_86') as SVGGElement | null;

    additionsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    additionsSvg?.addEventListener('click', handleOpenModal('additions'));
    lossesSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    lossesSvg?.addEventListener('click', handleOpenModal('losses'));
    transformationsSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    transformationsSvg?.addEventListener('click', handleOpenModal('transformations'));
    translocationSvg?.classList?.add('cursor-pointer', 'hover:opacity-50', 'active:opacity-100');
    translocationSvg?.addEventListener('click', handleOpenModal('translocations'));

    return () => {
      additionsSvg?.removeEventListener('click', handleOpenModal('additions'));
      lossesSvg?.removeEventListener('click', handleOpenModal('losses'));
      transformationsSvg?.removeEventListener('click', handleOpenModal('transformations'));
      translocationSvg?.removeEventListener('click', handleOpenModal('translocations'));
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  }

  function handlePreviousProcessClick() {
    const index = processes.findIndex((process) => process.title === modalType);
    if (index === 0) {
      setModalType('translocations');
    } else if (index != -1) {
      const previousIndex = index - 1;
      setModalType(processes[previousIndex]?.title as typeof modalType);
    }
  }

  function handleNextProcessClick() {
    const index = processes.findIndex((process) => process.title === modalType);
    if (index === processes.length - 1) {
      setModalType('additions');
    } else if (index != -1) {
      const nextIndex = index + 1;
      setModalType(processes[nextIndex]?.title as typeof modalType);
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
        <Text type='h1' weight='bold' size='5xl' color='pink' className={styles['heading']}>
          soil processes
        </Text>
        <div className='grid sm:grid-cols-2'>
          <div className='row-start-2 sm:row-start-auto'>
            <ul className='grid grid-cols-2 gap-4 sm:grid-cols-none'>
              {processes.map((process) => (
                <li key={process.title}>
                  <div
                    className='inline-block'
                    onClick={() => {
                      setModalType(process.title as typeof modalType);
                    }}
                  >
                    <Text
                      type='p'
                      weight='medium'
                      size='lg'
                      color={process.color}
                      className={`hover:underline hover:cursor-pointer ${styles['p-48']}`}
                    >
                      {process.title}:
                    </Text>
                  </div>
                  <Text type='p' weight='light' size='md' className={styles['p-48']}>
                    {process.text1}
                  </Text>
                  <Text type='p' weight='light' size='md' className={styles['p-48']}>
                    {process.text2}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <SoilProcessesSvg className='row-start-1 sm:row-start-auto' />
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
              inset: isMobile ? '40px 0 0 0' : '10%',
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
            <Icon icon='x' size={32} className='text-pink-500' />
          </button>
          <div className='w-full overflow-x-auto overflow-y-hidden mb-6 sm:mb-10'>
            <ul className='flex flex-nowrap'>
              {processes.map((process) => (
                <li key={process.title} className='sm:flex-grow sm:w-full'>
                  <button
                    className={`${process.title === modalType ? 'bg-teal-700' : 'bg-teal-500'} w-full p-4`}
                    onClick={() => {
                      if (modalType !== process.title) {
                        setModalType(process.title as typeof modalType);
                      }
                    }}
                  >
                    <Text type='h3' weight='light' size='xs' color='white' className='whitespace-nowrap'>
                      {process.title}
                    </Text>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {modalTypeMap[modalType]}

          <LeftArrow
            className='absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer'
            height={40}
            onClick={handlePreviousProcessClick}
          />
          <RightArrow
            className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
            height={40}
            onClick={handleNextProcessClick}
          />
        </ReactModal>
      )}
    </>
  );
};
