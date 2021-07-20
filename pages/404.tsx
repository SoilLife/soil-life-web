import { DefaultLayout } from 'layouts';
import Link from 'next/link';
import { HomeHeader } from 'design-system/templates';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <HomeHeader fullpageRef={{ current: null }} hideHeader={false} />
      <section className='container flex flex-col items-center justify-center h-full min-h-screen'>
        <p className='h-full max-w-2xl mx-auto mb-8 text-5xl text-center'>
          Oops. We couldn't find what you're looking for.
        </p>
        <Link href='/'>
          <a className='text-lg text-blue-500'>Go back home</a>
        </Link>
      </section>
    </DefaultLayout>
  );
}
