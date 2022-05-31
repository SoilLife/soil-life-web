import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FullImage } from 'design-system/components/soil-101-modals/full-image';

// assets
import MycelialSvg from 'public/images/soil-101/biology/mycelial.svg';
import MycorrhizalFungiSvg from 'public/images/soil-101/biology/mycorrhizal_fungi.svg';
import MycorrhizaSvg from 'public/images/soil-101/biology/mycorrhiza.svg';
import PlantGrowthPromoting from 'public/images/soil-101/biology/plant_growth_promoting.svg';

import styles from '../soil-101.module.css';

export const FungalNetworksSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal() {
      setIsModalOpen(true);
    }

    const svgs: [string] = ['#mycorrhizal_fungi_svg__Mycorrhizal_Fungi'];

    const sectionContainer = sectionRef.current;
    const interactiveSvgs = svgs.map((id) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal,
        onKeydown: openModal,
        ariaLabel: 'open mycorrhizal fungi modal',
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='light' size='4xl' color='teal' className={styles['heading']}>
          fungal networks
        </Text>

        <MycelialSvg className='mx-auto max-h-[80vh]' />

        <MycorrhizalFungiSvg className='mx-auto max-h-[80vh]' />

        <Text type='p' weight='light' size='lg' className={`text-center ${styles['p-70']}`}>
          plants release{' '}
          <Text type='span' weight='bold' size='lg' color='blue'>
            compounds
          </Text>{' '}
          to attract{' '}
          <Text type='span' weight='bold' size='lg' color='pink'>
            mycorrhizal fungi
          </Text>
          , stimulating the growth of thread-like hyphae, which connect within or outside the roots, extending them{' '}
          <Text type='span' weight='bold' size='lg'>
            100-1000x
          </Text>
          . the root provides sugars to feed the fungus and in turn, its hyphae spread throughout the soil in search of
          water, nitrogen, phosphorus, and other nutrients.
        </Text>

        <div className='text-center pt-4'>
          <Text type='p' weight='light' size='lg' className={styles['p-70']}>
            microbes also release a variety of
          </Text>
          <Text type='p' weight='bold' size='lg' className={styles['p-70']}>
            plant growth promoting compounds
          </Text>
        </div>

        <PlantGrowthPromoting className='mx-auto' />
      </div>
      {isModalOpen && (
        <FullImage
          image={{
            type: 'svg',
            element: <MycorrhizaSvg className='w-full h-full' />,
          }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
