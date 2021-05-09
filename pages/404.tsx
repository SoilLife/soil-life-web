import DefaultLayout from 'layouts/default';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <section className='container min-h-screen h-full flex flex-col items-center justify-center'>
        <p className='max-w-2xl mx-auto text-center text-5xl h-full mb-8'>
          Oops. We couldn't find what you're looking for.
        </p>
        <Link href='/'>
          <a className='text-lg text-blue-500'>Go back home</a>
        </Link>
      </section>
    </DefaultLayout>
  );
}
