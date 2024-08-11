'use client';

import * as React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label?: string;
  containerClassName?: string;
  validate?: (
    input: string | number | readonly string[] | undefined,
  ) => boolean;
  validationMessage?: string;
}

const inputValidationStyle = (
  validate:
    | undefined
    | ((input: string | number | readonly string[] | undefined) => boolean),
  input: string | number | readonly string[] | undefined,
  hasFocus: boolean,
  required?: boolean,
  disabled?: boolean,
): string => {
  if (
    required === true &&
    disabled !== true &&
    (input === undefined || input.toString().length === 0)
  ) {
    return 'ring-yellow-500 ring-2';
  }

  if (
    validate === undefined ||
    input === undefined ||
    input.toString().length === 0 ||
    hasFocus
  ) {
    return '';
  }

  if (!validate(input)) {
    return 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500';
  }

  return '';
};

const Input = (props: InputProps) => {
  const [hasFocus, setHasFocus] = React.useState(false);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true);
    if (props.onFocus) props.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <div className={`${props.containerClassName} mb-6`}>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-700 "
        >
          {props.label}
          {props.required && ' *'}
        </label>
      )}
      <input
        type={props.type}
        className={`${props.className} ${inputValidationStyle(
          props.validate,
          props.value,
          hasFocus,
          props.required,
          props.disabled,
        )} ${
          props.disabled ? 'bg-gray-50' : 'bg-white'
        } border border-gray-300 text-text text-sm rounded-lg focus:ring-brand focus:border-brand p-4 focus-visible:outline-none`}
        readOnly={props.readOnly}
        onChange={props.onChange}
        required={props.required}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {props.validate &&
        props.validationMessage &&
        (props.value ? props.value.toString().length > 0 : false) &&
        !hasFocus &&
        !props.validate(props.value) && (
          <span className="text-red-500 text-sm">
            {props.validationMessage}
          </span>
        )}
    </div>
  );
};

interface IconInputProps extends InputProps {
  icon: JSX.Element;
}

const IconInput = (props: IconInputProps) => {
  const [hasFocus, setHasFocus] = React.useState(false);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true);
    if (props.onFocus) props.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <div className={`${props.containerClassName} mb-6`}>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-text "
        >
          {props.label}
          {props.required && ' *'}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {props.icon}
        </div>
        <input
          type={props.type}
          className={`${props.className} ${inputValidationStyle(
            props.validate,
            props.value,
            hasFocus,
            props.required,
            props.disabled,
          )} pl-10 block w-full ${
            props.disabled ? 'bg-gray-50' : 'bg-white'
          } border border-gray-300 text-text text-sm rounded-lg focus:ring-brand focus:border-brand p-4 focus-visible:outline-none`}
          readOnly={props.readOnly}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          onFocus={onFocus}
          onBlur={onBlur}
          required={props.required}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </div>
      {props.validate &&
        props.validationMessage &&
        (props.value ? props.value.toString().length > 0 : false) &&
        !hasFocus &&
        !props.validate(props.value) && (
          <span className="text-red-500 text-sm">
            {props.validationMessage}
          </span>
        )}
    </div>
  );
};

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string;
  label?: string;
  containerClassName?: string;
}

const Textarea = (props: TextAreaProps) => (
  <div className={`${props.containerClassName} mb-6`}>
    {props.label && (
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-text "
      >
        {props.label}
      </label>
    )}
    <textarea
      id="message"
      rows={props.rows}
      className={`${props.className} block p-2.5 w-full text-sm text-text bg-white rounded-lg border border-gray-300 focus:ring-band focus:border-brand focus-visible:outline-none`}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      name={props.name}
      value={props.value}
    ></textarea>
  </div>
);

export default {
  IconInput,
  Input,
  Textarea,
};
