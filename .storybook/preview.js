import {reactIntl} from './reactIntl.js';
import styled from "styled-components";
import {withThemesProvider} from "themeprovider-storybook";
import Light from "../src/themes/light/light";
import {addDecorator} from "@storybook/react";
import GlobalStyle from "../src/utils/globalStyle/globalStyle";
import "../public/index.css"

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

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.base};
`
addDecorator((story) => (
  <Wrapper>
    <GlobalStyle />
    {story()}
  </Wrapper>
));

export const decorators = [withThemesProvider(themes)];