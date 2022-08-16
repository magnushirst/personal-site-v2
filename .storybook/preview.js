import {reactIntl} from './reactIntl.js';
import Light from "../src/themes/light/light";
import {withThemesProvider} from "themeprovider-storybook";

export const parameters = {
  reactIntl,
  locale: reactIntl.defaultLocale,
  locales: {
    en: {title: "English", left: '🇺🇸'},
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// Options:
const themes = [
  {
    name: 'Light' ,
    backgroundColor: '#fff',
    ...Light,
  },
]

export const decorators = [withThemesProvider(themes)];