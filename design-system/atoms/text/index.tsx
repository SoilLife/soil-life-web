// helpers
import { textTypeMap, textFontWeightMap } from './text.utils';

// interfaces
import { TextProps } from './text.interfaces';

export function Text({ type, className, weight, ...props }: TextProps) {
  switch (type) {
    case 'h1':
      return <h1 className={`${textTypeMap[type]} ${textFontWeightMap[weight]} ${className}`} {...props} />;
    case 'h2':
      return <h2 className={`${textTypeMap[type]} ${textFontWeightMap[weight]} ${className}`} {...props} />;
    case 'h3':
      return <h3 className={`${textTypeMap[type]} ${textFontWeightMap[weight]} ${className}`} {...props} />;
    case 'p':
      return <p className={`${textTypeMap[type]} ${textFontWeightMap[weight]} ${className}`} {...props} />;
  }
}

Text.defaultProps = {
  className: '',
};
