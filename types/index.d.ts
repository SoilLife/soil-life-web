declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "imagekitio-react";
declare module "public-google-sheets-parser";
declare module "feather-icons-react";
declare module "react-graph-vis";

type Color = "pink" | "teal" | "blue" | "yellow" | "orange" | "gray";

interface Window {
  dataLayer: (string | Date)[];
}

const dataLayer: Window.dataLayer;
