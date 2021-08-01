// helpers
import { textTypeMap, textFontWeightMap, textSizeMap } from './text.utils';

// interfaces
import { TextProps } from './text.interfaces';

export function Text({ type, className, weight, size, ...props }: TextProps) {
  function getTextClasses() {
    return {
      'data-text-size': size,
      className: `${textTypeMap[type]} ${textSizeMap[size]} ${textFontWeightMap[weight]} ${className}`,
    };
  }
  switch (type) {
    case 'h1':
      return <h1 {...getTextClasses()} {...props} />;
    case 'h2':
      return <h2 {...getTextClasses()} {...props} />;
    case 'h3':
      return <h3 {...getTextClasses()} {...props} />;
    case 'p':
      return <p {...getTextClasses()} {...props} />;
    case 'span':
      return <span {...getTextClasses()} {...props} />;
    default:
      throw Error('Text type not found');
  }
}

Text.defaultProps = {
  className: '',
};
