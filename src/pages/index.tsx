import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';

import Page from '../js/components/reusable/Page';
import PageWrapper from '../js/components/PageWrapper';
import SeoEngine from '../js/components/SeoEngine';

const Home: React.FC<PageProps> = ({ location }) => (
  <PageWrapper pathname={location.pathname}>
    <Page.BlankPage></Page.BlankPage>
  </PageWrapper>
);

export default Home;

export const Head: HeadFC = () => <SeoEngine />;
