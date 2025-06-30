import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './components/locales//en.json';
import fr from './components/locales/fr.json';
import es from './components/locales/es.json';
import ht from './components/locales/ht.json';

// Language resources
const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  ht: { translation: ht },
};

i18n
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the selected one is unavailable
    interpolation: { escapeValue: false }, // React already escapes values
    react: {
      useSuspense: false, // Set to false if you don't want the translation hook to suspend
    },
  });

export default i18n;
