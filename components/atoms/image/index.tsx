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
}) {
  return (
    <IKImage
      path={url}
      lqip={{
        active: true,
        quality: 20,
      }}
      loading='lazy'
      className={`${props.width ? '' : 'w-full'} h-full ${className}`}
      {...props}
    />
  );
}

Image.defaultProps = {
  className: '',
};
