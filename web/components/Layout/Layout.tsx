/**
 *
 * Layout.js
 * @author Alisha Garric
 * @description The website layout.
 *
 */

// Constants
import React, { useContext } from "react";
import { GlobalStyle } from "../../constants/styles/Global";

// Components
import { SiteHead } from "../SiteHead";

// Utils
import { NextRouter, useRouter } from "next/router";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface Layout {
  children?: any;
  title?: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const LayoutClassName = "wrapper";

export const Layout: React.FunctionComponent = ({ children }: Layout) => {
  const router: NextRouter = useRouter();

  return (
    <>
      <GlobalStyle />
      {/*<SetGlobalTheme />*/}
      <SiteHead title="BLDS" />
      {children}
      <Footer />
    </>
  );
};
