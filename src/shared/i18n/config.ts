import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, es} from '@/shared/i18n/index';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  returnNull: false,
  resources,
  //language to use if translations in user language are not available
  fallbackLng: 'en', // es - en
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});
export default i18n;
