import { SocialMediaIcons } from 'components/social-media-icons';
import { IKImage } from 'imagekitio-react';

export function Footer() {
  return (
    <footer>
      <div className='container flex justify-between items-center'>
        <IKImage path='/soil_all_connected_Xgb0g5f3Fqm.png' width='400px' />
        <div className='w-1/3'>
          <p className='bg-pink-500 text-white p-1 mb-6'>stay connected.</p>
          <SocialMediaIcons className='flex gap-4 mb-6' />
          <p className='text-right text-teal-500 text-lg'>
            soil life is a non-profit based out of uc davis and supported by the soils & biogeochemistry graduate group.
            we are on a mission to change the way the world looks at soil.
          </p>
        </div>
      </div>
    </footer>
  );
}
