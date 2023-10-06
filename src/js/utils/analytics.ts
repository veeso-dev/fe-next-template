import { isAnalyticsCookiesConsentGiven } from './cookies';

const pushAnalyticsEvent = (eventName: string, parameters: any) => {
  if (typeof window === 'undefined') {
    return;
  }

  const canUseGa4 =
    window.gtag !== undefined && isAnalyticsCookiesConsentGiven();

  if (canUseGa4) {
    window.gtag('event', eventName, parameters);
  }
};

const consent = (flag: boolean): 'granted' | 'denied' =>
  flag ? 'granted' : 'denied';

export const initGaConsent = (
  adStorage: boolean,
  analyticsStorage: boolean,
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'default', {
      ad_storage: consent(adStorage),
      analytics_storage: consent(analyticsStorage),
    });
  }
};

export const setGaConsent = (adStorage: boolean, analyticsStorage: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: consent(adStorage),
      analytics_storage: consent(analyticsStorage),
    });
  }
};
