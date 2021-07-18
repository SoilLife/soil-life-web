import React, { useEffect, useState, useRef } from 'react';

// components
import { Icon, Modal, Image } from 'components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeHeader } from 'components/templates/home-header';
import ReactPlayer from 'react-player';

// helpers
import { faPlay, faLink, faImage, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'lodash';

// assets
import styles from './media.module.css';
import FoodSvg from 'public/images/media-hub/food.svg';
import FiberSvg from 'public/images/media-hub/fiber.svg';
import FilterSvg from 'public/images/media-hub/filter.svg';
import FoundationSvg from 'public/images/media-hub/foundation.svg';
import FarmaceuticalSvg from 'public/images/media-hub/farmaceutical.svg';
import FunSvg from 'public/images/media-hub/fun.svg';
import FoodSvgWhite from 'public/images/web-of-soil/food_white.svg';
import FiberSvgWhite from 'public/images/web-of-soil/fiber_white.svg';
import FilterSvgWhite from 'public/images/web-of-soil/filter_white.svg';
import FoundationSvgWhite from 'public/images/web-of-soil/foundation_white.svg';
import FarmaceuticalSvgWhite from 'public/images/web-of-soil/farmaceutical_white.svg';
import FunSvgWhite from 'public/images/web-of-soil/fun_white.svg';

type Media = {
  Category: null | string;
  'Embedding Code': null | string;
  Location: null | string;
  Organization: null | string;
  'Other Tags': null | string[];
  Tags: null | string[];
  Title: null | string;
  URL: null | string;
  mediaType: 'video' | 'pdf' | 'link' | 'image' | 'imagekit';
  thumbnail?: string;
};

const spreadsheetId = '1SCLiaORvOlBbYYFUF-4qqMjZkfEHvB_qkHXThiYz_2g';

export default function MediaPage() {
  const [media, setMedia] = useState<{ [category: string]: Media[] }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState<Media[]>([]);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchVideos() {
      const data = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?`)
        .then((res) => {
          if (res.ok) {
            return res.text();
          } else throw Error();
        })
        .then((res: string) => {
          if (res) {
            const items = res.split('\n')[1];
            if (items) {
              const parsedJSON = JSON.parse(items.replace(/google.visualization.Query.setResponse\(|\);/g, ''));

              const [headerRow, ...originalRows] = parsedJSON.table.rows;

              const headerIndices: number[] = headerRow.c
                .map((header: null | { v: string }, index: number) => {
                  if (header?.['v']) return index;
                  else return null;
                })
                .filter((header: number) => header != undefined);

              const rows: Media[] = originalRows.reduce(
                (
                  rows: { [key: string]: null | string | string[] | boolean }[],
                  item: {
                    c: (null | { v: string })[];
                  }
                ) => {
                  let row: { [key: string]: null | string | string[] | boolean } = {};

                  headerIndices.forEach((index) => {
                    const regex = /tags|other tags/i;
                    const header: string = headerRow.c[index]['v'];
                    const cell = item.c[index]?.['v'] ?? null;

                    if (header.match(regex)) {
                      if (cell) {
                        const parts = cell.replace(' ', '').split(',');
                        row[header] = parts;
                      } else {
                        row[header] = cell;
                      }
                    } else {
                      row[header] = cell;
                    }

                    if (header === 'URL' && cell?.startsWith('http')) {
                      const url = new URL(cell);

                      if (/youtube.com$|vimeo.com$/i.test(url.hostname)) {
                        row['mediaType'] = 'video';
                        if (url.hostname === 'www.youtube.com') {
                          const youtubeId = url.search
                            .substring(1)
                            .split('&')
                            .find((str) => str.startsWith('v='))
                            ?.split('v=')?.[1];
                          if (youtubeId) {
                            row['thumbnail'] = `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
                          } else {
                            console.log(url);
                          }
                        }
                      } else if (/imagekit.io$/i.test(url.hostname)) {
                        row['mediaType'] = 'imagekit';
                        const pathname = url.pathname
                          .split('/')
                          .filter((_, index) => index != 1)
                          .join('/');
                        row['URL'] = pathname;
                      } else {
                        const pathname = url.pathname;
                        if (/.pdf$|.png$|.gif$/i.test(pathname)) {
                          row['mediaType'] = 'image';
                        } else if (/.pdf$/i.test(pathname)) {
                          row['mediaType'] = 'pdf';
                        } else {
                          row['mediaType'] = 'link';
                        }
                      }
                    }
                  });

                  return rows.concat(row);
                },
                []
              );

              return rows;
            }
          }
          return [];
        });

      if (data) {
        const mediaMap = new Map<string, Media[]>();
        data.forEach((datum) => {
          if (datum.Category) {
            const categoryName = datum.Category.trim().toLowerCase();
            const items = mediaMap.get(categoryName);
            if (items) {
              mediaMap.set(categoryName, [...items, datum]);
            } else {
              mediaMap.set(categoryName, [datum]);
            }
          }
        });

        const media = Object.fromEntries(mediaMap);

        setMedia(media);
      }
    }
    fetchVideos();
  }, []);

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

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }

  const debouncedSearch = debounce(handleSearchChange, 250);

  function handleFilterChange(filter: string) {
    return () => {
      const filterSet = new Set(filters);
      const hasFilter = filterSet.has(filter);
      if (hasFilter) {
        filterSet.delete(filter);
      } else {
        filterSet.add(filter);
      }

      const newFilters = Array.from(filterSet);
      setFilters(newFilters);
    };
  }

  function handleClearSearch() {
    setSearch('');
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  return (
    <>
      <HomeHeader fullpageRef={{ current: null }} hideHeader={false} />
      <div className='my-28 space-y-16'>
        <div className='container flex flex-col justify-between gap-4 xl:flex-row'>
          <div className='flex items-center relative h-12 w-full sm:w-[480px] xl:w-[653px]'>
            <input
              ref={inputRef}
              type='text'
              className='border-none ring-1 ring-pink-500 rounded-full w-full placeholder-pink-300 outline-none focus:border-none focus:ring-2 focus:ring-pink-500'
              placeholder='search by keyword'
              onChange={debouncedSearch}
            />
            <Icon
              icon={!search ? 'search' : 'x'}
              onClick={search ? handleClearSearch : undefined}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${search ? 'cursor-pointer' : ''}`}
            />
          </div>

          <div className='flex items-center space-x-6 justify-between sm:space-x-10 sm:justify-start'>
            <p className='text-xl font-acre-light text-pink-500'>filters:</p>
            <ul className='flex space-x-6 sm:space-x-8'>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-pink-500 ${
                    filters.includes('food') ? 'bg-pink-500' : ''
                  }`}
                  onClick={handleFilterChange('food')}
                >
                  {filters.includes('food') ? <FoodSvgWhite /> : <FoodSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-yellow-500 ${
                    filters.includes('fiber') ? 'bg-yellow-500' : ''
                  }`}
                  onClick={handleFilterChange('fiber')}
                >
                  {filters.includes('fiber') ? <FiberSvgWhite /> : <FiberSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-blue-500 ${
                    filters.includes('filter') ? 'bg-blue-500' : ''
                  }`}
                  onClick={handleFilterChange('filter')}
                >
                  {filters.includes('filter') ? <FilterSvgWhite /> : <FilterSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-gray-500 ${
                    filters.includes('foundations') ? 'bg-gray-500' : ''
                  }`}
                  onClick={handleFilterChange('foundations')}
                >
                  {filters.includes('foundations') ? <FoundationSvgWhite /> : <FoundationSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-orange-500 ${
                    filters.includes('farmaceuticals') ? 'bg-orange-500' : ''
                  }`}
                  onClick={handleFilterChange('farmaceuticals')}
                >
                  {filters.includes('farmaceuticals') ? <FarmaceuticalSvgWhite /> : <FarmaceuticalSvg />}
                </div>
              </li>
              <li>
                <div
                  className={`h-6 w-6 sm:h-10 sm:w-10 rounded-full cursor-pointer grid place-items-center hover:ring-2 hover:ring-teal-500 ${
                    filters.includes('fun') ? 'bg-teal-500' : ''
                  }`}
                  onClick={handleFilterChange('fun')}
                >
                  {filters.includes('fun') ? <FunSvgWhite /> : <FunSvg />}
                </div>
              </li>
            </ul>
          </div>
        </div>
        {Object.keys(media).map((key, index) => {
          if (media[key]) {
            let filteredMedia = media[key]
              ?.filter((medium) => (search ? medium.Title?.toLowerCase()?.includes(search.toLowerCase()) : true))
              ?.filter((medium) => {
                let found = false;
                if (filters.length && medium.Tags?.length) {
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
                <div className='flex justify-between w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-pink-500 py-1 px-10 text-white font-acre-regular text-[30px]'>
                  <p>{key}</p>
                  <p>({filteredMedia.length})</p>
                </div>
                <div
                  className={`overflow-y-hidden flex items-center overflow-x-auto min-h-[320px] mx-10 ${styles['media-container']}`}
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
                            <div className='relative aspect-w-16 aspect-h-9 transition-all ease-in-out duration-500 w-64 group-hover:w-96'>
                              {medium.mediaType === 'imagekit' ? (
                                // <Image
                                //   url={medium.URL as string}
                                //   className='object-cover'
                                //   transformation={[
                                //     { quality: 10, height: 320, width: 180, cropMode: 'extract', fo: 'top' },
                                //   ]}
                                //   loading='lazy'
                                // />
                                <img
                                  key={`${medium.Title}_${index}`}
                                  src={'/images/logo.svg'}
                                  className={'p-8'}
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
                                  <div>
                                    <FontAwesomeIcon
                                      icon={
                                        medium.mediaType === 'video'
                                          ? faPlay
                                          : medium.mediaType === 'link'
                                          ? faLink
                                          : medium.mediaType === 'pdf'
                                          ? faFilePdf
                                          : faImage
                                      }
                                      size='lg'
                                      className={medium.mediaType === 'video' ? 'pl-1' : ''}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className='absolute top-[calc(105%);] text-sm transition-all ease-in duration-500 group-hover:top-auto group-hover:p-4 group-hover:bottom-0 group-hover:text-xs group-hover:text-pink-500 pointer-events-none'>
                              {medium.Title}
                            </p>
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
            className={'h-full w-full object-contain max-w-[600px] mx-auto'}
            src={modalMedia[mediaIndex]?.URL as string}
            loading='lazy'
          />
        ) : modalMedia?.[mediaIndex]?.mediaType === 'imagekit' ? (
          <div className='overflow-y-auto max-h-[90%] max-w-[600px] mx-auto'>
            <Image
              key={modalMedia[mediaIndex]?.URL}
              url={modalMedia?.[mediaIndex]?.URL as string}
              transformation={[{ quality: 100 }]}
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
}

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
