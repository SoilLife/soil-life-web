import { useRef, useEffect } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import PedogenicProcessesSvg from 'public/images/soil-101/diversity/pedogenic_processes.svg';

const interactiveClassNames = ['cursor-pointer', 'hover:opacity-50', 'active:opacity-100'];

import styles from '../soil-101.module.css';

export const PedogenicProcessesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const sectionContainerRef = useRef<null | HTMLDivElement>(null);
  const svgRefs = useRef<{ [key: string]: SVGSVGElement }>({});

  useEffect(() => {
    if (!sectionContainerRef.current) return;

    const el = sectionContainerRef.current;
    function togglePopup(popup: string) {
      return () => {
        Object.entries(svgRefs.current).forEach(([popupName, svgElement]) => {
          if (popupName === popup && svgElement.classList.contains('hidden')) {
            svgElement.classList.remove('hidden');
          } else {
            svgElement.classList.add('hidden');
          }
        });
      };
    }

    const popupByLabels = {
      '#pedogenic_processes_svg__Layer_33': '#pedogenic_processes_svg__Layer_38',
      '#pedogenic_processes_svg__Layer_14': '#pedogenic_processes_svg__Layer_43',
      '#pedogenic_processes_svg__Layer_52': '#pedogenic_processes_svg__Layer_42',
      '#pedogenic_processes_svg__Layer_18': '#pedogenic_processes_svg__Layer_47',
      '#pedogenic_processes_svg__Layer_17': '#pedogenic_processes_svg__Layer_40',
      '#pedogenic_processes_svg__Layer_37': '#pedogenic_processes_svg__Layer_46',
      '#pedogenic_processes_svg__Layer_15': '#pedogenic_processes_svg__Layer_44',
      '#pedogenic_processes_svg__Layer_34': '#pedogenic_processes_svg__Layer_48',
      '#pedogenic_processes_svg__Layer_35': '#pedogenic_processes_svg__Layer_41',
      '#pedogenic_processes_svg__Layer_16': '#pedogenic_processes_svg__Layer_45',
      '#pedogenic_processes_svg__Layer_32': '#pedogenic_processes_svg__Layer_49',
    };

    Object.entries(popupByLabels).forEach(([labelClassName, popupClassName]) => {
      const labelSvg = el.querySelector(labelClassName) as SVGSVGElement;
      const popupSvg = el.querySelector(popupClassName) as SVGSVGElement;
      svgRefs.current[popupClassName] = popupSvg;
      popupSvg?.classList?.add('hidden');
      labelSvg?.classList?.add(...interactiveClassNames);
      labelSvg?.addEventListener('click', togglePopup(popupClassName));
    });

    return () => {
      Object.entries(popupByLabels).forEach(([labelClassName, popupClassName]) => {
        const labelSvg = el.querySelector(labelClassName) as SVGSVGElement;
        labelSvg?.removeEventListener('click', togglePopup(popupClassName));
      });
    };
  }, []);

  return (
    <div
      ref={(el) => {
        props.assignRef(el);
        sectionContainerRef.current = el;
      }}
      className={styles['section']}
    >
      <Text
        id='pedogenesis-processes'
        type='h1'
        weight='bold'
        size='4xl'
        className={`${styles['anchor']} ${styles['heading']}`}
      >
        pedogenic processes
      </Text>
      <PedogenicProcessesSvg />
    </div>
  );
};
