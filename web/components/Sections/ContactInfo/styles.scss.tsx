/**
 *
 * ContactInfo.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ContactInfo Styles. To be used in horizontal loop
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

export const ContactInfoClassName = `contact-info`;

export const ContactInfoStyle = styled.div`
  &.${ContactInfoClassName} {
    .${ContactInfoClassName}__row {
      display: flex;

      svg {
        height: 20px;
        width: 20px;
        margin-right: ${Root.Size};
        transform: translateY(25%);
      }
    }
  }
`;
