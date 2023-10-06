import * as React from 'react';
import { IntlProvider } from 'react-intl';

import TRANSLATIONS, { getNavigatorLanguage } from '../utils/locale';
import CookieBar from './CookieBar';
import Footer from './Footer';

import '../../styles.css';

interface Props {
  pathname: string;
  children: JSX.Element | JSX.Element[] | string;
}

const PageWrapper = (props: Props) => {
  const language = getNavigatorLanguage();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.pathname]);

  return (
    <IntlProvider locale={language} messages={TRANSLATIONS[language]}>
      <main>{props.children}</main>
      <Footer />
      <CookieBar />
    </IntlProvider>
  );
};

export default PageWrapper;
