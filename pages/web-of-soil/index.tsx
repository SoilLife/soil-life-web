import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// components
import { Footer, WebOfSoilMedia, MobileNavMenu } from 'design-system/templates';
import { Section, Slide, Image, Icon, Modal, Text } from 'design-system/atoms';
import { VisGraph } from 'design-system/components';
import ReactModal from 'react-modal';
import ReactFullpage from '@fullpage/react-fullpage';
import ReactPlayer from 'react-player';

// data
import { webOfSoilSubheadings } from 'data/main-headings';

// helpers
import { DefaultLayout } from 'layouts';
import { useWebOfSoils, Node, Edge } from 'helpers/use-web-of-soil';
import { textSizeMap } from 'design-system/atoms/text/text.utils';
import { uniqBy } from 'lodash';

// assets
import DownArrow from 'public/images/down_arrow_white.svg';

const options = {
  autoResize: true,
  layout: {
    hierarchical: false,
  },
  interaction: {
    dragNodes: true,
    zoomView: false,
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
    arrows: {
      to: {
        enabled: false,
      },
    },
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

const videos = [
  'https://www.youtube.com/watch?v=bt6bNTVXFss',
  'https://www.youtube.com/watch?v=Nf3VgIiymKw',
  'https://www.youtube.com/watch?v=5Qy-rzIsBWo',
  'https://www.youtube.com/watch?v=wb58okKU8xM',
  'https://www.youtube.com/watch?v=AknCWP16gVk',
  'https://www.youtube.com/watch?v=ABWz6tfChY4',
];

export default function WebOfSoilPage() {
  const { query } = useRouter();
  const [activeHeader, setActiveHeader] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isWebOfSoilMModalOpen, setIsWebOfSoilModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState<HTMLDivElement[]>([]);
  const fullPageRef = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [nodeSelections, setNodeSelections] = useState<(Node & { active: boolean })[]>([]);
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

  useEffect(() => {
    if (query?.['section'] && fullPageRef.current) {
      const sectionMap = ['food', 'fiber', 'filter', 'foundations', 'farmaceuticals', 'fun'];
      const nav = Array.from(document.querySelectorAll('[data-nav]')) as HTMLLIElement[];
      nav[sectionMap.findIndex((f) => f === query['section']) ?? 0]?.click();
    }
  }, [query, fullPageRef.current]);

  function handleDownArrowClick() {
    if (fullPageRef.current?.state?.initialized) {
      fullPageRef.current.fullpageApi.moveSectionDown();
    }
  }

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
          <img src={leftImage} className='h-20 2xl:h-auto' />
        </button>
        <button
          className='hidden absolute right-0 top-1/2 transform -translate-y-1/2 lg:inline-block'
          onClick={moveSlideRight}
        >
          <img src={rightImage} className='h-20 2xl:h-auto' />
        </button>
      </>
    );
  }

  function handleGraphEvent(type: 'food' | 'filter' | 'fiber' | 'fun' | 'farmaceutical' | 'foundation') {
    return {
      select({ nodes, edges }: { nodes: string[]; edges: string[] }) {
        if (!nodes.length || !edges.length) {
          return;
        }
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
          if (edges.length === 1) {
            const [edge] = edges;
            if (edge) {
              let connections: typeof nodeSelections = [];
              const first = graphs[type].nodes.find((node) => node.id === id);
              if (first) {
                connections.push({ ...first, active: true });
              }
              function findEdges(edgeId: string) {
                const connection = graphs[type].edges.find((e) => e.id === edgeId);
                const allEdges = graphs[type].edges.filter((e) => e.to === connection?.from);

                if (connection && allEdges.length === 1) {
                  const node = graphs[type].nodes.find((node) =>
                    node.to.find((to) => to.toLowerCase().includes(connection.to.toLowerCase()))
                  );
                  if (node) {
                    connections.push({ ...node, active: false });
                    const foundEdge = graphs[type].edges.find((edge) => edge.to.includes(node.id));
                    if (foundEdge?.id) {
                      findEdges(foundEdge.id);
                    }
                  }
                } else {
                  const node = graphs[type].nodes.find((node) =>
                    node.to.find((to) => to.toLowerCase().includes(connection?.to?.toLowerCase() ?? ''))
                  );

                  if (node) {
                    connections.push({ ...node, active: false });
                    connections.push(
                      ...graphs[type].nodes.filter((n) => n.to.includes(node.id)).map((n) => ({ ...n, active: false }))
                    );
                  }
                }
              }

              findEdges(edge);
              setNodeSelections(connections);
            }
          } else {
            const connectedNodes = graphs[type].nodes
              .filter((node) => node.to.includes(id))
              .map((node) => ({ ...node, active: false }));
            const selectedNode = graphs[type].nodes.find((node) => node.id === id);

            if (selectedNode) {
              const nodeSelections = [{ ...selectedNode, active: true }, ...connectedNodes];
              setNodeSelections(nodeSelections);
            }
          }
        }
        handleOpenWebOfSoilModal();
      },
    };
  }

  function handleWebOfSoilModalNodeClick(node: Node) {
    return () => {
      const nodes = nodeSelections.map((n) => ({ ...n, active: n.id === node.id }));
      setNodeSelections(nodes);
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
              <li key={name} title={name} data-nav={name} onClick={handleHeaderClick(index)}>
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
                  <Slide className='relative'>
                    <Image
                      className='object-cover object-center'
                      url='/6Fs/brooke-lark-08bOYnH_r_E-unsplash_Nsw5XgGxU.jpg'
                    />
                    <div
                      className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                     lg:block lg:p-0 lg:h-auto lg:w-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[644px]`}
                    >
                      <img
                        className='relative top-10 mx-auto h-[168px] w-[168px] lg:top-auto lg:-left-10 lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-food.png'
                      />
                      <Text
                        type='p'
                        weight='light'
                        size='lg'
                        className='leading-9 bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0'
                      >
                        whether it is a plant that grew in it or an animal that grew from plants, 95% of all food can be
                        traced back to soil!
                      </Text>
                      <div className='mt-[15%] flex justify-center sm:mt-10'>
                        <button
                          className={`bg-white shadow font-acre-regular text-pink-500 py-2 px-5 ${textSizeMap['lg']}`}
                          onClick={handleOpenModal}
                        >
                          watch the video
                        </button>
                      </div>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                      <DownArrow className='h-5 cursor-pointer hover:scale-105' onClick={handleDownArrowClick} />
                    </div>
                  </Slide>
                  <Slide className='relative'>
                    <Image className='object-cover' url='/6Fs/Fiber_Slide_NkVYdxIN7-t.jpg' />
                    <div
                      className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                     lg:block lg:left-auto lg:p-0 lg:h-auto lg:w-auto lg:top-1/2 lg:right-1/2 lg:transform lg:-translate-y-1/2 lg:max-w-[608px]`}
                    >
                      <img
                        className='relative top-10 mx-auto h-[168px] w-[168px] lg:mx-0 lg:top-auto lg:-left-10 lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-fiber.png'
                      />
                      <Text
                        type='p'
                        weight='light'
                        size='lg'
                        className='leading-9 bg-white rounded-lg p-6 max-w-md lg:bg-transparent lg:p-0'
                      >
                        natural? synthetic? paper or plastic? from clothing to accessories to wood and oil, all that
                        warms and protects us, starts in the soil.
                      </Text>
                      <div className='mt-[15%] flex justify-center sm:mt-10'>
                        <button
                          className={`bg-white shadow font-acre-regular text-yellow-500 py-2 px-5 ${textSizeMap['lg']}`}
                          onClick={handleOpenModal}
                        >
                          watch the video
                        </button>
                      </div>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                      <DownArrow className='h-5 cursor-pointer hover:scale-105' onClick={handleDownArrowClick} />
                    </div>
                  </Slide>
                  <Slide className='relative'>
                    <Image className='object-cover' url='/6Fs/Filter_zylk3NyhU.jpg' transformation={[{ rotate: 90 }]} />
                    <div
                      className={`p-6 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center
                    text-center lg:p-0 lg:h-auto lg:block lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 lg:max-w-[950px]`}
                    >
                      <img
                        className='relative top-10 mx-auto h-[168px] w-[168px] lg:static lg:top-auto lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-filter.png'
                      />
                      <Text
                        type='p'
                        weight='light'
                        size='lg'
                        className='leading-9 bg-white rounded-lg p-6 lg:bg-transparent lg:p-0'
                      >
                        soils are the lungs and liver of the earth, removing contaminants from the air we breathe and
                        the water we drink, free of charge!
                      </Text>
                      <div className='mt-[15%] flex justify-center sm:mt-10'>
                        <button
                          className={`bg-white shadow font-acre-regular text-blue-500 py-2 px-5 ${textSizeMap['lg']}`}
                          onClick={handleOpenModal}
                        >
                          watch the video
                        </button>
                      </div>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                      <DownArrow className='h-5 cursor-pointer hover:scale-105' onClick={handleDownArrowClick} />
                    </div>
                  </Slide>
                  <Slide className='relative'>
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
                          weight='light'
                          size='lg'
                          className='leading-9 bg-white rounded-lg p-6 max-w-md lg:max-w-none lg:bg-transparent lg:p-0 lg:text-white'
                        >
                          the base of our economy, the base of food webs, and the physical base of our cities, soils are
                          literally the foundation for life and civilization—past and present!
                        </Text>
                        <div className='mt-[15%] flex justify-center sm:mt-10'>
                          <button
                            className={`bg-white shadow font-acre-regular text-gray-500 py-2 px-5 ${textSizeMap['lg']}`}
                            onClick={handleOpenModal}
                          >
                            watch the video
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                      <DownArrow className='h-5 cursor-pointer hover:scale-105' onClick={handleDownArrowClick} />
                    </div>
                  </Slide>
                  <Slide className='relative'>
                    <Image className='object-cover object-left' url='/6Fs/cup_of_pills_ioFvZZ0lo.png' />
                    <div
                      className={`p-6 flex flex-col h-full w-full items-center justify-center absolute top-0 left-0
                    lg:p-0 lg:block lg:h-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/4 lg:max-w-[828px]`}
                    >
                      <img
                        className='relative top-10 h-[168px] w-[168px] lg:-left-10 lg:top-auto lg:h-[241px] lg:w-[241px]'
                        src='/images/web-of-soil/icon-farmaceutical.png'
                      />
                      <Text
                        type='p'
                        weight='light'
                        size='lg'
                        className='bg-white rounded-lg p-6 lg:bg-transparent lg:p-0'
                      >
                        soils are home to the plants, fungi, & bacteria that produce most of the world’s medicine — and
                        ~98% of the microbes that inhabit it are yet to be discovered!
                      </Text>
                      <div className='mt-[15%] flex justify-center sm:mt-10'>
                        <button
                          className={`bg-white shadow font-acre-regular text-orange-500 py-2 px-5 ${textSizeMap['lg']}`}
                          onClick={handleOpenModal}
                        >
                          watch the video
                        </button>
                      </div>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                      <DownArrow className='h-5 cursor-pointer hover:scale-105' onClick={handleDownArrowClick} />
                    </div>
                  </Slide>
                  <Slide className='relative'>
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
                          weight='light'
                          size='lg'
                          className='bg-white rounded-lg p-6 max-w-md lg:max-w-none lg:bg-transparent lg:p-0'
                        >
                          from paints and pottery to playing fields and parks, soils provide the grounds for music,
                          sports, and art!
                        </Text>
                        <div className='mt-[15%] flex justify-center sm:mt-10'>
                          <button
                            className={`bg-white shadow font-acre-regular text-teal-500 py-2 px-5 ${textSizeMap['lg']}`}
                            onClick={handleOpenModal}
                          >
                            watch the video
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                      <DownArrow className='h-5 cursor-pointer hover:scale-105' onClick={handleDownArrowClick} />
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
                    <WebOfSoilMedia filter='food' />
                    <SlideButtons
                      leftImage='/images/web-of-soil/fun-arrow-left.png'
                      rightImage='/images/web-of-soil/fiber-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <WebOfSoilMedia filter='fiber' />
                    <SlideButtons
                      leftImage='/images/web-of-soil/food-arrow-left.png'
                      rightImage='/images/web-of-soil/filter-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <WebOfSoilMedia filter='filter' />
                    <SlideButtons
                      leftImage='/images/web-of-soil/fiber-arrow-left.png'
                      rightImage='/images/web-of-soil/foundations-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <WebOfSoilMedia filter='foundation' />
                    <SlideButtons
                      leftImage='/images/web-of-soil/filter-arrow-left.png'
                      rightImage='/images/web-of-soil/farmaceuticals-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <WebOfSoilMedia filter='farmaceuticals' />
                    <SlideButtons
                      leftImage='/images/web-of-soil/foundations-arrow-left.png'
                      rightImage='/images/web-of-soil/fun-arrow-right.png'
                    />
                  </Slide>
                  <Slide>
                    <WebOfSoilMedia filter='fun' />
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
      <ReactModal
        isOpen={isWebOfSoilMModalOpen}
        onRequestClose={handleCloseWebOfSoilModal}
        style={{
          content: {
            padding: 0,
            inset: '10%',
          },
        }}
      >
        <div className='relative bg-white mx-auto flex flex-col h-full justify-center p-4 sm:p-8'>
          <div className='absolute top-2 right-2 sm:top-6 sm:right-6'>
            <button onClick={handleCloseWebOfSoilModal}>
              <Icon icon='x' size='32' className='text-yellow-500' />
            </button>
          </div>
          <div className='flex flex-grow justify-center items-center overflow-x-auto space-x-2 sm:space-x-10'>
            {nodeSelections.map((node) => {
              return (
                <div key={node.id} className='flex-shrink-0 text-center'>
                  <Text type='h2' weight='light' size={node.active ? 'lg' : 'sm'} className='mb-1'>
                    {node.label}
                  </Text>
                  <img
                    src={node.image}
                    className={`object-cover rounded-full mx-auto border-4 border-solid border-pink-500 ${
                      node.active ? 'h-20 w-20 sm:h-40 sm:w-40' : 'h-10 w-10 sm:h-20 sm:w-20 cursor-pointer'
                    }`}
                    onClick={handleWebOfSoilModalNodeClick(node)}
                  />
                </div>
              );
            })}
          </div>
          <div className='mt-10 mx-auto flex-grow'>
            {nodeSelections.map((node) => {
              if (node.active && !node.to.length) {
                return (
                  <p key={node.label} className='max-w-3xl mx-auto text-center font-acre-light leading-[22px]'>
                    {node.description}
                  </p>
                );
              } else if (node.active) {
                const graphs: { [Type in typeof activeHeader]: { nodes: Node[]; edges: Edge[] } } = {
                  0: foodGraph,
                  1: fiberGraph,
                  2: filterGraph,
                  3: foundationsGraph,
                  4: farmaceuticalGraph,
                  5: funGraph,
                };
                const edges = graphs[activeHeader]?.edges.filter((edge) => edge.to === node.id);
                if ((edges?.length ?? 0) > 1) {
                  return (
                    <p key={node.label} className='max-w-3xl mx-auto text-center font-acre-light leading-[22px]'>
                      {node.description}
                    </p>
                  );
                } else {
                  let _connectedNodes: Node[] = [];

                  function findConnectedNodes(node: Node) {
                    const connectedNodes = graphs?.[activeHeader]?.nodes.filter((n) => n.to.includes(node.id)) ?? [];
                    for (const n of connectedNodes) {
                      _connectedNodes.push(n);
                      findConnectedNodes(n);
                    }
                  }

                  findConnectedNodes(node);

                  return (
                    <div
                      key={node.label}
                      className='flex flex-col space-y-10 sm:py-10 sm:space-y-0 sm:overflow-x-auto sm:flex-row sm:space-x-10'
                    >
                      <div className='flex-shrink-0 space-y-6'>
                        <h3 className='text-pink-500 font-acre-light text-[40px] leading-[48px] mb-6 text-center'>
                          {node.label}
                        </h3>
                        <img src={node.image} className='h-[147px] w-[233px] object-cover mx-auto' />
                        <p className='font-acre-light text-base leading-[22px] max-w-md mx-auto'>{node.description}</p>
                      </div>
                      {uniqBy(_connectedNodes, 'id').map((n) => {
                        return (
                          <div key={n.id} className='flex-shrink-0 space-y-6'>
                            <h3 className='text-pink-500 font-acre-light text-[40px] leading-[48px] mb-6 text-center'>
                              {n.label}
                            </h3>
                            <img src={n.image} className='h-[147px] w-[233px] object-cover mx-auto' />
                            <p className='font-acre-light text-base leading-[22px] max-w-md mx-auto'>{n.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              }
              return null;
            })}
          </div>
        </div>
      </ReactModal>
    </>
  );
}
