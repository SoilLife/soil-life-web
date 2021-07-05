import { useEffect, useState } from 'react';
import { Typography } from 'components/atoms';
import { HomeHeader } from 'components/templates/home-header';

type Media = {
  Category:
    | null
    | 'Video'
    | 'Soil Profiles'
    | 'Educational Video'
    | 'Infographic'
    | 'Educational Resources'
    | 'Reports'
    | 'Learning Environment'
    | 'Website';
  'Embedding Code': null | string;
  Location: null | string;
  Organization: null | string;
  'Other Tags': null | string[];
  Tags: null | string[];
  Title: null | string;
  URL: null | string;
  isVideo: boolean;
  thumbnail?: string;
};

const spreadsheetId = '1SCLiaORvOlBbYYFUF-4qqMjZkfEHvB_qkHXThiYz_2g';

export default function MediaPage() {
  const [videos, setVideos] = useState<Media[]>([]);
  const [educationalVideos, setEducationalVideos] = useState<Media[]>([]);
  const [soilProfiles, setSoilProfiles] = useState<Media[]>([]);
  const [educationalResources, setEducationalResources] = useState<Media[]>([]);
  const [learningEnvironments, setLearningEnvironments] = useState<Media[]>([]);
  const [websites, setWebsites] = useState<Media[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const media = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?`)
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
                        row['isVideo'] = true;
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
        });
      if (media) {
        const videos = media.filter((medium) => medium.Category === 'Video');
        const educationalVideos = media.filter((medium) => medium.Category === 'Educational Video');
        const soilProfiles = media.filter((medium) => medium.Category === 'Soil Profiles');
        const educationalResources = media.filter((medium) => medium.Category === 'Educational Resources');
        const learningEnvironments = media.filter((medium) => medium.Category === 'Learning Environment');
        const websites = media.filter((medium) => medium.Category === 'Website');

        setVideos(videos);
        setEducationalVideos(educationalVideos);
        setSoilProfiles(soilProfiles);
        setEducationalResources(educationalResources);
        setLearningEnvironments(learningEnvironments);
        setWebsites(websites);
      }
    }
    fetchVideos();
  }, []);

  return (
    <>
      <HomeHeader fullpageRef={{ current: null }} hideHeader={false} />

      <div className='container mt-28'>
        <Typography type='heading' className='text-pink-500'>
          videos
        </Typography>
        <div className='overflow-hidden mt-6 min-h-[256px]'>
          <div className='overflow-x-auto overflow-y-hidden flex gap-4'>
            {videos.map((v, index) => {
              if (v.thumbnail) {
                return (
                  <div className='flex flex-col transition-transform ease-in-out duration-200 transform hover:scale-105 w-64'>
                    <div className='aspect-w-16 aspect-h-9 relative w-64'>
                      <img key={index} src={v.thumbnail} className='absolute h-full w-full object-cover' />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <div className='container mt-10'>
        <Typography type='heading' className='text-pink-500'>
          educational videos
        </Typography>
        <div className='overflow-hidden mt-6 min-h-[256px]'>
          <div className='overflow-x-auto overflow-y-hidden flex gap-4'>
            {educationalVideos.map((v, index) => {
              if (v.thumbnail) {
                return (
                  <div className='flex flex-col transition-transform ease-in-out duration-200 transform hover:scale-105 w-64'>
                    <div className='aspect-w-16 aspect-h-9 relative w-64'>
                      <img key={index} src={v.thumbnail} className='absolute h-full w-full object-cover' />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <div className='container mt-10'>
        <Typography type='heading' className='text-pink-500'>
          soil profiles videos
        </Typography>
        <div className='overflow-hidden mt-6 min-h-[256px]'>
          <div className='overflow-x-auto overflow-y-hidden flex gap-4'>
            {soilProfiles.map((v, index) => {
              if (v.thumbnail) {
                return (
                  <div className='flex flex-col transition-transform ease-in-out duration-200 transform hover:scale-105 w-64'>
                    <div className='aspect-w-16 aspect-h-9 relative w-64'>
                      <img key={index} src={v.thumbnail} className='absolute h-full w-full object-cover' />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <div className='container mt-10'>
        <Typography type='heading' className='text-pink-500'>
          educational resources
        </Typography>
        <div className='overflow-hidden mt-6 min-h-[256px]'>
          <div className='overflow-x-auto overflow-y-hidden flex gap-4'>
            {educationalResources.map((resource, index) => {
              if (resource.URL) {
                return (
                  <a href={resource.URL} target='_blank' rel='noopener noreferrer'>
                    <div className='flex flex-col transition-transform ease-in-out duration-200 transform hover:scale-105 w-64'>
                      <div className='aspect-w-16 aspect-h-9 relative w-64'>
                        <img key={index} src='/images/logo.svg' className='absolute inset-0 p-4' />
                      </div>
                    </div>
                  </a>
                );
              } else return null;
            })}
          </div>
        </div>
      </div>

      <div className='container mt-10'>
        <Typography type='heading' className='text-pink-500'>
          learning environments
        </Typography>
        <div className='overflow-hidden mt-6 min-h-[256px]'>
          <div className='overflow-x-auto overflow-y-hidden flex gap-4'>
            {learningEnvironments.map((resource, index) => {
              if (resource.URL) {
                return (
                  <a href={resource.URL} target='_blank' rel='noopener noreferrer'>
                    <div className='flex flex-col transition-transform ease-in-out duration-200 transform hover:scale-105 w-64'>
                      <div className='aspect-w-16 aspect-h-9 relative w-64'>
                        <img key={index} src='/images/logo.svg' className='absolute inset-0 p-4' />
                      </div>
                    </div>
                  </a>
                );
              } else return null;
            })}
          </div>
        </div>
      </div>

      <div className='container my-10'>
        <Typography type='heading' className='text-pink-500'>
          websites
        </Typography>
        <div className='overflow-hidden mt-6 min-h-[256px]'>
          <div className='overflow-x-auto overflow-y-hidden flex gap-4'>
            {websites.map((resource, index) => {
              if (resource.URL) {
                return (
                  <a href={resource.URL} target='_blank' rel='noopener noreferrer'>
                    <div className='flex flex-col transition-transform ease-in-out duration-200 transform hover:scale-105 w-64'>
                      <div className='aspect-w-16 aspect-h-9 relative w-64'>
                        <img key={index} src='/images/logo.svg' className='absolute inset-0 p-4' />
                      </div>
                    </div>
                  </a>
                );
              } else return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
