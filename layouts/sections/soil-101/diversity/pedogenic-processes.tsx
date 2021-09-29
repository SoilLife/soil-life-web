import { useRef, useEffect } from 'react';

// components
import { Text } from 'design-system/atoms';

// assets
import PedogenicProcessesSvg from 'public/images/soil-101/diversity/pedogenic_processes.svg';

const interactiveClassNames = ['cursor-pointer', 'hover:opacity-50', 'active:opacity-100'];

export const PedogenicProcessesSection = (props: { assignRef: (el: null | HTMLDivElement) => void }) => {
  const sectionContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionContainerRef.current) return;

    const el = sectionContainerRef.current;
    function togglePopup(el: null | Element) {
      return () => {
        el?.classList?.toggle('hidden');
      };
    }

    const pedoturbationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-17');
    const pedoturbationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_38');
    pedoturbationPopupSvg?.classList?.toggle('hidden');
    pedoturbationLabelSvg?.classList?.add(...interactiveClassNames);
    pedoturbationLabelSvg?.addEventListener('click', togglePopup(pedoturbationPopupSvg));

    const lessivageLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-29');
    const lessivagePopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_43');
    lessivagePopupSvg?.classList?.toggle('hidden');
    lessivageLabelSvg?.classList?.add(...interactiveClassNames);
    lessivageLabelSvg?.addEventListener('click', togglePopup(lessivagePopupSvg));

    const illuviationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-33');
    const illuviationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_42');
    illuviationPopupSvg?.classList?.toggle('hidden');
    illuviationLabelSvg?.classList?.add(...interactiveClassNames);
    illuviationLabelSvg?.addEventListener('click', togglePopup(illuviationPopupSvg));

    const gleizationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-18');
    const gleizationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_47');
    gleizationPopupSvg?.classList?.toggle('hidden');
    gleizationLabelSvg?.classList?.add(...interactiveClassNames);
    gleizationLabelSvg?.addEventListener('click', togglePopup(gleizationPopupSvg));

    const salinizationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-33');
    const salinizationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_40');
    salinizationPopupSvg?.classList?.toggle('hidden');
    salinizationLabelSvg?.classList?.add(...interactiveClassNames);
    salinizationLabelSvg?.addEventListener('click', togglePopup(salinizationPopupSvg));

    const bioturbationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-33');
    const bioturbationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_46');
    bioturbationPopupSvg?.classList?.toggle('hidden');
    bioturbationLabelSvg?.classList?.add(...interactiveClassNames);
    bioturbationLabelSvg?.addEventListener('click', togglePopup(bioturbationPopupSvg));

    const calcificationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-33');
    const calcificationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_44');
    calcificationPopupSvg?.classList?.toggle('hidden');
    calcificationLabelSvg?.classList?.add(...interactiveClassNames);
    calcificationLabelSvg?.addEventListener('click', togglePopup(calcificationPopupSvg));

    const melanizationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-33');
    const melanizationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_48');
    melanizationPopupSvg?.classList?.toggle('hidden');
    melanizationLabelSvg?.classList?.add(...interactiveClassNames);
    melanizationLabelSvg?.addEventListener('click', togglePopup(melanizationPopupSvg));

    const elluviationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-29');
    const elluviationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_41');
    elluviationPopupSvg?.classList?.toggle('hidden');
    elluviationLabelSvg?.classList?.add(...interactiveClassNames);
    elluviationLabelSvg?.addEventListener('click', togglePopup(elluviationPopupSvg));

    const podzolizationLabelSvg = el.querySelector('.pedogenic_processes_svg__cls-29');
    const podzolizationPopupSvg = el.querySelector('#pedogenic_processes_svg__Layer_45');
    podzolizationPopupSvg?.classList?.toggle('hidden');
    podzolizationLabelSvg?.classList?.add(...interactiveClassNames);
    podzolizationLabelSvg?.addEventListener('click', togglePopup(podzolizationPopupSvg));

    const desilicationLabelSvg = el.querySelector('.a');
    const desilicationPopupSvg = el.querySelector('#a');
    desilicationPopupSvg?.classList?.toggle('hidden');
    desilicationLabelSvg?.classList?.add(...interactiveClassNames);
    desilicationLabelSvg?.addEventListener('click', togglePopup(desilicationPopupSvg));

    return () => {
      pedoturbationLabelSvg?.removeEventListener('click', togglePopup(pedoturbationPopupSvg));
      lessivageLabelSvg?.removeEventListener('click', togglePopup(lessivagePopupSvg));
      illuviationLabelSvg?.removeEventListener('click', togglePopup(illuviationPopupSvg));
      gleizationLabelSvg?.removeEventListener('click', togglePopup(gleizationPopupSvg));
      salinizationLabelSvg?.removeEventListener('click', togglePopup(salinizationPopupSvg));
      bioturbationLabelSvg?.removeEventListener('click', togglePopup(bioturbationPopupSvg));
      calcificationLabelSvg?.removeEventListener('click', togglePopup(calcificationPopupSvg));
      melanizationLabelSvg?.removeEventListener('click', togglePopup(melanizationPopupSvg));
      elluviationLabelSvg?.removeEventListener('click', togglePopup(elluviationPopupSvg));
      podzolizationLabelSvg?.removeEventListener('click', togglePopup(podzolizationPopupSvg));
      desilicationLabelSvg?.removeEventListener('click', togglePopup(desilicationPopupSvg));
    };
  }, []);

  return (
    <div
      ref={(el) => {
        props.assignRef(el);
        sectionContainerRef.current = el;
      }}
    >
      <Text type='h1' weight='light' size='4xl' className='text-gray-500 mb-20'>
        pedogenic processes
      </Text>
      <PedogenicProcessesSvg />
    </div>
  );
};
