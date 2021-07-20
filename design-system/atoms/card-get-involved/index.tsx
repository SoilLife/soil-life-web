import { useState } from 'react';

// components
import { Button, Image } from 'design-system/atoms';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

// helpers
import { getColor, getButtonType } from 'helpers/get-color';
import { useMedia } from 'react-use';

// interfaces
import { CardGetInvolvedProps } from './card-get-involved.interfaces';

export function CardGetInvolved({ index, color, links, text, imageUrl, imageContain, icon }: CardGetInvolvedProps) {
  const [isOpen, setIsOpen] = useState<{ [index: number]: boolean }>({});
  const isMobile = useMedia('(max-width: 640px)');

  function handleIsLinksOpen(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };
  }

  function handleOnDesktopMouseEnter(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: true }));
    };
  }

  function handleOnDesktopMouseLeave(index: number) {
    return () => {
      setIsOpen((prevState) => ({ ...prevState, [index]: false }));
    };
  }

  return (
    <div
      onMouseEnter={handleOnDesktopMouseEnter(index)}
      onMouseLeave={handleOnDesktopMouseLeave(index)}
      className={`shadow-lg p-4 rounded-lg ${typeof links === 'string' ? 'cursor-pointer' : ''}`}
      onClick={
        typeof links === 'string'
          ? () => {
              window.open(links, '_blank', 'rel=noreferrer,noopener');
            }
          : undefined
      }
    >
      <div className='relative aspect-h-1 aspect-w-1'>
        {isOpen[index] && (
          <div className='absolute h-full w-full to-transparent z-10'>
            {Array.isArray(links) && (
              <ul className='space-y-6 flex flex-col justify-center h-full p-6'>
                {links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`flex justify-center items-center bg-white bg-opacity-[0.85] w-full py-4
                      font-acre-medium text-[30px]
                      ${getColor({
                        color,
                        type: 'text',
                        state: 'hover',
                      })}
                      ${getColor({
                        color,
                        type: 'text',
                        state: 'active',
                      })}`}
                    >
                      <a href={link.href} target='_blank' rel='noreferrer noopener' className='text-center'>
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
        {imageUrl ? (
          <Image url={imageUrl} className={imageContain ? 'object-contain' : 'object-cover'} />
        ) : icon ? (
          <Icon icon={icon} size='10x' className='mx-auto text-blue-500' />
        ) : null}
      </div>
      <p
        className={`text-center mt-4 font-acre-regular text-[40px]
      ${getColor({ color, type: 'text', state: 'idle' })}`}
      >
        {text}
      </p>
      {isMobile && Array.isArray(links) ? (
        <div className='flex items-center justify-center my-4'>
          <Button
            label='find out how'
            type={getButtonType(color)}
            size='sm'
            as='button'
            onClick={handleIsLinksOpen(index)}
          />
        </div>
      ) : null}
    </div>
  );
}
