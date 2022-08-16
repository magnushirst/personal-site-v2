const locales = ['en'];

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: require(`../content/compiled-locales/${lang}.json`),
}), {});

const formats = {};

export const reactIntl = {
  defaultLocale: 'en',
  locales,
  messages,
  formats,
};