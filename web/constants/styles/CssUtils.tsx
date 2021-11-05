// Core
import { createGlobalStyle, css } from "styled-components";

// Constants
import {} from "../Theme";
import {} from "../Root";

// Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name CssUtils
 * @description CSS Utility functions. Just like SCSS mixins.
 * @returns A plethora of useful CSS.
 *
 */
export class CssUtils {
  static ObjectFit = (position: "contain" | "cover" = "cover") => {
    return css`
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      object-fit: ${position};
      width: 100%;
      height: 100%;
      object-position: center;
      max-width: 100%;
    `;
  };

  static ForceFullWidth = (
    spacing: string = "0",
    addGutter: boolean = false
  ) => {
    return css`
      width: calc(100% + (${spacing} * 2));
      margin-left: calc(${spacing} * -1);
      margin-right: calc(${spacing} * -1);
      max-width: 100vw;
      ${addGutter
        ? css`
            padding-left: ${spacing};
            padding-right: ${spacing};
          `
        : null}
    `;
  };

  static CreateTheme = (
    clrPrimary: string,
    clrSecondary: string,
    clrBackground: string,
    clrForeground: string
  ) => {
    return css`
      :root {
        --clrPrimary: ${clrPrimary};
        --clrSecondary: ${clrSecondary};
        --clrBackground: ${clrBackground};
        --clrForeground: ${clrForeground};
      }
    `;
  };

  static DisableUserSelect = () => {
    return css`
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `;
  };
}

export const LockBodyScroll = createGlobalStyle`
    body, html {
      overflow: hidden !important;
    }
  `;
