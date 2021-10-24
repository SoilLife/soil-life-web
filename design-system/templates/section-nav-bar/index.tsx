import { useState, useEffect, useRef } from 'react';

// components
import { Text } from 'design-system/atoms';

// helpers
import { getColor } from 'helpers/get-color';
import { debounce } from 'lodash';

export function SectionsNavBar<T extends string>({
  currentSection,
  sections,
  onClick,
  color,
}: {
  currentSection: T;
  onClick: (section: T) => () => void;
  sections: T[];
  color: Color;
}) {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (scrollTop > window.innerHeight && scrollTop > lastScrollTop.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    }

    const debouncedScrollChange = debounce(handleScroll, 100);

    document.addEventListener('scroll', debouncedScrollChange, false);

    return () => {
      document.removeEventListener('scroll', debouncedScrollChange, false);
    };
  }, []);

  const borderColor = getColor({
    color,
    state: 'idle',
    type: 'border',
  });

  return (
    <div
      className={`sticky top-10 bg-white py-4 overflow-auto sm:top-16 lg:px-32 transition-all ${
        isHidden ? 'transform -translate-y-full opacity-0 z-[-1]' : 'z-[1]'
      }`}
    >
      <ul className={`flex justify-between space-x-5 sm:space-x-16 ${borderColor}`}>
        {sections.map((section) => (
          <li key={section}>
            <div className='inline-block cursor-pointer' onClick={onClick(section)}>
              <Text
                type='h3'
                weight='medium'
                size='sm'
                color={color}
                className={`py-2 whitespace-nowrap
                ${section === currentSection ? `border-solid border-b ${borderColor}` : ''}
                `}
              >
                {section}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
