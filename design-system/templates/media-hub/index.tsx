import { useState, useRef } from 'react';

// components
import { Modal, Image, Icon, Text } from 'design-system/atoms';
import ReactPlayer from 'react-player';

// helpers
import { Media } from 'helpers/use-media-hub';

// styles
import styles from './media-hub.module.css';

export function MediaHub({
  className,
  search,
  filters,
  media,
  showSections,
  compact,
}: {
  media: { [key: string]: Media[] };
  className?: string;
  search?: string;
  filters?: string[];
  showSections?: string[];
  compact?: true;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState<Media[]>([]);
  const [mediaIndex, setMediaIndex] = useState(0);
  const imageKitContainerRef = useRef<HTMLDivElement | null>(null);

  function handleModalOpen({ key, index }: { key: string; index: number }) {
    return () => {
      setMediaIndex(index);
      setModalMedia(media[key] || []);
      setIsModalOpen(true);
    };
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handlePrevious() {
    const count = modalMedia.length;
    if (mediaIndex - 1 < 0) {
      setMediaIndex(count - 1);
    } else {
      setMediaIndex(mediaIndex - 1);
    }
  }

  function handleNext() {
    const count = modalMedia.length;
    if (mediaIndex + 1 === count) {
      setMediaIndex(0);
    } else {
      setMediaIndex(mediaIndex + 1);
    }
  }

  return (
    <>
      <div className={className}>
        {Object.keys(media).map((key, index) => {
          if (showSections?.length && !showSections.includes(key)) return;
          if (media[key]) {
            let filteredMedia = media[key]
              ?.filter((medium) => (search ? medium.Title?.toLowerCase()?.includes(search.toLowerCase()) : true))
              ?.filter((medium) => {
                let found = false;
                if (filters?.length && medium.Tags?.length) {
                  for (const tag of medium.Tags) {
                    if (filters.includes(tag.toLowerCase())) {
                      found = true;
                    }
                  }
                } else {
                  found = true;
                }

                return found;
              });

            return filteredMedia?.length ? (
              <div key={index}>
                <div className='flex justify-between items-center'>
                  <Text
                    type='p'
                    weight='regular'
                    size='sm'
                    className='py-1 px-10 md:w-3/4 lg:w-1/2 xl:w-1/3 bg-pink-500 text-white'
                  >
                    {key}
                  </Text>
                  <Text type='p' weight='light' size='2xs' className='pr-10 text-right'>
                    ({filteredMedia.length})
                  </Text>
                </div>

                <div
                  className={`media-hub__scroll__container relative overflow-y-hidden flex items-center overflow-x-auto mx-10 ${
                    styles['media-container']
                  } ${compact ? 'min-h-[260px]' : ' min-h-[320px]'}`}
                >
                  <div className={`flex gap-4 items-center ${styles['media-section']}`}>
                    {filteredMedia?.map((medium, index) => {
                      return (
                        <MediaContainer
                          key={`${medium.Title}_${index}`}
                          className='focus:ring-4 focus:ring-pink-500'
                          onClick={handleModalOpen({ key, index })}
                          href={medium.URL}
                          renderAs={medium.mediaType === 'link' || medium.mediaType === 'pdf' ? 'link' : 'button'}
                        >
                          <div className='relative flex flex-col group'>
                            <div
                              className={`relative aspect-w-16 aspect-h-9 transition-all ease-in-out duration-500 w-[262px] group-hover:w-[300px]`}
                            >
                              {medium.mediaType === 'imagekit' ? (
                                <Image
                                  url={medium.URL as string}
                                  className='object-cover'
                                  transformation={[{ quality: 10, cropMode: 'extract', fo: 'top' }]}
                                  loading='lazy'
                                />
                              ) : (
                                <img
                                  key={`${medium.Title}_${index}`}
                                  src={
                                    medium.mediaType === 'video' && medium.thumbnail
                                      ? medium.thumbnail
                                      : medium.mediaType === 'image'
                                      ? medium?.URL ?? ''
                                      : '/images/logo.svg'
                                  }
                                  className={
                                    medium.mediaType === 'video' && medium.thumbnail
                                      ? 'object-cover'
                                      : medium.mediaType === 'image'
                                      ? 'object-contain'
                                      : 'p-8'
                                  }
                                  loading='lazy'
                                />
                              )}
                              <div className='flex opacity-0 transition-all duration-200 ease absolute group-hover:opacity-100 items-center justify-center h-full w-full group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent'>
                                <div className='w-10 h-10 rounded-full text-pink-600 shadow-md cursor-pointer ring-2 ring-white bg-pink-800 flex items-center justify-center'>
                                  <Icon
                                    icon={
                                      medium.mediaType === 'video'
                                        ? 'play'
                                        : medium.mediaType === 'link'
                                        ? 'link'
                                        : medium.mediaType === 'pdf'
                                        ? 'file-text'
                                        : 'image'
                                    }
                                    className={medium.mediaType === 'video' ? 'pl-1' : ''}
                                  />
                                </div>
                              </div>
                            </div>
                            <Text
                              type='p'
                              weight='light'
                              size='2xs'
                              className='absolute top-[calc(105%);] text-sm transition-all ease-in duration-500 group-hover:top-auto group-hover:p-4 group-hover:bottom-0 group-hover:text-pink-500 pointer-events-none'
                            >
                              {medium.Title}
                            </Text>
                          </div>
                        </MediaContainer>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null;
          }
          return null;
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        handleClose={handleModalClose}
        slides={{ activeSlideIndex: mediaIndex, count: modalMedia.length }}
        pagination={{
          handleNext: handleNext,
          handlePrevious: handlePrevious,
        }}
      >
        {modalMedia.length > 0 && modalMedia?.[mediaIndex]?.URL && modalMedia?.[mediaIndex]?.mediaType === 'video' ? (
          <ReactPlayer
            controls={true}
            key={`${modalMedia[mediaIndex]?.Title}_${mediaIndex}`}
            height={'90%'}
            width={'95%'}
            url={modalMedia[mediaIndex]?.URL as string}
            style={{
              margin: '0 auto',
            }}
          />
        ) : modalMedia?.[mediaIndex]?.mediaType === 'image' ? (
          <img
            className={'h-full w-full object-contain max-w-[75%] mx-auto'}
            src={modalMedia[mediaIndex]?.URL as string}
            loading='lazy'
          />
        ) : modalMedia?.[mediaIndex]?.mediaType === 'imagekit' ? (
          <div className='overflow-y-auto max-h-[90%] max-w-full mx-auto' ref={imageKitContainerRef}>
            <Image
              key={modalMedia[mediaIndex]?.URL}
              url={modalMedia?.[mediaIndex]?.URL as string}
              transformation={[{ quality: 100 }]}
              loading='lazy'
              onLoad={(event) => {
                const b = event.target as HTMLImageElement;
                const ratio = b.naturalWidth / b.naturalHeight;
                if (imageKitContainerRef.current) {
                  if (ratio >= 1) {
                    imageKitContainerRef.current.style.maxWidth = '80%';
                  } else {
                    imageKitContainerRef.current.style.maxWidth = '50%';
                  }
                }
              }}
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
}

MediaHub.defaultProps = {
  className: '',
};

function MediaContainer({
  renderAs,
  href,
  onClick,
  ...props
}: {
  renderAs: 'link' | 'button';
  href?: string | null;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (renderAs === 'link') {
    return <a href={href || '#'} target='_blank' rel='noreferrer noopener' {...props} />;
  } else if (renderAs === 'button') {
    return <button onClick={onClick} {...props} />;
  } else {
    return null;
  }
}
