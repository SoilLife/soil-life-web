export function Section({
  className,
  children,
  ...props
}: React.PropsWithChildren<{
  className?: string;
  ['data-anchor']?: string;
  ['data-tooltip']?: string;
}>) {
  return (
    <div className={`section overflow-y-hidden ${className}`} {...props}>
      {children}
    </div>
  );
}

Section.defaultProps = {
  className: '',
};
