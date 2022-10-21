import "./_app.css";
import "helpers/polyfill-replaceAll";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { IKContext } from "imagekitio-react";
import { AppProvider } from "context";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as faBrands from "config/icon-library/fa-brands";
import * as faSolids from "config/icon-library/fa-solids";

library.add(faSolids, faBrands);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <IKContext urlEndpoint="https://ik.imagekit.io/q9koofhilw/">
          <div className="min-h-screen antialiased">
            <DefaultSeo
              openGraph={{
                type: "website",
                locale: "en_IE",
                url: "https://www.soillife.org/",
                site_name: "Soil Life",
              }}
            />
            <GoogleAnalytics trackPageViews gaMeasurementId="G-Z3E3TD3PZ9" />
            <Component {...pageProps} />
          </div>
        </IKContext>
      </AppProvider>
    </>
  );
}
