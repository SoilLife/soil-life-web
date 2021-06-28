import { useState } from 'react';

// components
import { Button, Typography, Image, Icon } from 'components/atoms';

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
      className={`shadow-lg p-4 rounded ${typeof links === 'string' ? 'cursor-pointer' : ''}`}
      onClick={
        typeof links === 'string'
          ? () => {
              window.open(links, '_blank', 'rel=noreferrer,noopener');
            }
          : undefined
      }
    >
      <div
        className='relative aspect-h-1 aspect-w-1'
        onMouseEnter={handleOnDesktopMouseEnter(index)}
        onMouseLeave={handleOnDesktopMouseLeave(index)}
      >
        {isOpen[index] && (
          <div className='absolute h-full w-full to-transparent z-10'>
            {Array.isArray(links) && (
              <ul className='space-y-2 flex flex-col items-center justify-center h-full'>
                {links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`text-center bg-white bg-opacity-80 w-full py-1 hover:text-pink-500 active:text-pink-600`}
                    >
                      <a href={link.href} target='_blank' rel='noreferrer noopener'>
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
      <Typography
        type='paragraph'
        className={`text-center mt-4
      ${getColor({ color, type: 'text', state: 'idle' })}`}
      >
        {text}
      </Typography>
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
