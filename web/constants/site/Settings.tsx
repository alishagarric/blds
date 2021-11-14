/**
 *
 * Settings.js
 * @author Alisha Garric
 * @description This is the sitewide information that is used throughout the entire
 * build of the site. This goes from SEO to headings and also into the
 * core Gatsby config files as well.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

import { Color, ColorTheme } from "../styles/Color";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name __IS_DEBUG_MODE__
 * @description Debug mode for console
 *
 */
export const __IS_DEBUG_MODE__ = true;

/**
 *
 * @name Settings
 * @description Misc site settings
 *
 */
export const Settings = {
  siteTitle: "BLDS",
  siteTitleShort: "BLDS",
  siteDescription: "",
  siteBaseKeywords: "",
  siteUrl: "https://www.bldsllc.com/",
  themeColor: Color.Primary,
  secondaryColor: Color.Secondary,
  backgroundColor: Color.Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {},
};

/**
 *
 * @name Themes
 * @description themes
 *
 */

export const DefaultTheme: ColorTheme = {
  name: "default",
  primary: Color.Primary,
  secondary: Color.Primary,
  background: Color.Background,
  foreground: Color.Text,
  overlayMode: "overlay",
};

export const AlternateTheme: ColorTheme = {
  name: "alternate",
  primary: "#FFFDEB",
  secondary: "#FFFDEB",
  background: "#000000",
  foreground: "#FFFDEB",
  overlayMode: "difference",
};
