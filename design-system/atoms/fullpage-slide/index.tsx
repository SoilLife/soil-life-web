export function Slide({
  className,
  children,
  ...props
}: React.PropsWithChildren<{ className?: string; ['data-anchor']?: string }>) {
  return (
    <div className={`slide relative ${className}`} {...props}>
      {children}
    </div>
  );
}

Slide.defaultProps = {
  className: '',
};
