import React from 'react';

import Header from 'components/header';

export default function DefaultLayout({ children }: React.PropsWithChildren<React.ReactNode>) {
  return (
    <div className='flex flex-col flex-grow'>
      <Header />
      {children}
    </div>
  );
}
