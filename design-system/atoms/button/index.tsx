import { forwardRef, ForwardedRef } from 'react';

import { ButtonProps } from './button.interfaces';

import { buttonTypeMap, buttonSizeMap } from './button.utils';

export const Button = forwardRef(
  ({ as, size, label, type, inverted, className, external, ...props }: ButtonProps, ref: ForwardedRef<any>) => {
    if (as === 'button') {
      return (
        <button
          ref={ref}
          data-button={size}
          className={`w-max leading-none ${buttonSizeMap[size]} ${buttonTypeMap[type]} ${className}`}
          {...props}
        >
          {label}
        </button>
      );
    }

    return (
      <a
        ref={ref}
        data-button={size}
        className={`w-max inline-block cursor-pointer leading-none ${buttonSizeMap[size]} ${buttonTypeMap[type]} ${className}`}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener', href: external } : undefined)}
        {...props}
      >
        {label}
      </a>
    );
  }
);

Button.defaultProps = {
  className: '',
};
