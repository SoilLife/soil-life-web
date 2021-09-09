import { Image, Text } from 'design-system/atoms';

export function CardTeamMember({ name, position, photo }: { name: string; position: string; photo?: string }) {
  return (
    <div className='p-3 text-center bg-white'>
      <div
        className={`relative w-24 h-20 mx-auto mb-2 overflow-hidden
      md:mb-3 md:h-32 md:w-40
      lg:h-60 lg:w-64
      xl:h-40 xl:w-48
      2xl:h-40 2xl:w-52`}
      >
        {photo && <Image url={photo} className='absolute top-0 left-0 object-cover' />}
      </div>
      <Text type='h2' weight='medium' size='xs'>
        {name}
      </Text>
      <Text type='h3' weight='light' size='2xs'>
        {position}
      </Text>
    </div>
  );
}
