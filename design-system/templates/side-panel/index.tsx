// components
import { Text } from 'design-system/atoms';

// helpers
import { getColor } from 'helpers/get-color';

export function SidePanel<T extends string>({
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
    <div className='py-4 overflow-auto sm:sticky sm:top-1/4 sm:py-32'>
      <ul
        className={`flex sm:block w-max space-x-5 px-6 sm:space-y-5 sm:space-x-0 sm:border-r sm:border-solid ${textColor} ${borderColor}`}
      >
        {sections.map((section) => (
          <li key={section}>
            <div className='inline-block cursor-pointer' onClick={onClick(section)}>
              <Text
                type='h3'
                weight='medium'
                size='sm'
                className={`py-2 
                ${section === currentSection ? `border-solid border-b ${borderColor}` : ''}`}
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
