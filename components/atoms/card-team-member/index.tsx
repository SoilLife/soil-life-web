import { Image } from 'components/atoms';

export function CardTeamMember({ name, position, photo }: { name: string; position: string; photo?: string }) {
  return (
    <div className='p-3 text-center bg-white'>
      <div className='relative w-24 h-20 mb-2 overflow-hidden md:mb-3 md:h-32 md:w-40 lg:h-60 lg:w-64 xl:h-40 xl:w-48 2xl:h-40 2xl:w-52'>
        {photo && <Image url={photo} className='absolute top-0 left-0' />}
      </div>
      <h3 className='mb-2 text-sm md:mb-3 md:text-lg'>{name}</h3>
      <h4 className='text-xs'>{position}</h4>
    </div>
  );
}
