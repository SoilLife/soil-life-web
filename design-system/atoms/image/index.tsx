import { IKImage } from 'imagekitio-react';
import React from 'react';

export function Image({
  url,
  className,
  ...props
}: {
  url: string;
  height?: string;
  width?: string;
  loading?: 'lazy';
  alt?: string;
  className?: string;
  transformation?: {
    quality?: number;
    height?: number;
    width?: number;
    rotation?: number;
    cropMode?: string;
    fo?: string;
    rotate?: number;
  }[];
  lqip?: { active?: boolean } & (
    | {
        quality?: number;
        blur?: number;
        raw?: never;
      }
    | { raw?: string; quality?: never; blur?: never }
  );
  queryParameters?: {
    [key: string]: React.ReactText;
  };
  onClick?: () => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}) {
  return <IKImage path={url} className={`${props.width ? '' : 'w-full'} h-full ${className}`} {...props} />;
}

Image.defaultProps = {
  className: '',
  lqip: {
    active: true,
    quality: 20,
  },
};
