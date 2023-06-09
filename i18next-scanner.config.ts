/*import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json'
import kaTranslations from './translations/ka.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ka: { translation: kaTranslations },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
*/
module.exports = {
  input: ['./src/**/*.{js,jsx,ts,tsx}'],
  output: './src/locales',
  options: {
    debug: true,
    removeUnusedKeys: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    lngs: ['en', 'ge'], // Add the languages you want to support
    ns: ['translation'],
    defaultLng: 'en',
    defaultValue: '',
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
  },
};

