/**
 *
 * Footer.js
 * @author Alisha Garric
 * @description The website footer.
 *
 */

// Core
import Link from "next/link";
import React from "react";
import { Inner } from "../Inner";
// Styles
import { FooterClassName, FooterStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type Footer = {
  //
};

export const Footer: React.FunctionComponent<Footer> = ({}) => {
  return (
    <FooterStyle className={`${FooterClassName}`}>
      <Inner>
        <div className={`${FooterClassName}__main`}>
          <Link href="/">
            <a>
              <p className="h2">BLDS</p>
              <p className="p-lg">
                Expert Analysis, Testimony, &amp; Consulting
              </p>
            </a>
          </Link>
        </div>

        <div className={`${FooterClassName}__bottom`}>
          <p>© 2021 BLDS.LLC, All Rights Reserved</p>
        </div>

        <div className={`${FooterClassName}__form`}>
          <p>Contact BLDS</p>
          <form>
            <input type="text" placeholder="email address" required />
            <textarea placeholder="message" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </Inner>
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
