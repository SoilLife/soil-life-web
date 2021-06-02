import React from 'react';
import Head from 'next/head';

export default function DefaultLayout({ children }: React.PropsWithChildren<React.ReactNode>) {
  return (
    <>
      <Head>
        <link rel='preload' href='/fonts/Acre-Thin.otf' as='font' crossOrigin='' />
        <link rel='preload' href='/fonts/Acre-Light.otf' as='font' crossOrigin='' />
        <link rel='preload' href='/fonts/Acre-Regular.otf' as='font' crossOrigin='' />
        <link rel='preload' href='/fonts/Acre-Medium.otf' as='font' crossOrigin='' />
        <link rel='preload' href='/fonts/Acre-Semibold.otf' as='font' crossOrigin='' />
        <link rel='preload' href='/fonts/Acre-Bold.otf' as='font' crossOrigin='' />
      </Head>
      {children}
    </>
  );
}
