/**
 *
 * CtaRow.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website CtaRow Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { RedBirdClassName } from "../../_svg/Birds/RedBird";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CtaRowClassName = `cta-row`;

export const CtaRowStyle = styled.section`
  &.${CtaRowClassName} {
    background-color: ${Theme.Color.Background};
    padding-bottom: calc(${Root.Size} * 4);
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);

    .${CtaRowClassName}__brandmark {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .${RedBirdClassName} {
        position: relative;
      }

      &:before {
        content: "";
        background: ${Theme.Color.White};
        display: block;
        position: absolute;
        bottom: 50%;
        top: 0;
        left: 0;
        right: 0;
      }
    }

    .${CtaRowClassName}__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: ${Root.Size};

      max-width: 600px;
      margin: 0 auto;
    }
  }
`;
