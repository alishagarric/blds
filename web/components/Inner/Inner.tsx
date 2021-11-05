/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */

// Core
import React from "react";

// Styles
import { InnerStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Inner = ({ children }: any) => (
  <InnerStyle className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">{children}</InnerStyle>
);

// End Component
//////////////////////////////////////////////////////////////////////
