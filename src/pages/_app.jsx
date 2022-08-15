import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import BasicLayout from '../components/organisms/basicLayout/basicLayout';
import '../../public/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
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
