import { IKImage } from 'imagekitio-react';

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
