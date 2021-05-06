import './_app.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as faBrands from 'config/icon-library/fa-brands';
import * as faSolids from 'config/icon-library/fa-solids';

library.add(faSolids, faBrands);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='min-h-screen flex flex-col antialiased overflow-hidden'>
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
    </>
  );
}
