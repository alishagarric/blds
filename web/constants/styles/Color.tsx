// Color.js:
// This is the sitewide palette.

// Imports
// _______________________________________________________

import React from "react";
import { createGlobalStyle, css } from "styled-components";

// Begin Component
// _______________________________________________________

export type ColorTheme = {
  name?: "default" | "alternate";
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  overlayMode: string;
  setTheme?: (theme: ColorTheme) => void;
};

export const Color = {
  // Color Variables
  varPrimary: "var(--clrPrimary)",
  varSecondary: "var(--clrSecondary)",
  varBackground: "var(--clrBackground)",
  varForeground: "var(--clrForeground)",

  // Core Colors
  Primary: "#112635",
  Secondary: "#D41D00",
  Background: "#F7F7F7",
  Text: "#112635",

  //Red Colors
  Red1: "#D41D00",
  Red2: "#D50000",
  Red3: "#C30000",
  Red4: "#960202",
  Red5: "#6E0000",

  //Orange Colors
  Orange1: "#EF9B42",
  Orange2: "#E98435",
  Orange3: "#DE4F1A",

  // Grayscale Palette
  Black: "#000000",
  Grey: "#ADADAD",
  White: "#FFFFFF",

  OffWhite: "#FEF8F1",
  Orange: "#F3791A",

  Purple1: "#1D223D",
  Purple2: "#212745",
  Purple3: "#40405B",
};

/**
 *
 * @name ColorContext
 * @description Our context to provide color themes
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */

/**
 *
 * @name Palette
 * @description Global CSS Variables for palette
 *
 */
export const Palette = createGlobalStyle`
  ::-moz-selection { background: ${Color.varForeground}; color: ${Color.varBackground} }
  ::selection { background: ${Color.varForeground}; color: ${Color.varBackground} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component

export class ColorUtils {
  static SetThemeFromServer = (serverTheme: ColorTheme) => {
    return createGlobalStyle`      
      :root {
        --clrPrimary: ${serverTheme.primary};
        --clrSecondary: ${serverTheme.secondary};
        --clrBackground: ${serverTheme.background};
        --clrForeground: ${serverTheme.foreground};
        --overlayMode: ${serverTheme.overlayMode};
      }
    `;
  };
}
