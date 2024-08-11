import * as React from 'react';

interface Props {
  progress: number;
  max: number;
  percentage?: boolean;
}

const ProgressBar = (props: Props) => {
  const percentage = Math.round((props.progress * 100) / props.max);
  let label = `${props.progress}/${props.max}`;
  if (props.percentage) {
    label = `${percentage.toString()}%`;
  }

  const className = `${
    props.progress > 0 ? 'bg-brand' : ''
  } text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`;

  const fillerStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="w-full bg-gray-200 rounded-full 700">
      <div className={className} style={fillerStyles}>
        {label}
      </div>
    </div>
  );
};

export default ProgressBar;
