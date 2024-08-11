import * as React from 'react';
import Container from './Container';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface Props {
  className?: string;
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radioGroup: string;
  value?: string;
  options: Option[];
}

const Radio = (props: Props) => (
  <Container.FlexCols className={`${props.className} gap-2`}>
    {props.label && <span className="text-text">{props.label}</span>}
    {props.options.map((option) => (
      <Container.Flex key={option.value} className="items-center mb-4">
        <input
          id={option.id}
          type="radio"
          disabled={props.disabled}
          name={props.radioGroup}
          value={option.value}
          onChange={props.onChange}
          checked={props.value === option.value}
          className="focus:ring-brand h-4 w-4 accent-brand text-brand border-gray-300"
        />
        <label
          htmlFor={option.id}
          className="ml-2 block text-sm font-medium text-text"
        >
          {option.label}
        </label>
      </Container.Flex>
    ))}
  </Container.FlexCols>
);

export default Radio;
