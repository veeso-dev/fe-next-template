import * as React from 'react';

const Blue = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <span
      id={props.id}
      className="w-fit bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
      {...props}
    >
      {props.children}
    </span>
  );
};

const Green = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <span
      id={props.id}
      className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded"
      {...props}
    >
      {props.children}
    </span>
  );
};

const Yellow = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <span
      id={props.id}
      className="w-fit bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
      {...props}
    >
      {props.children}
    </span>
  );
};

export default {
  Blue,
  Green,
  Yellow,
};
