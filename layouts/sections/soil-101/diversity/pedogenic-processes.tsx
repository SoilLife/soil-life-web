import { useRef, useEffect } from 'react';

// helpers
import { makeSvgInteractive } from 'helpers/make-svg-interactive';

// components
import { Text } from 'design-system/atoms';

// assets
import PedogenicProcessesSvg from 'public/images/soil-101/diversity/pedogenic_processes.svg';

import styles from '../soil-101.module.css';

export const PedogenicProcessesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const sectionContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionContainerRef.current) return;

    const sectionConatiner = sectionContainerRef.current;
    const svgs: [string, string][] = [
      ['#pedogenic_processes_svg__Layer_33', '#pedogenic_processes_svg__Layer_38'],
      ['#pedogenic_processes_svg__Layer_14', '#pedogenic_processes_svg__Layer_43'],
      ['#pedogenic_processes_svg__Layer_52', '#pedogenic_processes_svg__Layer_42'],
      ['#pedogenic_processes_svg__Layer_18', '#pedogenic_processes_svg__Layer_47'],
      ['#pedogenic_processes_svg__Layer_17', '#pedogenic_processes_svg__Layer_40'],
      ['#pedogenic_processes_svg__Layer_37', '#pedogenic_processes_svg__Layer_46'],
      ['#pedogenic_processes_svg__Layer_15', '#pedogenic_processes_svg__Layer_44'],
      ['#pedogenic_processes_svg__Layer_34', '#pedogenic_processes_svg__Layer_48'],
      ['#pedogenic_processes_svg__Layer_35', '#pedogenic_processes_svg__Layer_41'],
      ['#pedogenic_processes_svg__Layer_16', '#pedogenic_processes_svg__Layer_45'],
      ['#pedogenic_processes_svg__Layer_32', '#pedogenic_processes_svg__Layer_49'],
    ];

    function showPopup(svg: SVGGElement | null) {
      const popupIds = svgs.map(([_, popupId]) => popupId);
      return () => {
        if (!svg) return;
        popupIds.forEach((id) => {
          const popup = sectionConatiner.querySelector(id);
          popup?.classList?.add('hidden');
        });

        svg.classList.remove('hidden');
      };
    }

    const interactiveSvgs = svgs.map(([id, popupId]) => {
      const popupSvg = sectionConatiner.querySelector(popupId) as SVGSVGElement | null;
      popupSvg?.classList?.add('hidden');
      return makeSvgInteractive({
        svg: sectionConatiner.querySelector(id),
        onClick: showPopup(popupSvg),
        onKeydown: showPopup(popupSvg),
        ariaLabel: 'show popup',
      });
    });

    return () => {
      interactiveSvgs.forEach((svg) => svg?.unmount());
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
