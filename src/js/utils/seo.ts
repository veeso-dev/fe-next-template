import CONTACTS from '../data/contacts';

export const canonicalUrl = (pathname: string): string => {
  if (pathname.startsWith('/')) {
    pathname = pathname.slice(1);
  }
  return `${CONTACTS.siteUrl}/${pathname}`;
};
