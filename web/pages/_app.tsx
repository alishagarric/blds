// /pages/_app_.js
import React  from "react";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ColorUtils } from "../constants/styles/Color";
import { DefaultTheme } from "../constants/site/Settings";
import ReactGA from 'react-ga';

// Begin Component
// __________________________________________________________________________________________

type LMNTS_CustomAppData = AppProps & {};

/**
 *
 * /pages/_app_.js
 * @author Alisha Garric
 * @description The wrapper around every page.
 *
 */

const MyApp = ({ Component, pageProps, router }: LMNTS_CustomAppData) => {

  let PageTheme = ColorUtils.SetThemeFromServer(DefaultTheme);
  // Render our App
  return (
    <>
      <PageTheme /> 
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
