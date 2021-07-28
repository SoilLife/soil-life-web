import React, { useEffect, useRef, useState } from 'react';

// components
import ReactFullpage from '@fullpage/react-fullpage';
import { Section, Slide, Image, Icon, Modal } from 'design-system/atoms';
import { MediaHub } from 'design-system/templates/media-hub';
import { Footer } from 'design-system/templates';
import ReactPlayer from 'react-player';
import { MobileNavMenu } from 'design-system/templates/mobile-nav-menu';
import { VisGraph } from 'design-system/components';

// data
import { webOfSoilSubheadings } from 'data/main-headings';

// helpers
import { DefaultLayout } from 'layouts';
import { useMediaHub } from 'helpers/use-media-hub';
import { useWebOfSoils } from 'helpers/use-web-of-soil';

const options = {
  autoResize: true,
  layout: {
    hierarchical: false,
  },
  nodes: {
    size: 30,
  },
  edges: {
    color: '#000000',
  },
  height: '100%',
  width: '100%',
};

const events = {
  select: function (event: any) {
    const { nodes, edges } = event;
    console.log({ nodes, edges });
  },
};

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
const videos = {
  food: 'https://www.youtube.com/watch?v=z8PAU3sAtPA',
  fiber: 'https://www.youtube.com/watch?v=QNrw3BHU_jc',
  filter: 'https://www.youtube.com/watch?v=rzeRZ-bqC20',
  foundation: 'https://www.youtube.com/watch?v=lu_pgydBJ74',
  farmaceutical: 'https://www.youtube.com/watch?v=X-CiZOK4zDg',
  fun: 'https://www.youtube.com/watch?v=CNhTMh6uZ2o',
};

export default function WebOfSoilPage() {
  const [activeHeader, setActiveHeader] = useState<
    'food' | 'fiber' | 'filter' | 'foundation' | 'farmaceutical' | 'fun'
  >('food');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState<HTMLDivElement[]>([]);
  const fullPageRef = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);
  const { media } = useMediaHub();
  const { graph: foodGraph } = useWebOfSoils('food data structure');
  const { graph: fiberGraph } = useWebOfSoils('fiber data structure');
  const { graph: filterGraph } = useWebOfSoils('filter data structure');
  const { graph: foundationsGraph } = useWebOfSoils('foundations data structure');
  const { graph: farmaceuticalGraph } = useWebOfSoils('farmaceuticals data structure');

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

  function handleOpenModal() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(false);
    }
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(true);
    }
    setIsModalOpen(false);
  }

  return (
    <>
      <DefaultLayout>
        <header
          className={`fixed z-20 w-full transition-all ease-in-out duration-200 ${getBgColorFromActiveHeader(
            activeHeader
          )} ${!hideHeader ? 'top-0' : '-top-24'}`}
        >
          <ul className={`container flex justify-between items-center h-10 sm:h-16`}>
            <li>
              <Icon
                icon={isMenuOpen ? 'x' : 'menu'}
                size='20'
                className='text-white cursor-pointer h-8 w-8'
                onClick={toggleMenu}
              />
            </li>
            {webOfSoilSubheadings.map(({ name, asset }) => (
              <li key={name} title={name} onClick={handleHeaderClick(name as typeof activeHeader)}>
                <img
                  src={asset}
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    name === activeHeader ? 'rounded-full bg-gray-500 ring-2 ring-white' : 'cursor-pointer'
                  }`}
                />
              </li>
            ))}
          </ul>
        </header>
        <MobileNavMenu isMenuOpen={isMenuOpen} />
        <ReactFullpage
          ref={fullPageRef}
          licenseKey={null}
          scrollingSpeed={500}
          controlArrows={false}
          verticalCentered={false}
          navigation
          showActiveTooltip
          slidesNavigation
          loading='lazy'
          onLeave={handleSectionLeave}
          onSlideLeave={handleSlideLeave}
          normalScrollElements={'.media-hub__scroll__container, .viz-graph'}
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
                        <button
                          className='bg-white shadow font-acre-regular text-[24px] text-pink-500 py-2 px-5'
                          onClick={handleOpenModal}
                        >
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
                        natural? synthetic? paper or plastic? from clothing to accessories to wood and oil, all that
                        warms and protects us, starts in the soil.
                      </p>
                      <div className='mt-10 flex justify-center'>
                        <button
                          className='bg-white shadow font-acre-regular text-[24px] text-yellow-500 py-2 px-5'
                          onClick={handleOpenModal}
                        >
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
                        soils are the lungs and liver of the earth, removing contaminants from the air we breathe and
                        the water we drink, free of charge!
                      </p>
                      <div className='mt-10 flex justify-center'>
                        <button
                          className='bg-white shadow font-acre-regular text-[24px] text-blue-500 py-2 px-5'
                          onClick={handleOpenModal}
                        >
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
                          <button
                            className='bg-white shadow font-acre-regular text-[24px] text-gray-500 py-2 px-5'
                            onClick={handleOpenModal}
                          >
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
                        <button
                          className='bg-white shadow font-acre-regular text-[24px] text-orange-500 py-2 px-5'
                          onClick={handleOpenModal}
                        >
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
                          <button
                            className='bg-white shadow font-acre-regular text-[24px] text-teal-500 py-2 px-5'
                            onClick={handleOpenModal}
                          >
                            watch the video
                          </button>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </Section>

                <Section>
                  <Slide>
                    <VisGraph graph={foodGraph} options={options} events={events} />
                  </Slide>
                  <Slide>
                    <VisGraph graph={fiberGraph} options={options} events={events} />
                  </Slide>
                  <Slide>
                    <VisGraph graph={filterGraph} options={options} events={events} />
                  </Slide>
                  <Slide>
                    <VisGraph graph={foundationsGraph} options={options} events={events} />
                  </Slide>
                  <Slide>
                    <VisGraph graph={farmaceuticalGraph} options={options} events={events} />
                  </Slide>
                  <Slide>
                    <div />
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
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal} slides={{ count: 1, activeSlideIndex: 0 }}>
        <div className='aspect-h-9 aspect-w-16'>
          <ReactPlayer
            controls={true}
            key={activeHeader}
            height={'90%'}
            width={'90%'}
            url={videos[activeHeader]}
            style={{
              margin: '0 auto',
            }}
          />
        </div>
      </Modal>
    </>
  );
}
