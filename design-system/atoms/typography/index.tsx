// helpers
import { typographyTypeMap } from './typography.utils';

// interfaces
import { TypographyProps } from './typography.interfaces';

export function Typography({ type, className, ...props }: TypographyProps) {
  switch (type) {
    case 'heading':
      return <h1 className={`${typographyTypeMap[type]} ${className}`} {...props} />;
    case 'subheading':
      return <h2 className={`${typographyTypeMap[type]} ${className}`} {...props} />;
    case 'label':
      return <h3 className={`${typographyTypeMap[type]} ${className}`} {...props} />;
    case 'paragraph':
      return <p className={`${typographyTypeMap[type]} ${className}`} {...props} />;
  }
}

Typography.defaultProps = {
  className: '',
};
