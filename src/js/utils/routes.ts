import { getNavigatorLanguage } from './locale';

export enum Route {
  CONTACTS = 'contacts',
  COOKIE_POLICY = 'cookie-policy',
  HOME = 'home',
  PRIVACY = 'privacy',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Route {
  export function url(route: Route): string {
    const lang = getNavigatorLanguage();

    if (route === Route.HOME) {
      return `/${lang}`;
    }

    return `/${lang}/${route}`;
  }
}

export interface MenuEntries {
  [key: string]: MenuEntry;
}

interface MenuEntry {
  label: string;
  link?: Route;
  section?: string;
}

export const getIdFromHash = (): string | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const hash = window.location.hash;
  const lastIndex = hash.lastIndexOf('#');

  if (lastIndex < 0) {
    return undefined;
  }

  return hash.slice(lastIndex + 1);
};
