import * as React from 'react';
import Container from './Container';

interface Props {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange?: () => void;
}

const Switch = (props: Props) => (
  <Container.FlexRow className="items-center justify-between gap-12">
    <label
      className={`relative inline-flex items-center ${
        props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <div className="w-11 absolute h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-200 rounded-full peer-checked:after:translate-x-full peer peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 600 peer-checked:bg-brand"></div>
    </label>
    <span className="ml-3 text-sm font-medium text-brand">{props.label}</span>
  </Container.FlexRow>
);

export default Switch;
