// utils/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { translation: require('../public/locales/en/translation.json') },
    hi: { translation: require('../public/locales/hi/translation.json') },
  },
});

export default i18n; 