import { useLocation } from '@reach/router';
import * as React from 'react';

import {
  isPageNotFound,
  pageDescription,
  pageOgSiteName,
  pageTitle,
} from '../utils/seo';
import { getNavigatorLanguage } from '../utils/locale';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

interface Props {
  description?: string;
  lang?: string;
  title?: string;
  image?: string;
  article?: boolean;
  canonicalUrl?: string;
  nonCanonical?: boolean;
  author?: string;
  noindex?: boolean;
}

const SeoEngine: React.FC<React.PropsWithChildren<Props>> = ({
  description: propDescription,
  lang: propLang,
  title: propTitle,
  image,
  article,
  canonicalUrl: propCanonicalPath,
  nonCanonical = false,
  author: propAuthor,
  noindex = false,
  children,
}) => {
  const { pathname } = useLocation();

  const { siteUrl, author: metadataAuthor } = useSiteMetadata();

  const title = propTitle || pageTitle(pathname);
  const description = propDescription || pageDescription(pathname);
  const ogSiteName = pageOgSiteName(pathname);
  const defaultCanonicalPath = `${siteUrl}${pathname}`;
  const canonicalUrl = propCanonicalPath || defaultCanonicalPath;
  const lang = propLang || getNavigatorLanguage();
  const author = (propAuthor || metadataAuthor) ?? '';

  if (isPageNotFound(pathname)) {
    return (
      <>
        <title>{title}</title>
      </>
    );
  } else {
    return (
      <>
        <html lang={lang} />
        <title>{title}</title>
        {!nonCanonical && <link rel="canonical" href={canonicalUrl} />}
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={article ? 'article' : 'website'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={ogSiteName} />
        <meta property="og:locale" content={lang} />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:site" content={author} />
        <meta name="tiwtter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image ? (
          <>
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        ) : (
          <>
            <meta property="og:image" content={`${siteUrl}/og_preview.png`} />
            <meta name="twitter:card" content="summary" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:width" content="630" />
          </>
        )}
        {noindex && <meta name="googlebot" content="noindex, nofollow" />}
        {children}
      </>
    );
  }
};

export default SeoEngine;
