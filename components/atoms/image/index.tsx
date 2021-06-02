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
}) {
  return (
    <IKImage
      path={url}
      lqip={{ active: true, quality: 20 }}
      className={`${props.width ? '' : 'w-full'} h-full object-cover ${className}`}
      {...props}
    />
  );
}

Image.defaultProps = {
  className: '',
};
