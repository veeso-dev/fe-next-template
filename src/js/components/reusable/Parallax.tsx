import * as React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  height: string;
  width: string;
  image: string;
  children?: React.ReactNode | React.ReactNode[] | string;
}

const Parallax = (props: Props) => {
  const parallaxStyle = {
    backgroundImage: `url(${props.image})`,
    width: props.width,
    height: props.height,
  };

  return (
    <div className={`${props.className} h-auto w-full relative`}>
      <div
        className="overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover"
        style={parallaxStyle}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Parallax;
