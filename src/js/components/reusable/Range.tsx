import * as React from 'react';
import Container from './Container';

interface RangeProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label?: string;
  containerClassName?: string;
}

const Default = (props: RangeProps) => (
  <Container.Container>
    {props.label && (
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-brandAlt"
      >
        {props.label}
      </label>
    )}
    <input
      id={props.id}
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={props.onChange}
      className="w-full h-2 bg-gray-200 text-brand rounded-lg appearance-none cursor-pointer accent-brand"
    />
  </Container.Container>
);

export default {
  Default,
};
