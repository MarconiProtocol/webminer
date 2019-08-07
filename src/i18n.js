import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";
import common_en from './translations/en/common.json';
import style_en from './translations/en/style.json';
import common_zh from './translations/zh/common.json';
import style_zh from './translations/zh/style.json';
import common_ja from './translations/ja/common.json';
import style_ja from './translations/ja/style.json';
import common_ko from './translations/ko/common.json';
import style_ko from './translations/ko/style.json';

i18n
  .use(reactI18nextModule)
  .use(LngDetector)
  .init({
    debug: false,                           // set to true when debugging issues in translation files
    interpolation: {
      escapeValue: false,                   // React already does escaping
    },
    detection: {
      order: ['cookie', 'navigator', 'localStorage', 'htmlTag'],
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['cookie'],
      load: 'languageOnly',
      lookupCookie: 'language',
      cookieMinutes: 24 * 60 * 60
    },
    fallbackLng: 'en',                      // language to use
    resources: {
        en: {
            common: common_en,              // 'common' is our custom namespace for string translation
            style: style_en                 // 'style' is our namespace for language-specific styling
        },
        zh: {
            common: common_zh,
            style: style_zh
        },
        ja: {
            common: common_ja,
            style: style_ja
        },
        ko: {
            common: common_ko,
            style: style_ko
        },
    },
});

export default i18n;
