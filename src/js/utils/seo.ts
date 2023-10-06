interface SeoPages {
  [key: string]: SeoData;
}

interface SeoData {
  title: string;
  description: string;
  ogSiteName?: string;
}

const PAGE_TITLES: SeoPages = {
  '/': {
    title: '',
    description: '',
    ogSiteName: '',
  },
};

const seoData = (pathname: string): SeoData | undefined => {
  if (!PAGE_TITLES[pathname]) {
    return undefined;
  }

  return PAGE_TITLES[pathname];
};

export const pageTitle = (pathname: string): string => {
  const data = seoData(pathname);
  return data ? data.title : '404 Not found';
};

export const pageOgSiteName = (pathname: string): string => {
  const data = seoData(pathname);
  return data?.ogSiteName ? data.ogSiteName : pageTitle(pathname);
};

export const pageDescription = (pathname: string): string => {
  const data = seoData(pathname);
  return data ? data.description : 'Page could not be found on the website';
};

export const isPageNotFound = (pathname: string): boolean =>
  seoData(pathname) === undefined;
