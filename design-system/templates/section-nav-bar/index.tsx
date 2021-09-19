// components
import { Text } from 'design-system/atoms';

// helpers
import { getColor } from 'helpers/get-color';

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
  const textColor = getColor({
    color,
    state: 'idle',
    type: 'text',
  });
  const borderColor = getColor({
    color,
    state: 'idle',
    type: 'border',
  });
  return (
    <div className='sticky top-10 bg-white py-4 overflow-auto sm:top-16'>
      <ul className={`w-max flex mx-auto space-x-5 px-6 sm:space-x-16 ${textColor} ${borderColor}`}>
        {sections.map((section) => (
          <li key={section}>
            <div className='inline-block cursor-pointer' onClick={onClick(section)}>
              <Text
                type='h3'
                weight='medium'
                size='sm'
                className={`py-2 
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
