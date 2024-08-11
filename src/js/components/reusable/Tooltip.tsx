import * as React from 'react';

const Tooltip = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      id={props.id}
      className={`absolute sm:relative z-10 left-full sm:left-0 top-1/2 sm:top-0 ml-2 sm:ml-0 transform -translate-y-1/2 sm:-translate-y-0 p-2 rounded-lg shadow-sm tooltip ${props.className}`}
    >
      {props.children}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltip;
