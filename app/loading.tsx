import * as React from 'react';

import Page from '@/src/js/components/reusable/Page';
import Container from '@/src/js/components/reusable/Container';
import Spinner from '@/src/js/components/reusable/Spinner';

const LoadingPage = () => {
  return (
    <Page.BlankPage>
      <Page.Body>
        <Container.FlexCols className="fixed w-full left-0 right-0 top-0 bottom-0 m-auto py-8 items-center justify-center gap-8">
          <Spinner size={'w-32 h-32'} />
          <span className="text-brand text-2xl">Caricamento...</span>
        </Container.FlexCols>
      </Page.Body>
    </Page.BlankPage>
  );
};

export default LoadingPage;
