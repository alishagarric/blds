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
  <InnerStyle className="container">{children}</InnerStyle>
);

// End Component
//////////////////////////////////////////////////////////////////////
