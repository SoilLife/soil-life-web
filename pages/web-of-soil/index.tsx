import React, { useEffect, useRef, useState } from 'react';

// components
import { Footer, MediaHub, MobileNavMenu } from 'design-system/templates';
import { Section, Slide, Image, Icon, Modal, Text } from 'design-system/atoms';
import { VisGraph } from 'design-system/components';
import ReactFullpage from '@fullpage/react-fullpage';
import ReactPlayer from 'react-player';

// data
import { webOfSoilSubheadings } from 'data/main-headings';

// helpers
import { DefaultLayout } from 'layouts';
import { useMediaHub } from 'helpers/use-media-hub';
import { useWebOfSoils, Node, Edge } from 'helpers/use-web-of-soil';

const options = {
  autoResize: true,
  layout: {
    hierarchical: false,
  },
  nodes: {
    size: 30,
    borderWidth: 0,
    color: {
      border: 'rgb(91, 80, 82)',
      background: 'rgb(91, 80, 82)',
    },
    font: {
      color: 'rgb(91, 80, 82)',
    },
  },
  edges: {
    color: 'rgb(91, 80, 82)',
  },
  height: '100%',
  width: '100%',
};

// interfaces
function getBgColorFromActiveHeader(index: number) {
  switch (true) {
    case index === 0:
      return 'bg-pink-500';
    case index === 1:
      return 'bg-yellow-500';
    case index === 2:
      return 'bg-blue-500';
    case index === 3:
      return 'bg-gray-500';
    case index === 4:
      return 'bg-orange-500';
    case index === 5:
      return 'bg-teal-500';
    default:
      return 'bg-pink-500';
  }
}

const showSections = ['video', 'infographic', 'educational video'];
const videos = [
  'https://www.youtube.com/watch?v=z8PAU3sAtPA',
  'https://www.youtube.com/watch?v=QNrw3BHU_jc',
  'https://www.youtube.com/watch?v=rzeRZ-bqC20',
  'https://www.youtube.com/watch?v=lu_pgydBJ74',
  'https://www.youtube.com/watch?v=X-CiZOK4zDg',
  'https://www.youtube.com/watch?v=CNhTMh6uZ2o',
];

