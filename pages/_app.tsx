import './_app.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
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
