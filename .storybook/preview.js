import {reactIntl} from './reactIntl.js';
import Light from "../src/themes/light/light";
import {withThemesProvider} from "themeprovider-storybook";
import {addDecorator} from "@storybook/react";
import GlobalStyle from "../src/utils/globalStyle/globalStyle";

export const parameters = {
  reactIntl,
  locale: reactIntl.defaultLocale,
  locales: {
    en: {title: "English", left: '🇺🇸'},
  },
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themes = [
  {
    name: 'Light',
    backgroundColor: '#fff',
    ...Light,
  },
]

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const decorators = [withThemesProvider(themes)];