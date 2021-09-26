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
  transformation?: any;
  lqip?: any;
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
