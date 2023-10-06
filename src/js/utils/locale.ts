import EnTranslations from '../../locales/en.json';
import ItTranslations from '../../locales/it.json';

const LANG_ITALIAN = 'it';
const LANG_ENGLISH = 'en';

export type Language = typeof LANG_ITALIAN | typeof LANG_ENGLISH;
const DEFAULT_LANGUAGE = LANG_ITALIAN;

export interface Translations {
  en: Record<string, any>;
  it: Record<string, any>;
  [key: string]: Record<string, any>;
}

const TRANSLATIONS: Translations = {
  en: EnTranslations,
  it: ItTranslations,
};

const getPureNavigatorLanguage = (): Language => {
  let lang = navigator.language;
  // Complete lang
  if (languageSupported(lang)) {
    return lang as Language;
  }
  // Reduced lang
  lang = lang.split(/[-_]/)[0] || DEFAULT_LANGUAGE;
  if (!languageSupported(lang)) {
    return DEFAULT_LANGUAGE;
  }
  return lang as Language;
};

export const getNavigatorLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  return getPureNavigatorLanguage();
};

const languageSupported = (lang: string): boolean =>
  [LANG_ENGLISH, LANG_ITALIAN].includes(lang);

export default TRANSLATIONS;
