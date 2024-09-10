import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Initialization options
    fallbackLng: 'en',
    lng: 'en',
    ns: ['LoginSignup'], // Add namespaces here
    defaultNS: 'LoginSignup', // Default namespace
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/languages/{{lng}}/{{ns}}.json', // Updated loadPath
    },
  });

export default i18n;
