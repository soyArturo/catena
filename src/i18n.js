import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATION_EN } from "./assets/locales/en/translation.js";
import { TRANSLATION_ES } from "./assets/locales/es/translation.js";

const FALLBACKLNG = ["es"];
const AVAILABLELNG = ["es", "en-US"];

const resources = {
  es: {
    translation: TRANSLATION_ES,
  },
  en: {
    translation: TRANSLATION_EN,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    FALLBACKLNG,
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: AVAILABLELNG,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
