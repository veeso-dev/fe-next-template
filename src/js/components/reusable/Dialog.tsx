import * as React from 'react';

import Cta from './Cta';
import Heading from './Heading';
import Container from './Container';

interface Props {
  children?: React.ReactNode | React.ReactNode[] | string;
  closeText: string;
  onClose: () => void;
  title: string;
}

const Dialog = (props: Props) => (
  <Container.Container className="h-screen left-0 overflow-hidden fixed right-0 top-0 w-screen z-50">
    <Container.Container className="bg-gray-800/60 h-screen w-screen" />
    <Container.Container className="bg-white bottom-0 h-fit left-0 m-auto p-8 fixed right-0 top-0 w-3/6">
      <Heading.H2>{props.title}</Heading.H2>
      <Container.Container className="text-lg p-4">
        {props.children}
      </Container.Container>
      <Container.Flex className="justify-center m-auto w-3/6">
        <Cta onClick={props.onClose}>{props.closeText}</Cta>
      </Container.Flex>
    </Container.Container>
  </Container.Container>
);

export default Dialog;
