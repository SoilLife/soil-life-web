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
    <aside className={`fixed inset-y-0 left-0 h-full flex items-center py-20 ${textColor}`}>
      <ul className={`space-y-5 h-full px-6 border-r border-solid ${borderColor}`}>
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
    </aside>
  );
}
