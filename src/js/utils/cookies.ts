import Cookie from 'js-cookie';

const COOKIE_POLICY = 'cookie-preferences';

interface CookiePreferences {
  technical: boolean;
  analytics: boolean;
}

const getCookiePreferences = (): CookiePreferences => {
  const payload = Cookie.get(COOKIE_POLICY);
  if (payload) {
    return JSON.parse(payload) as CookiePreferences;
  }

  return {
    technical: true,
    analytics: false,
  };
};

const setCookiePreferences = (prefs: CookiePreferences) => {
  const expiringDate = new Date();
  expiringDate.setFullYear(expiringDate.getFullYear() + 5);
  Cookie.set(COOKIE_POLICY, JSON.stringify(prefs), {
    expires: expiringDate,
    path: '/',
  });
};

export const hasCookiePreferences = (): boolean =>
  Cookie.get(COOKIE_POLICY) !== undefined;

export const acceptAllCookies = () => {
  setCookiePreferences({ technical: true, analytics: true });
};

export const setAnalyticsCookiesPreference = (choice: boolean) => {
  const prefs = getCookiePreferences();
  prefs.analytics = choice;

  setCookiePreferences(prefs);
};

export const isAnalyticsCookiesConsentGiven = (): boolean => {
  return getCookiePreferences().analytics;
};
