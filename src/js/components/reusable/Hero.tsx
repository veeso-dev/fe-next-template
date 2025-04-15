import * as React from 'react';
import { getIdFromHash } from '../../utils/routes';
import Container from './Container';

const Hero = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`${props.className} flex flex-col items-center justify-items-center min-h-screen`}
  >
    {props.children}
  </div>
);

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children?: string | React.ReactNode | React.ReactNode[];
  scrollTo?: string;
  scrollAnimationTimeout?: number;
}

export const Title = (props: TitleProps) => {
  let onAnimationEnded = undefined;
  if (props.scrollTo) {
    onAnimationEnded = () => {
      const hash = getIdFromHash();
      // play animation if hash is empty
      if (!hash && window.scrollY === 0) {
        const scroll = () =>
          document
            .getElementById(props.scrollTo ?? '')
            ?.scrollIntoView({ behavior: 'smooth' });

        if (props.scrollAnimationTimeout) {
          setTimeout(scroll, props.scrollAnimationTimeout);
        } else {
          scroll();
        }
      }
    };
  }

  return (
    <Container.Flex className="items-center justify-center w-full">
      <h1
        className={`${props.className} px-8 text-white animate__animated animate__fadeIn animate__slow product--hero-text text-3xl sm:text-2xl text-center tracking-wide font-bold`}
        onAnimationEnd={onAnimationEnded}
      >
        {props.children}
      </h1>
    </Container.Flex>
  );
};

export default Hero;
