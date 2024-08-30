import CONTACTS from '../data/contacts';
import { Route } from './routes';

export const canonicalUrl = (pathname: string | Route): string => {
  if (Route.isRoute(pathname)) {
    pathname = Route.url(pathname as Route);
  }

  if (pathname.startsWith('/')) {
    pathname = pathname.slice(1);
  }
  return `${CONTACTS.siteUrl}/${pathname}`;
};
