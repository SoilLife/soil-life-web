import { forwardRef, ForwardedRef } from 'react';

import { ButtonProps } from './button.interfaces';

import { buttonTypeMap, buttonSizeMap } from './button.utils';

export const Button = forwardRef(
  ({ size, label, type, inverted, className, external, ...props }: ButtonProps, ref: ForwardedRef<any>) => {
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
);

Button.defaultProps = {
  className: '',
};
