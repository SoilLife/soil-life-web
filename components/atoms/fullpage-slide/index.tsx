export function Slide({
  className,
  children,
  ...props
}: React.PropsWithChildren<{ className?: string; ['data-anchor']?: string }>) {
  return (
    <div className={`slide ${className}`} {...props}>
      {children}
    </div>
  );
}

Slide.defaultProps = {
  className: '',
};
