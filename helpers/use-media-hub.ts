import { useEffect, useState } from 'react';

export type Media = {
  Category: null | string;
  'Embedding Code': null | string;
  Location: null | string;
  Organization: null | string;
  'Other Tags': null | string[];
  Tags: null | string[];
  Title: null | string;
  URL: null | string;
  mediaType: 'video' | 'pdf' | 'link' | 'image' | 'local-image'
  thumbnail?: string;
};

let spreadsheetId = '1SCLiaORvOlBbYYFUF-4qqMjZkfEHvB_qkHXThiYz_2g';

if(process.env.NODE_ENV === 'development') {
  spreadsheetId = '1JvDhTR3MhWz5xB2j-T3DNmAr7rLQYW8M8ZTQAk3xJzk'
}

export function useMediaHub() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [media, setMedia] = useState<{ [category: string]: Media[] }>({});

  useEffect(() => {
    setIsLoading(true);
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
                      } else {
                        const pathname = url.pathname;
                        if (/.png$|.gif$/i.test(pathname)) {
                          row['mediaType'] = 'image';
                        } else if (/.pdf$/i.test(pathname)) {
                          row['mediaType'] = 'pdf';
                        } else {
                          row['mediaType'] = 'link';
                        }
                      }
                    } else if(header === 'URL' && cell?.startsWith('/images')){
                      if(/.pdf$/i.test(cell)) {
                        row['mediaType'] = 'pdf'
                        row['URL'] = cell;
                      } else {
                        row['mediaType'] = 'local-image';
                        row['URL'] = cell;
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
        })
        .catch((err: any) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
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

  return {
    loading: isLoading,
    error,
    media,
  };
}
