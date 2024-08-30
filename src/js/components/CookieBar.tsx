'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { hasCookiePreferences, acceptAllCookies } from '../utils/cookies';
import { Route } from '../utils/routes';
import Container from './reusable/Container';
import Heading from './reusable/Heading';
import Paragraph from './reusable/Paragraph';
import Link from './reusable/Link';
import Button from './reusable/Button';

const CookieBar = () => {
  const router = useRouter();
  const [hasCookieBar, setHasCookieBar] = React.useState(false);

  const onAcceptAll = () => {
    acceptAllCookies();
    onCookieBarClose();
    // TODO: init ga consent etc
  };

  const onCookieBarClose = () => {
    setHasCookieBar(false);
  };

  const onGoToPolicy = () => {
    router.push(Route.url(Route.COOKIE_POLICY));
  };

  // init GA consent
  React.useEffect(() => {
    // TODO: init ga consent etc
    setTimeout(() => {
      setHasCookieBar(!hasCookiePreferences());
    }, 1000);
  }, []);

  return (
    <Container.Container
      className={`${
        hasCookieBar ? 'animate__animated animate__slideInUp' : 'hidden'
      } fixed z-50 right-0 left-0 w-full bottom-4 max-w-[640px] sm:max-w-[768px]`}
    >
      <Container.Container className="bg-white shadow-2xl rounded border m-8 p-10 sm:h-2/6 sm:mx-8 sm:m-2 sm:p-4">
        <Container.FlexCols className="justify-between sm:h-full">
          <Container.Container className="sm:w-full sm:overflow-y-auto">
            <Heading.H2 className="sm:py-0">Cookie Policy</Heading.H2>
            <Paragraph.Leading className="sm:text-sm">
              Questo sito utilizza cookie per migliorare l&apos;esperienza di
              navigazione degli utenti e per raccogliere informazioni
              sull&apos;utilizzo del sito stesso. Utilizziamo sia cookie tecnici
              sia cookie di parti terze per inviare messaggi promozionali sulla
              base dei comportamenti degli utenti. Può conoscere i dettagli
              consultando la nostra{' '}
              <Link.Paragraph href={Route.COOKIE_POLICY}>
                Cookie Policy.
              </Link.Paragraph>
            </Paragraph.Leading>
          </Container.Container>
          <Container.FlexRow className="justify-start gap-4 sm:my-2">
            <Button.Primary
              onClick={onAcceptAll}
              className="sm:text-sm sm:px-4 sm:py-2"
            >
              Accetta tutti i cookie
            </Button.Primary>
            <Button.Alternative
              onClick={onGoToPolicy}
              className="sm:text-sm sm:px-4 sm:py-2"
            >
              Personalizza
            </Button.Alternative>
          </Container.FlexRow>
        </Container.FlexCols>
      </Container.Container>
    </Container.Container>
  );
};

export default CookieBar;
