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

/*
interface Layout {
  children?: any;
  title?: string;
}

export type LayoutState = {
  path: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const LayoutClassName = "wrapper";


export class AppLayout extends React.PureComponent<
Layout,
LayoutState
> {
  constructor(props: Layout) {
    super(props);

    this.state = {
      path: ,
    };
  }

  render() {  

    let { children, title } = this.props;

    const router: NextRouter = useRouter();

    return (
      <>
        <GlobalStyle />
        {/*<SetGlobalTheme />
        <SiteHead title="Solas Ai" />
        <Navigation homepage={this.state.path == "/"}/>
        <main className={`${LayoutClassName}`}>{children}</main>
        <Footer/>
      </>
    );
  }
}
*/
