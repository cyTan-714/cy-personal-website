import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'

// Short interface text (menu labels, buttons, headings) lives in
// src/locales/<language>.json. To add Chinese later: create zh.json
// and add it to `resources` below.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already protects against injected HTML
  },
})

// Tells TypeScript which keys exist, so a typo like t('nav.abuot')
// shows up as an error instead of silently printing the key.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: { translation: typeof en }
  }
}

export default i18n
