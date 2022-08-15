# Portfolio Website

Access the website here: https://mh-personal-site.herokuapp.com/

This is hosted on Heroku so cold starts will make your first request to be slower than normal.

## Design

## How to Run

For Development:
```shell
git config --local core.hooksPath .githooks/
npm run lint
npm run i18n
npm run dev
```
For Production:
```shell
npm run build
npm run start
```

## ToDo List
- [x] Add linting
- [x] Investigate SSR
- [x] Investigate asset splitting
- [x] Add locale support (en only is fine)
- [ ] Add themes and option to change light/dark mode in UI
- [ ] Storybook and Visual Regression testing
- [ ] Pipeline for tests
- [ ] Deploy to Heroku or similar hosting platform
- [ ] Add CV
- [ ] Add Tiny URL Kata
- [ ] Add Map Kata
- [ ] POC for Apache Cordova

## Colour Palette
https://coolors.co/palette/7a6c5d-2a3d45-ddc9b4-bcac9b-c17c74