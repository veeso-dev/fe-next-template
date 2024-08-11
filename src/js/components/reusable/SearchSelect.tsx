import * as React from 'react';
import * as Icon from 'react-feather';

import Container from './Container';

interface Props {
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (key: string, value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  searchResults?: SelectOption[];
  hasSetResults?: boolean;
}

export interface SelectOption {
  key: string;
  value: string;
}

const selectStyle = (
  hasSetResults?: boolean,
  disabled?: boolean,
  required?: boolean,
): string => {
  if (required === true && disabled !== true && hasSetResults !== true) {
    return 'ring-yellow-500 ring-2 bg-white';
  }

  if (disabled) {
    return 'hover:cursor-not-allowed bg-gray-50';
  }

  return 'bg-white';
};

const SearchSelect = (props: Props) => {
  const onResultClicked = (key: string, value: string) => {
    props.onSelect(key, value);
  };

  const results = props.searchResults?.map((result) => (
    <Container.Container
      key={result.key}
      onClick={() => onResultClicked(result.key, result.value)}
      className="cursor-pointer px-2 py-3 hover:bg-gray-100 rounded-lg"
    >
      <span className="capitalize">{result.value}</span>
    </Container.Container>
  ));

  return (
    <div className={`${props.className} relative`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {props.icon || <Icon.Search size={20} className="text-brand" />}
      </div>
      <input
        disabled={props.disabled}
        type="search"
        className={`${selectStyle(
          props.hasSetResults,
          props.disabled,
          props.required,
        )} block w-full p-4 pl-10 text-sm text-text border border-gray-300 rounded-lg focus:ring-brand focus:border-brand focus-visible:outline-none`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
      {results && !props.disabled && (
        <Container.FlexCols className="absolute border bg-white text-text w-full rounded-lg z-[99]">
          {results}
        </Container.FlexCols>
      )}
    </div>
  );
};

export default SearchSelect;
