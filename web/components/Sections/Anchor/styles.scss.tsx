/**
 *
 * Anchor.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Anchor Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AnchorClassName = `anchor`;

export const AnchorStyle = styled.div`
  &.${AnchorClassName} {
    position: absolute;
    top: -90px;
    left: 0;
    width: 100%;

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      top: -50px;
    }
  }
`;