export default function WebOfSoilPage() {
  const [activeHeader, setActiveHeader] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isWebOfSoilMModalOpen, setIsWebOfSoilModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState<HTMLDivElement[]>([]);
  const fullPageRef = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [nodeSelections, setNodeSelections] = useState<Node[]>([]);
  const { media } = useMediaHub();
  const { graph: foodGraph } = useWebOfSoils('food data structure');
  const { graph: fiberGraph } = useWebOfSoils('fiber data structure');
  const { graph: filterGraph } = useWebOfSoils('filter data structure');
  const { graph: foundationsGraph } = useWebOfSoils('foundations data structure');
  const { graph: farmaceuticalGraph } = useWebOfSoils('farmaceuticals data structure');
  const { graph: funGraph } = useWebOfSoils('fun data structure');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section')) as HTMLDivElement[];
    setSections(sections);
    const fpNav = document.querySelector('#fp-nav') as HTMLDivElement;
    const fpSlidesNav = Array.from(document.querySelectorAll('.fp-slidesNav')) as HTMLDivElement[];
    if (fpNav) {
      fpNav.style.visibility = 'hidden';
    }
    if (fpSlidesNav.length) {
      for (const slideNav of fpSlidesNav) {
        slideNav.style.visibility = 'hidden';
      }
    }
  }, []);

  const handleSectionLeave = (_origin: any, _destination: any, direction: 'up' | 'down') => {
    if (direction === 'up' && hideHeader) {
      setHideHeader(false);
    } else if (direction === 'down' && !hideHeader) {
      setHideHeader(true);
    }
  };

  function handleHeaderClick(index: number) {
    return () => {
      for (const section of sections) {
        const anchors = Array.from(section.querySelectorAll('.fp-slidesNav a')) as HTMLAnchorElement[];
        if (anchors.length) {
          anchors[index]?.click();
        }
      }

      setActiveHeader(index);
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
    handleHeaderClick(index)();
  }

  function handleOpenModal() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(false);
    }
    setIsVideoModalOpen(true);
  }

  function handleCloseVideoModal() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(true);
    }
    setIsVideoModalOpen(false);
  }

  function handleOpenWebOfSoilModal() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(false);
    }
    setIsWebOfSoilModalOpen(true);
  }

  function handleCloseWebOfSoilModal() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.setAllowScrolling(true);
    }
    setNodeSelections([]);
    setIsWebOfSoilModalOpen(false);
  }

  function moveSlideLeft() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.moveSlideLeft();
    }
  }

  function moveSlideRight() {
    if (fullPageRef.current) {
      fullPageRef.current.fullpageApi.moveSlideRight();
    }
  }

  function SlideButtons({ leftImage, rightImage }: { leftImage: string; rightImage: string }) {
    return (
      <>
        <button
          className='hidden absolute left-0 top-1/2 transform -translate-y-1/2 lg:inline-block'
          onClick={moveSlideLeft}
        >
          <img src={leftImage} />
        </button>
        <button
          className='hidden absolute right-0 top-1/2 transform -translate-y-1/2 lg:inline-block'
          onClick={moveSlideRight}
        >
          <img src={rightImage} />
        </button>
      </>
    );
  }

  function handleGraphEvent(type: 'food' | 'filter' | 'fiber' | 'fun' | 'farmaceutical' | 'foundation') {
    return {
      select({ nodes }: { nodes: string[] }) {
        const graphs: { [Type in typeof type]: { nodes: Node[]; edges: Edge[] } } = {
          farmaceutical: farmaceuticalGraph,
          fiber: fiberGraph,
          filter: filterGraph,
          food: foodGraph,
          foundation: foundationsGraph,
          fun: funGraph,
        };
        const [id] = nodes;
        if (id) {
          const connectedNodes = graphs[type].nodes.filter((node) => node.to.includes(id));
          const selectedNode = graphs[type].nodes.find((node) => node.id === id);
          if (selectedNode) {
            const nodeSelections = [selectedNode, ...connectedNodes];
            setNodeSelections(nodeSelections);
          }
        }
        handleOpenWebOfSoilModal();
      },
    };
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
            {webOfSoilSubheadings.map(({ name, asset }, index) => (
              <li key={name} title={name} onClick={handleHeaderClick(index)}>
                <img
                  src={asset}
                  className={`h-8 w-8 sm:h-[50px] sm:w-[50px] ${
                    index === activeHeader ? 'rounded-full bg-gray-500 ring-2 ring-white' : 'cursor-pointer'
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
          slidesNavigation
          showActiveTooltip
          loading='lazy'
          onLeave={handleSectionLeave}
          onSlideLeave={handleSlideLeave}
          normalScrollElements={'.media-hub__scroll__container, .viz-graph'}
          render={() => {
            return (
              <>
                <Section>
                  <Slide>
                    <Image
                      className='object-cover object-center'
                      url='/6Fs/brooke-lark-08bOYnH_r_E-unsplash_Nsw5XgGxU.jpg'
                    />
                    <div
                      className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                     lg:block lg:p-0 lg:h-auto lg:w-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[566px]`}
                    >
                      <img
                        className='relative top-10 mx-auto h-[168px] w-[168px] lg:top-auto lg:mx-0 lg:-left-10 lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-food.png'
                      />
                      <Text
                        type='p'
                        weight='regular'
                        size='md'
                        className='bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0'
                      >
                        whether it is a plant that grew in it or an animal that grew from plants, 95% of all food can be
                        traced back to soil!
                      </Text>
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
                  <Slide>
                    <Image className='object-cover' url='/6Fs/Fiber_Slide_NkVYdxIN7-t.jpg' />
                    <div
                      className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                     lg:block lg:left-auto lg:p-0 lg:h-auto lg:w-auto lg:top-1/2 lg:right-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[566px]`}
                    >
                      <img
                        className='relative top-10 mx-auto h-[168px] w-[168px] lg:mx-0 lg:top-auto lg:-left-10 lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-fiber.png'
                      />
                      <Text
                        type='p'
                        weight='regular'
                        size='md'
                        className='bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0'
                      >
                        natural? synthetic? paper or plastic? from clothing to accessories to wood and oil, all that
                        warms and protects us, starts in the soil.
                      </Text>
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
                  <Slide>
                    <Image className='object-cover' url='/6Fs/Filter_zylk3NyhU.jpg' transformation={[{ rotate: 90 }]} />
                    <div
                      className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                    text-center lg:p-0 lg:h-auto lg:w-auto lg:block lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 lg:max-w-[886px]`}
                    >
                      <img
                        className='relative top-10 mx-auto h-[168px] w-[168px] lg:static lg:top-auto lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-filter.png'
                      />
                      <Text
                        type='p'
                        weight='regular'
                        size='md'
                        className='bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0'
                      >
                        soils are the lungs and liver of the earth, removing contaminants from the air we breathe and
                        the water we drink, free of charge!
                      </Text>
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
                  <Slide>
                    <Image className='object-cover' url='/6Fs/Foundation_sl5IYmaDB.jpg' />
                    <div
                      className='p-6 flex flex-col h-full w-full items-center justify-center absolute top-0 left-0
                    lg:p-0 lg:left-auto lg:flex-row lg:h-auto lg:top-1/2 lg:transform lg:-translate-y-3/4'
                    >
                      <img
                        className='relative top-10 h-[168px] w-[168px] lg:static lg:top-auto lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-foundation.png'
                      />
                      <div className='lg:w-[760px]'>
                        <Text
                          type='p'
                          weight='regular'
                          size='md'
                          className='bg-white rounded-lg p-6 max-w-md lg:max-w-none lg:bg-transparent lg:p-0 lg:text-white'
                        >
                          the base of our economy, the base of food webs, and the physical base of our cities, soils are
                          literally the foundation for life and civilization—past and present!
                        </Text>
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
                  <Slide>
                    <Image className='object-cover object-left' url='/6Fs/cup_of_pills_ioFvZZ0lo.png' />
                    <div
                      className={`p-6 flex flex-col h-full w-full items-center justify-center absolute top-0 left-0
                    lg:p-0 lg:block lg:h-auto lg:w-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/4 lg:max-w-[767px]`}
                    >
                      <img
                        className='relative top-10 h-[168px] w-[168px] lg:-left-10 lg:top-auto lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-farmaceutical.png'
                      />
                      <Text
                        type='p'
                        weight='regular'
                        size='md'
                        className='bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0'
                      >
                        soils are home to the plants, fungi, & bacteria that produce most of the world’s medicine — and
                        ~98% of the microbes that inhabit it are yet to be discovered!
                      </Text>
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
                  <Slide>
                    <Image className='object-cover' url='/6Fs/Fun_XHWRw699s.jpg' />
                    <div
                      className={`p-6 flex flex-col items-center justify-center h-full w-full absolute top-0 left-0
                   lg:p-0 lg:h-auto lg:left-auto lg:top-auto lg:flex-row lg:bottom-1/4`}
                    >
                      <img
                        className='relative top-10 h-[168px] w-[168px] lg:top-auto lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-fun.png'
                      />
                      <div className='lg:w-[760px]'>
                        <Text
                          type='p'
                          weight='regular'
                          size='md'
                          className='bg-white rounded-lg p-6 max-w-md lg:max-w-none lg:bg-transparent lg:p-0'
                        >
                          from paints and pottery to playing fields and parks, soils provide the grounds for music,
                          sports, and art!
                        </Text>
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
                    <VisGraph graph={foodGraph} options={options} events={handleGraphEvent('food')} />
                    <SlideButtons
                      leftImage='/images/web-of-soil/fun-arrow-left.png'
                      rightImage='/images/web-of-soil/fiber-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <VisGraph graph={fiberGraph} options={options} events={handleGraphEvent('fiber')} />
                    <SlideButtons
                      leftImage='/images/web-of-soil/food-arrow-left.png'
                      rightImage='/images/web-of-soil/filter-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <VisGraph graph={filterGraph} options={options} events={handleGraphEvent('filter')} />
                    <SlideButtons
                      leftImage='/images/web-of-soil/fiber-arrow-left.png'
                      rightImage='/images/web-of-soil/foundations-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <VisGraph graph={foundationsGraph} options={options} events={handleGraphEvent('foundation')} />
                    <SlideButtons
                      leftImage='/images/web-of-soil/filter-arrow-left.png'
                      rightImage='/images/web-of-soil/farmaceuticals-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <VisGraph graph={farmaceuticalGraph} options={options} events={handleGraphEvent('farmaceutical')} />
                    <SlideButtons
                      leftImage='/images/web-of-soil/foundations-arrow-left.png'
                      rightImage='/images/web-of-soil/fun-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <VisGraph graph={funGraph} options={options} events={handleGraphEvent('fun')} />
                    <SlideButtons
                      leftImage='/images/web-of-soil/farmaceuticals-arrow-left.png'
                      rightImage='/images/web-of-soil/food-arrow-right.png'
                    />
                  </Slide>
                </Section>

                <Section>
                  <Slide>
                    <MediaHub
                      compact
                      className='h-full flex flex-col justify-center mx-auto max-w-[80%]'
                      media={media}
                      filters={['food']}
                      showSections={showSections}
                    />
                    <SlideButtons
                      leftImage='/images/web-of-soil/fun-arrow-left.png'
                      rightImage='/images/web-of-soil/fiber-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <MediaHub
                      compact
                      className='h-full flex flex-col justify-center mx-auto max-w-[80%]'
                      media={media}
                      filters={['fiber']}
                      showSections={showSections}
                    />
                    <SlideButtons
                      leftImage='/images/web-of-soil/food-arrow-left.png'
                      rightImage='/images/web-of-soil/filter-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <MediaHub
                      compact
                      className='h-full flex flex-col justify-center mx-auto max-w-[80%]'
                      media={media}
                      filters={['filter']}
                      showSections={showSections}
                    />
                    <SlideButtons
                      leftImage='/images/web-of-soil/fiber-arrow-left.png'
                      rightImage='/images/web-of-soil/foundations-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <MediaHub
                      compact
                      className='h-full flex flex-col justify-center mx-auto max-w-[80%]'
                      media={media}
                      filters={['foundation']}
                      showSections={showSections}
                    />
                    <SlideButtons
                      leftImage='/images/web-of-soil/filter-arrow-left.png'
                      rightImage='/images/web-of-soil/farmaceuticals-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <MediaHub
                      compact
                      className='h-full flex flex-col justify-center mx-auto max-w-[80%]'
                      media={media}
                      filters={['farmaceuticals']}
                      showSections={showSections}
                    />
                    <SlideButtons
                      leftImage='/images/web-of-soil/foundations-arrow-left.png'
                      rightImage='/images/web-of-soil/fun-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <MediaHub
                      compact
                      className='h-full flex flex-col justify-center mx-auto max-w-[80%]'
                      media={media}
                      filters={['fun']}
                      showSections={showSections}
                    />
                    <SlideButtons
                      leftImage='/images/web-of-soil/farmaceuticals-arrow-left.png'
                      rightImage='/images/web-of-soil/food-arrow-right.png'
                    />
                  </Slide>
                </Section>
                <Footer />
              </>
            );
          }}
        />
      </DefaultLayout>
      <Modal handleClose={handleCloseVideoModal} isOpen={isVideoModalOpen} slides={{ count: 1, activeSlideIndex: 0 }}>
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
      <Modal
        handleClose={handleCloseWebOfSoilModal}
        isOpen={isWebOfSoilMModalOpen}
        slides={{ count: 1, activeSlideIndex: 0 }}
      >
        <div className='bg-white p-10 flex justify-center space-x-10 mx-auto'>
          {nodeSelections.map((node) => (
            <div key={node.id}>
              <div>
                <img src={node.image} className='h-40 w-40 object-cover rounded-full' />
                <Text type='h2' weight='regular' size='xl'>
                  {node.label}
                </Text>
                <Text type='p' weight='light' size='md'>
                  {node.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
