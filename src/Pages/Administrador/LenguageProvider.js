import polyglotI18nProvider from 'ra-i18n-polyglot';
import spanishMessages from 'ra-language-spanish';
import en from 'ra-language-english';
const translations = { es: spanishMessages,en  };




export const iProvider = polyglotI18nProvider(
    locale => translations[locale],
    'es', // default locale
    [{ locale: 'es', name: 'Español' },{ locale: 'en', name: 'English' }],
    { allowMissing: true }
);
