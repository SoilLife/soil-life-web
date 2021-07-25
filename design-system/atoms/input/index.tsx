import { textSizeMap } from 'design-system/atoms/text/text.utils';

export function Input({ id, label }: { id: string; label: string }) {
  return (
    <div className='relative'>
      <input type='text' id={id} name={label} className={`font-acre-thin ${textSizeMap.sm} peer`} placeholder={label} />
      <label
        htmlFor={id}
        className={`${textSizeMap.md} absolute top-1/2 left-4 transform -translate-y-1/2 transition-all duration-75 ease-in hidden`}
      >
        {label}
      </label>
    </div>
  );
}
