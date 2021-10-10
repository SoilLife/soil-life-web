import { forwardRef } from 'react';

export const Section = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{
    className?: string;
    ['data-anchor']?: string;
    ['data-tooltip']?: string;
  }>
>(function ({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={`section overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
});

Section.defaultProps = {
  className: '',
};
