import * as React from 'react';
import type { Metadata } from 'next';

import Page from '@/src/js/components/reusable/Page';
import { canonicalUrl } from '@/src/js/utils/seo';
import { Route } from '@/src/js/utils/routes';

const TITLE = 'Next template';
const DESCRIPTION = '';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(canonicalUrl(Route.HOME)),
  alternates: {
    canonical: new URL(canonicalUrl(Route.HOME)),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
  },
};

const Home = () => {
  return <Page.BlankPage></Page.BlankPage>;
};

export default Home;
