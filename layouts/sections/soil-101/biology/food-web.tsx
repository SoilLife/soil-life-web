import { useRef, useEffect, useState } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';
import { FoodWebModal } from './components/food-web-soil';

// assets
import FoodWebSvg from 'public/images/soil-101/biology/food_web.svg';
import ArthopodsSvg from 'public/images/soil-101/biology/invertebrate.svg';
import BacteriaSvg from 'public/images/soil-101/biology/bacteria.svg';
import EarthwormSvg from 'public/images/soil-101/biology/earthworm.svg';
import FungiSvg from 'public/images/soil-101/biology/fungi.svg';
import NematodeSvg from 'public/images/soil-101/biology/nematode.svg';
import DungPatSvg from 'public/images/soil-101/biology/dung_pat.svg';
import ProtozoaSvg from 'public/images/soil-101/biology/protozoa.svg';
import AnimalsSvg from 'public/images/soil-101/biology/animals.svg';
import PlantsSvg from 'public/images/soil-101/biology/plants_sugar_daddy.svg';
import ArchaeaSvg from 'public/images/soil-101/biology/archaea.svg';

import styles from '../soil-101.module.css';

const modalTypeMap = {
  'dung pat': {
    front: <DungPatSvg className='h-full w-full' />,
    back: ['/Soil_101/Soil_Biology/Shamwari-wildlife-13_9cXnSN_1S.jpg'],
  },
  animals: {
    front: <AnimalsSvg className='h-full w-full' />,
    back: [
      '/Soil_101/Soil_Biology/cows_Emma_Lee_ZfcoVj_7S.jpg',
      '/Soil_101/Soil_Biology/Lamb_FoodorFiber_0HM4NNT9a9.jpg',
      '/Soil_101/Soil_Biology/chickensWillMerydith_nIucM0ZQdvt.jpg',
    ],
  },
  archaea: {
    front: <ArchaeaSvg className='h-full w-full' />,
    back: ['/Soil_101/Soil_Biology/archaeen_ivLj_Rg_39f.jpg'],
  },
  bacteria: {
    front: <BacteriaSvg className='h-full w-full' />,
    back: ['/Soil_101/Soil_Biology/bacteria-gallery-1_Ar1EggtMgYx_qOpHDyZQF.jpg'],
  },
  earthworm: {
    front: <EarthwormSvg className='h-full w-full' />,
    back: [
      '/Soil_101/Soil_Biology/mole_earthworm_a060_BSccWF.jpg',
      '/Soil_101/Soil_Biology/earthworms_AH_photoessay_8jugkC26M.png',
    ],
  },
  fungi: {
    front: <FungiSvg className='h-full w-full' />,
    back: [
      '/Soil_101/Soil_Biology/fungi_group_BaA_4yRqT.png',
      '/Soil_101/Soil_Biology/Mycorrhizal_root_tips__28amanita_29allversity_5q8wCdfVA_dbE0KKeDH.jpeg',
      '/Soil_101/Soil_Biology/Fungus_Decomposing_Leaf_Veins_fd_eKdaTMF.jpg',
    ],
  },
  arthropods: {
    front: <ArthopodsSvg className='h-full w-full' />,
    back: [
      '/Soil_101/Soil_Biology/Symphypleona-2_-WwT6YPz2.jpeg',
      '/Soil_101/Soil_Biology/Trachelipus_rathkii1_KIgF3rbTqY.jpeg',
    ],
  },
  nematode: {
    front: <NematodeSvg className='h-full w-full' />,
    back: ['/Soil_101/Soil_Biology/Nematodes_8251087088_58328868cb_o__1___1__riApNiIf8.jpg'],
  },
  plants: {
    front: <PlantsSvg className='h-full w-full' />,
    back: [
      '/Soil_101/Soil_Biology/roots_JKx0MF4sA.png',
      '/Soil_101/Soil_Biology/Variety_of_Roots_Illustrated_DHIPM2la9yw.png',
    ],
  },
  protozoa: {
    front: <ProtozoaSvg className='h-full w-full' />,
    back: [
      '/Soil_101/Soil_Biology/protozoa-d5577a32-47e4-405d-845e-c9660b386ab-resize-750_zPOiEKibm.jpeg',
      '/Soil_101/Soil_Biology/amoeba_proteus_6_WGlVlCEqR.jpg',
    ],
  },
};

export const FoodWebSection = () => {
  const [modalType, setModalType] = useState<null | keyof typeof modalTypeMap>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    function openModal(type: typeof modalType) {
      return () => {
        setModalType(type);
      };
    }

    const svgs: [string, typeof modalType][] = [
      ['#food_web_svg__Layer_20', 'arthropods'],
      ['#food_web_svg__Layer_21', 'fungi'],
      ['#food_web_svg__Layer_22', 'dung pat'],
      ['#food_web_svg__Layer_24', 'protozoa'],
      ['#food_web_svg__Layer_18', 'earthworm'],
      ['#food_web_svg__Layer_25', 'bacteria'],
      ['#food_web_svg__Layer_19', 'animals'],
      ['#food_web_svg__Layer_17', 'plants'],
      ['#food_web_svg__Layer_23', 'archaea'],
    ];

    const sectionContainer = sectionRef.current;

    const interactiveSvgs = svgs.map(([id, type]) =>
      makeSvgInteractive({
        svg: sectionContainer.querySelector(id),
        onClick: openModal(type),
        onKeydown: openModal(type),
        ariaLabel: `open ${type} modal`,
      })
    );

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
    };
  }, []);

  function handleCloseModal() {
    setModalType(null);
  }

  return (
    <>
      <div ref={sectionRef} className={styles['section']}>
        <Text type='h1' weight='bold' size='4xl' color='teal' className={styles['heading']}>
          soil food web
        </Text>
        <FoodWebSvg />
      </div>
      {modalType && (
        <FoodWebModal
          front={modalTypeMap[modalType].front}
          back={modalTypeMap[modalType].back}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
