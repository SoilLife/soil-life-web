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
    <ul
      className={`fixed top-1/4 left-0 w-max pt-4 pb-32 space-y-5 px-6 border-r border-solid ${textColor} ${borderColor}`}
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
  );
}
