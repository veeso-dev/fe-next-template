import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { navigate, Link } from 'gatsby';

import {
  hasCookiePreferences,
  isAnalyticsCookiesConsentGiven,
  acceptAllCookies,
} from '../utils/cookies';
import { setGaConsent, initGaConsent } from '../utils/analytics';
import { Route } from '../utils/routes';
import Container from './reusable/Container';
import Heading from './reusable/Heading';
import Paragraph from './reusable/Paragraph';
import Cta, { Alternative } from './reusable/Cta';
import RichTextFormattedMessage from './reusable/RichTextFormattedMessage';

const CookieBar = () => {
  const [hasCookieBar, setHasCookieBar] = React.useState(false);

  const onAcceptAll = () => {
    acceptAllCookies();
    onCookieBarClose();
    setGaConsent(false, true);
  };

  const onCookieBarClose = () => {
    setHasCookieBar(false);
  };

  const onGoToPolicy = () => {
    navigate(Route.url(Route.COOKIE_POLICY));
  };

  // init GA consent
  React.useEffect(() => {
    initGaConsent(false, isAnalyticsCookiesConsentGiven());
    setTimeout(() => {
      setHasCookieBar(!hasCookiePreferences());
    }, 1000);
  }, []);

  return (
    <Container.Container
      className={`${
        hasCookieBar ? 'animate__animated animate__slideInUp' : 'hidden'
      } fixed z-50 right-0 left-0 w-full bottom-4`}
    >
      <Container.Container className="bg-white shadow-2xl rounded border m-8 p-10 sm:h-2/6 sm:mx-8 sm:m-2 sm:p-4">
        <Container.FlexResponsiveRow className="justify-between sm:h-full">
          <Container.Container className="sm:w-full sm:overflow-y-auto">
            <Heading.H2 className="sm:py-0">
              <FormattedMessage id="cookies.bar.title" />
            </Heading.H2>
            <Paragraph.Leading className="sm:text-sm">
              <RichTextFormattedMessage id="cookies.bar.body" />{' '}
              <Link
                className="hover:underline font-bold block"
                to={Route.url(Route.COOKIE_POLICY)}
              >
                <RichTextFormattedMessage id="cookies.bar.clickHereToPolicy" />.
              </Link>
            </Paragraph.Leading>
          </Container.Container>
          <Container.Flex className="flex-col sm:flex-row justify-around gap-4 sm:my-2">
            <Cta onClick={onAcceptAll} className="sm:text-sm sm:px-4 sm:py-2">
              <FormattedMessage id="cookies.bar.acceptAll" />
            </Cta>
            <Alternative
              onClick={onGoToPolicy}
              className="sm:text-sm sm:px-4 sm:py-2"
            >
              <FormattedMessage id="cookies.bar.customise" />
            </Alternative>
          </Container.Flex>
        </Container.FlexResponsiveRow>
      </Container.Container>
    </Container.Container>
  );
};

export default CookieBar;
