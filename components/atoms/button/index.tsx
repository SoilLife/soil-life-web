import { forwardRef, ForwardedRef } from 'react';

import { ButtonProps } from './button.interfaces';

import { buttonTypeMap, buttonSizeMap } from './button.utils';

export const Button = forwardRef(
  ({ as, size, label, type, inverted, className = '', external, ...props }: ButtonProps, ref: ForwardedRef<any>) => {
    if (as === 'button') {
      return (
        <button ref={ref} className={`${buttonSizeMap[size]} ${buttonTypeMap[type]} ${className}`} {...props}>
          {label}
        </button>
      );
    }

    return (
      <a
        ref={ref}
        className={`inline-block cursor-pointer ${buttonSizeMap[size]} ${buttonTypeMap[type]} ${className}`}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener', href: external } : undefined)}
        {...props}
      >
        {label}
      </a>
    );
  }
);
