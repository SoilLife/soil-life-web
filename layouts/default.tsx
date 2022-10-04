import React from "react";
import Head from "next/head";
import { initGoogleAnalytics, GOOGLE_ANALYTICS_ID } from "helpers/google-analytics";

export function DefaultLayout({
  title,
  description,
  children,
}: React.PropsWithChildren<{
  title: string;
  description?: string;
}>) {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/Acre-Thin.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Acre-Light.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Acre-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Acre-Medium.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Acre-Semibold.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Acre-Bold.otf" as="font" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {description && <meta name="description" content={description} />}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
        <script>{initGoogleAnalytics()}</script>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
