export function Modal({ render, show }: { render: React.ReactNode; show: boolean }) {
  if (show) {
    return <div className='absolute min-h-screen h-full w-full top-0 left-0 bg-black bg-opacity-50'>{render}</div>;
  }
  return null;
}
