import React, { useEffect, useRef, useState } from 'react';

// components
import ReactFullpage from '@fullpage/react-fullpage';
import Link from 'next/link';
import { Section, Slide, Image, Icon } from 'design-system/atoms';
import { MediaHub } from 'design-system/templates/media-hub';
import { Footer } from 'design-system/templates';

// data
import { webOfSoilSubheadings } from 'data/main-headings';

// helpers
import { createNavLinks } from 'design-system/templates/home-header';
import { DefaultLayout } from 'layouts';
import { useMediaHub } from 'helpers/use-media-hub';

// interfaces
function getBgColorFromActiveHeader(header: 'food' | 'fiber' | 'filter' | 'foundation' | 'farmaceutical' | 'fun') {
  switch (header) {
    case 'food':
      return 'bg-pink-500';
    case 'fiber':
      return 'bg-yellow-500';
    case 'filter':
      return 'bg-blue-500';
    case 'foundation':
      return 'bg-gray-500';
    case 'farmaceutical':
      return 'bg-orange-500';
    case 'fun':
      return 'bg-teal-500';
  }
}

const showSections = ['video', 'infographic', 'educational video'];

export default function WebOfSoilPage() {
  const [activeHeader, setActiveHeader] = useState<
    'food' | 'fiber' | 'filter' | 'foundation' | 'farmaceutical' | 'fun'
  >('food');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState<HTMLDivElement[]>([]);
  const fullPageRef = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);
  const { media } = useMediaHub();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section')) as HTMLDivElement[];
    setSections(sections);
  }, []);

  const handleSectionLeave = (_origin: any, _destination: any, direction: 'up' | 'down') => {
    if (direction === 'up' && hideHeader) {
      setHideHeader(false);
    } else if (direction === 'down' && !hideHeader) {
      setHideHeader(true);
    }
  };

  function handleHeaderClick(header: typeof activeHeader) {
    return () => {
      for (const section of sections) {
        const anchors = Array.from(section.querySelectorAll('.fp-slidesNav a')) as HTMLAnchorElement[];
        if (anchors.length) {
          switch (header) {
            case 'food':
              anchors[0]?.click();
              break;
            case 'fiber':
              anchors[1]?.click();
              break;
            case 'filter':
              anchors[2]?.click();
              break;
            case 'foundation':
              anchors[3]?.click();
              break;
            case 'farmaceutical':
              anchors[4]?.click();
              break;
            case 'fun':
              anchors[5]?.click();
              break;
            default:
              anchors[0]?.click();
              break;
          }
        }
      }

      setActiveHeader(header);
    };
  }

  function toggleMenu() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(isMenuOpen);
    }
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSlideLeave(_section: any, _origin: any, destination: any, _direction: any) {
    const index = destination.index;
    switch (true) {
      case index === 0:
        handleHeaderClick('food')();
        break;
      case index === 1:
        handleHeaderClick('fiber')();
        break;
      case index === 2:
        handleHeaderClick('filter')();
        break;
      case index === 3:
        handleHeaderClick('foundation')();
        break;
      case index === 4:
        handleHeaderClick('farmaceutical')();
        break;
      case index === 5:
        handleHeaderClick('fun')();
        break;
      default:
        handleHeaderClick('food')();
        break;
    }
  }

  return (
    <DefaultLayout>
      <header
        className={`fixed z-10 w-full transition-all ease-in-out duration-200 ${!hideHeader ? 'top-0' : '-top-24'}`}
      >
        <ul className={`container h-16 flex justify-between items-center ${getBgColorFromActiveHeader(activeHeader)}`}>
          <li>
            <Icon icon='menu' size='20' className='text-white cursor-pointer h-8 w-8' onClick={toggleMenu} />
          </li>
          {webOfSoilSubheadings.map(({ name, asset }) => (
            <li key={name} title={name} onClick={handleHeaderClick(name as typeof activeHeader)}>
              <img
                src={asset}
                height={50}
                width={50}
                className={name === activeHeader ? 'rounded-full bg-gray-500 ring-2 ring-white' : 'cursor-pointer'}
              />
            </li>
          ))}
        </ul>
        <div
          className={`fixed w-full h-full top-0 max-w-xs bg-white p-4 z-30 transition-all duration-100 ease-in-out transform shadow-lg ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <a className='relative flex items-center space-x-4'>
                <img src='/images/logo.svg' className='h-[56px]' style={{ height: 56 }} />
                <h1 className='text-4xl font-acre-regular'>Soil Life</h1>
              </a>
            </Link>
            <Icon icon='x' onClick={toggleMenu} size='20' className='cursor-pointer h-8 w-8' />
          </div>
          <ul className='mt-10 space-y-6'>{createNavLinks()}</ul>
        </div>
        {isMenuOpen && <div className='bg-gray-900 bg-opacity-25 fixed top-0 left-0 h-full w-full z-20' />}
      </header>
      <ReactFullpage
        ref={fullPageRef}
        licenseKey={null}
        scrollingSpeed={500}
        controlArrows={false}
        verticalCentered={false}
        navigation
        showActiveTooltip
        slidesNavigation
        interlockedSlides
        loading='lazy'
        onLeave={handleSectionLeave}
        onSlideLeave={handleSlideLeave}
        normalScrollElements={'.media-hub__scroll__container'}
        render={() => {
          return (
            <>
              <Section>
                <Slide className='relative'>
                  <Image className='object-cover' url='/6Fs/brooke-lark-08bOYnH_r_E-unsplash_Nsw5XgGxU.jpg' />
                  <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 max-w-[566px]'>
                    <img className='relative -left-10 h-[241px] w-[241px]' src='/images/web-of-soil/icon-food.png' />
                    <p className='font-acre-regular text-[36px]'>
                      whether it is a plant that grew in it or an animal that grew from plants, 95% of all food can be
                      traced back to soil!
                    </p>
                    <div className='mt-10 flex justify-center'>
                      <button className='bg-white shadow font-acre-regular text-[24px] text-pink-500 py-2 px-5'>
                        watch the video
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide className='relative'>
                  <Image className='object-cover' url='/6Fs/Fiber_Slide_NkVYdxIN7-t.jpg' />
                  <div className='absolute top-1/2 right-1/2 transform -translate-y-1/2 max-w-[566px]'>
                    <img className='relative -left-10 h-[241px] w-[241px]' src='/images/web-of-soil/icon-fiber.png' />
                    <p className='font-acre-regular text-[36px]'>
                      natural? synthetic? paper or plastic? from clothing to accessories to wood and oil, all that warms
                      and protects us, starts in the soil.
                    </p>
                    <div className='mt-10 flex justify-center'>
                      <button className='bg-white shadow font-acre-regular text-[24px] text-yellow-500 py-2 px-5'>
                        watch the video
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide className='relative'>
                  <Image className='object-cover' url='/6Fs/Filter_zylk3NyhU.jpg' transformation={[{ rotate: 90 }]} />
                  <div className='text-center absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-[886px]'>
                    <img className='mx-auto h-[241px] w-[241px]' src='/images/web-of-soil/icon-filter.png' />
                    <p className='font-acre-regular text-[36px]'>
                      soils are the lungs and liver of the earth, removing contaminants from the air we breathe and the
                      water we drink, free of charge!
                    </p>
                    <div className='mt-10 flex justify-center'>
                      <button className='bg-white shadow font-acre-regular text-[24px] text-blue-500 py-2 px-5'>
                        watch the video
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide className='relative'>
                  <Image className='object-cover' url='/6Fs/Foundation_sl5IYmaDB.jpg' />
                  <div className='flex items-center justify-center absolute w-full top-1/2 transform -translate-y-3/4'>
                    <img className='h-[241px] w-[241px]' src='/images/web-of-soil/icon-foundation.png' />
                    <div className='w-[760px]'>
                      <p className='font-acre-regular text-[36px] text-white'>
                        the base of our economy, the base of food webs, and the physical base of our cities, soils are
                        literally the foundation for life and civilization—past and present!
                      </p>
                      <div className='mt-10 flex justify-center'>
                        <button className='bg-white shadow font-acre-regular text-[24px] text-gray-500 py-2 px-5'>
                          watch the video
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className='relative'>
                  <Image className='object-cover' url='/6Fs/cup_of_pills_ioFvZZ0lo.png' />
                  <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/4 max-w-[767px]'>
                    <img
                      className='relative -left-10 h-[241px] w-[241px]'
                      src='/images/web-of-soil/icon-farmaceutical.png'
                    />
                    <p className='font-acre-regular text-[36px]'>
                      soils are home to the plants, fungi, & bacteria that produce most of the world’s medicine — and
                      ~98% of the microbes that inhabit it are yet to be discovered!
                    </p>
                    <div className='mt-10 flex justify-center'>
                      <button className='bg-white shadow font-acre-regular text-[24px] text-orange-500 py-2 px-5'>
                        watch the video
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide className='relative'>
                  <Image className='object-cover' url='/6Fs/Fun_XHWRw699s.jpg' />
                  <div className='flex items-center justify-center absolute w-full bottom-1/4 transform'>
                    <img className='h-[241px] w-[241px]' src='/images/web-of-soil/icon-fun.png' />
                    <div className='w-[760px]'>
                      <p className='font-acre-regular text-[36px]'>
                        from paints and pottery to playing fields and parks, soils provide the grounds for music,
                        sports, and art!
                      </p>
                      <div className='mt-10 flex justify-center'>
                        <button className='bg-white shadow font-acre-regular text-[24px] text-teal-500 py-2 px-5'>
                          watch the video
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Section>

              <Section>
                <Slide>
                  <MediaHub
                    compact
                    className='h-full flex flex-col justify-center'
                    media={media}
                    filters={['food']}
                    showSections={showSections}
                  />
                </Slide>
                <Slide>
                  <MediaHub
                    compact
                    className='h-full flex flex-col justify-center'
                    media={media}
                    filters={['fiber']}
                    showSections={showSections}
                  />
                </Slide>
                <Slide>
                  <MediaHub
                    compact
                    className='h-full flex flex-col justify-center'
                    media={media}
                    filters={['filter']}
                    showSections={showSections}
                  />
                </Slide>
                <Slide>
                  <MediaHub
                    compact
                    className='h-full flex flex-col justify-center'
                    media={media}
                    filters={['foundation']}
                    showSections={showSections}
                  />
                </Slide>
                <Slide>
                  <MediaHub
                    compact
                    className='h-full flex flex-col justify-center'
                    media={media}
                    filters={['farmaceuticals']}
                    showSections={showSections}
                  />
                </Slide>
                <Slide>
                  <MediaHub
                    compact
                    className='h-full flex flex-col justify-center'
                    media={media}
                    filters={['fun']}
                    showSections={showSections}
                  />
                </Slide>
              </Section>

              <Footer />
            </>
          );
        }}
      />
    </DefaultLayout>
  );
}
