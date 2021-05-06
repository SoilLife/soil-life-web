import DefaultLayout from 'layouts/default';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className='container h-full flex-grow flex'>
        <p className='max-w-2xl mx-auto text-center self-center text-5xl'>
          Oops. We couldn't find what you're looking for.
        </p>
      </div>
    </DefaultLayout>
  );
}
