import i18n from 'i18next';
import HTTP from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEnglish from '../locales/en';
import translationArabic from '../locales/ar';
import translationSpanish from '../locales/es';

i18n
  .use(HTTP)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translations: translationEnglish,
      },
      ar: {
        translations: translationArabic,
      },
      es: {
        translations: translationSpanish,
      },
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
