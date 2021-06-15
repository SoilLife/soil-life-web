import { Image } from '../image';

export function Card({ imageUrl }: { imageUrl: string }) {
  return (
    <div className='p-4'>
      <Image url={imageUrl} />
    </div>
  );
}
