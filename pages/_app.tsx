import './_app.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { IKContext } from 'imagekitio-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as faBrands from 'config/icon-library/fa-brands';
import * as faSolids from 'config/icon-library/fa-solids';

library.add(faSolids, faBrands);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <IKContext urlEndpoint={process.env['NEXT_PUBLIC_IMAGEKIT_URL']}>
        <div className='min-h-screen antialiased overflow-x-hidden'>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: 'https://www.thesoillife.org/',
              site_name: 'Soil Life',
            }}
          />
          <Component {...pageProps} />
        </div>
      </IKContext>
    </>
  );
}
