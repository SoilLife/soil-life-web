import { useEffect, useState } from 'react';
import { Typography, Icon } from 'components/atoms';
import { HomeHeader } from 'components/templates/home-header';
import Modal from 'react-modal';
import { faPlay, faLink, faBinoculars, faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
Modal.setAppElement('#__next');

export default function MediaPage() {
  const [media, setMedia] = useState<{ [category: string]: Media[] }>({});

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

                      if (url.hostname === 'www.youtube.com' || url.hostname === 'www.vimeo.com') {
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

  return (
    <>
      <HomeHeader fullpageRef={{ current: null }} hideHeader={false} />
      {Object.keys(media).map((key, index) => {
        if (media[key]) {
          return (
            <div className='container mt-28' key={index}>
              <Typography type='heading' className='text-pink-500'>
                {key}
              </Typography>
              <div className='overflow-y-hidden overflow-x-auto mt-6 min-h-[320px] flex gap-4 items-center'>
                {media[key]?.map((medium, index) => {
                  return (
                    <div key={index} className='relative flex flex-col group' onClick={() => {}}>
                      <div className='relative aspect-w-16 aspect-h-9 transition-all ease-in-out duration-500 w-64 group-hover:w-96'>
                        <img
                          key={index}
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
                            <Icon
                              icon={
                                medium.mediaType === 'video'
                                  ? faPlay
                                  : medium.mediaType === 'link'
                                  ? faLink
                                  : medium.mediaType === 'pdf'
                                  ? faFilePdf
                                  : faBinoculars
                              }
                              size='lg'
                              className={medium.mediaType === 'video' ? 'pl-1' : ''}
                            />
                          </div>
                        </div>
                      </div>
                      <p className='absolute top-[calc(105%);] transition-all ease-in duration-500 group-hover:top-auto group-hover:p-4 group-hover:bottom-0 group-hover:text-sm group-hover:text-white pointer-events-none'>
                        {medium.Title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
