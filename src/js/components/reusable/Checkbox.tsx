import * as React from 'react';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label?: string;
  containerClassName?: string;
  required?: boolean;
  onChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const selectStyle = (
  checked?: boolean,
  disabled?: boolean,
  required?: boolean,
): string => {
  if (required === true && disabled !== true && checked !== true) {
    return 'ring-yellow-500 ring-2 bg-white';
  }

  if (disabled) {
    return 'bg-gray-250';
  }

  return 'bg-white';
};

const Checkbox = (props: CheckboxProps) => (
  <div className={`${props.className} flex items-center mr-4`}>
    <input
      id={props.id}
      type="checkbox"
      checked={props.checked}
      onChange={props.onChecked}
      disabled={props.disabled}
      required={props.required}
      className={`${selectStyle(
        props.checked,
        props.disabled,
        props.required,
      )} w-6 h-6 text-brandAlt accent-brand bg-gray-100 border-gray-300 rounded focus:ring-green-800 focus:ring-2`}
    />
    {props.label && (
      <label htmlFor={props.id} className="ml-2 text-md font-medium text-text">
        {props.label}
        {props.required && ' *'}
      </label>
    )}
  </div>
);

export default Checkbox;
