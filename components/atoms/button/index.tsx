import { ButtonProps } from './button.interfaces';

import { buttonTypeMap } from './button.utils';

export function Button({ label, type, inverted, className = '', ...props }: ButtonProps) {
  return (
    <button className={`px-4 py-2 ${buttonTypeMap[type]} ${className}`} {...props}>
      {label}
    </button>
  );
}
