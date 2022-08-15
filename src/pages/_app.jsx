import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import Head from 'next/head';
import BasicLayout from '../components/organisms/basicLayout/basicLayout';
import '../../public/index.css';
// eslint-disable-next-line import/no-unresolved
import English from '../../content/compiled-locales/en.json';

export default function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}
    >
      <Head>
        <meta name="description" content="Magnus Hirst - Personal Site" />
        <meta name="keywords" content="Magnus, Hirst" />
        <meta name="author" content="Magnus Hirst" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Magnus Hirst | Portfolio</title>
      </Head>
      <BasicLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </BasicLayout>
    </IntlProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};
