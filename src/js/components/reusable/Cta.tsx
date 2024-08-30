import * as React from 'react';
import Button from './Button';

type ButtonType = 'submit' | 'reset' | 'button' | undefined;

interface Props {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  transparent?: boolean;
  className?: string;
  type?: ButtonType;
}

const Cta = (props: Props) => {
  const style = {
    backgroundColor: props.transparent ? 'rgba(0,0,0,0)' : '#31363b',
  };

  return (
    <Button.Primary
      type={props.type}
      className={`${props.className} text-xl w-auto h-fit px-24 py-4`}
      style={style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button.Primary>
  );
};

export const Alternative = (props: Props) => {
  return (
    <Button.Alternative
      type={props.type}
      className={`${props.className} text-lg h-fit px-24 py-4`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button.Alternative>
  );
};

export default Cta;
