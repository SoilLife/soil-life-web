import { useEffect, useState } from 'react';
import { Typography, Icon, Modal } from 'components/atoms';
import { HomeHeader } from 'components/templates/home-header';
import { faPlay, faLink, faImage, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from './media.module.css';
import ReactPlayer from 'react-player';

type Media = {
  Category: null | string;
  'Embedding Code': null | string;
  Location: null | string;
  Organization: null | string;
  'Other Tags': null | string[];
  Tags: null | string[];
  Title: null | string;
  URL: null | string;
  mediaType: 'video' | 'pdf' | 'link' | 'image';
  thumbnail?: string;
};

const spreadsheetId = '1SCLiaORvOlBbYYFUF-4qqMjZkfEHvB_qkHXThiYz_2g';

export default function MediaPage() {
  const [media, setMedia] = useState<{ [category: string]: Media[] }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState<Media[]>([]);
  const [mediaIndex, setMediaIndex] = useState(0);

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
                            row['thumbnail'] = `http://img.youtube.com/vi/${youtubeId}/0.jpg`;
                          } else {
                            console.log(url);
                          }
                        }
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

  console.log(modalMedia[mediaIndex]?.URL);

  return (
    <>
      <HomeHeader fullpageRef={{ current: null }} hideHeader={false} />
      <div className='my-28 space-y-16'>
        {Object.keys(media).map((key, index) => {
          if (media[key]) {
            return (
              <div className={`container`} key={index}>
                <Typography type='heading' className='text-pink-500'>
                  {key}
                </Typography>
                <div className={`overflow-y-hidden flex items-center overflow-x-auto min-h-[320px]`}>
                  <div className={`flex gap-4 items-center ${styles['media-section']}`}>
                    {media[key]?.map((medium, index) => {
                      return (
                        <button
                          key={`${medium.Title}_${index}`}
                          className='focus:ring-4 focus:ring-pink-500'
                          onClick={handleModalOpen({ key, index })}
                        >
                          <div className='relative flex flex-col group'>
                            <div className='relative aspect-w-16 aspect-h-9 transition-all ease-in-out duration-500 w-64 group-hover:w-96'>
                              <img
                                key={`${medium.Title}_${index}`}
                                src={
                                  medium.mediaType === 'video' && medium.thumbnail
                                    ? medium.thumbnail
                                    : medium.mediaType === 'image'
                                    ? medium?.URL ?? ''
                                    : '/images/logo.svg'
                                }
                                className={medium.mediaType === 'video' && medium.thumbnail ? 'object-cover' : ''}
                              />
                              <div className='flex opacity-0 transition-all duration-200 ease absolute group-hover:opacity-100 items-center justify-center h-full w-full group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent'>
                                <div className='w-10 h-10 rounded-full text-pink-600 shadow-md cursor-pointer ring-2 ring-white bg-pink-800 flex items-center justify-center'>
                                  <div>
                                    <Icon
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
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
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
        {modalMedia.length > 0 && modalMedia?.[mediaIndex]?.URL && (
          <ReactPlayer
            controls={true}
            key={`${modalMedia[mediaIndex]?.Title}_${mediaIndex}`}
            height={'90%'}
            width={'100%'}
            url={modalMedia[mediaIndex]?.URL as string}
          />
        )}
      </Modal>
    </>
  );
}
