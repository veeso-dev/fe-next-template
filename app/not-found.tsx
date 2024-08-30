import * as React from 'react';

import Page from '@/src/js/components/reusable/Page';
import Container from '@/src/js/components/reusable/Container';

import Paragraph from '@/src/js/components/reusable/Paragraph';
import Link from '@/src/js/components/reusable/Link';
import { Route } from '@/src/js/utils/routes';

const NotFound = () => {
  return (
    <Page.BlankPage>
      <Page.BlankPage>
        <Page.Body>
          <Container.FlexCols className="py-8 items-center justify-center gap-8">
            <span className="text-brand text-2xl">Pagina non trovata</span>
            <Paragraph.Center>
              Non siamo stati in grado di trovare la pagina che stavi cercando.
            </Paragraph.Center>
            <Link.Next className="!text-brand text-xl" href={Route.HOME}>
              Torna alla home
            </Link.Next>
          </Container.FlexCols>
        </Page.Body>
      </Page.BlankPage>
    </Page.BlankPage>
  );
};

export default NotFound;
