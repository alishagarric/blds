/**
 *
 * TriColumnText.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website TriColumnText Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Color, Palette } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";
import { BirdClassName } from "../../_svg/Birds/Bird";
import { LogoClassName } from "../../_svg/Logos/Logo";
import { LogotypeClassName } from "../../_svg/Logos/Logotype";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TriColumnTextClassName = `tri-column-text`;

export const TriColumnTextStyle = styled.section`
  .${TriColumnTextClassName} {
    &__columns {
      display: flex;
    }

    &__column {
      flex: 1;
      color: ${Color.White};
      overflow: hidden;
      position: relative;
      padding: calc(${Root.Size}) calc(${Root.Size} / 1.5);

      > * {
        position: relative;
      }

      &:before {
        content: "";
        ${CssUtils.Fill};
        opacity: 0.9;
        pointer-events: none;
      }

      &:nth-of-type(3n - 2) {
        &:before {
          top: -50%;
          left: -50%;
          height: 200%;
          width: 200%;
          background-color: ${Color.Purple1};
          transform: rotate(45deg) translateY(-50px);
          opacity: 0.8;
        }
      }

      &:nth-of-type(3n - 1) {
        &:before {
          background-color: ${Color.Purple2};
        }
      }

      &:nth-of-type(3n) {
        &:before {
          background-color: ${Color.Purple3};
        }
      }

      &.__alignment {
        &-center,
        &-top,
        &-bottom {
          display: flex;
          flex-direction: column;
        }

        &-center {
          justify-content: center;
        }

        &-top {
          justify-content: flex-start;
        }

        &-bottom {
          justify-content: flex-end;
        }
      }

      &__stat {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;

        * {
          padding-bottom: 0;
        }

        &__number {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }

        &__unit {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
        }

        &__text {
          grid-column: 2 / 3;
          grid-row: 1 / -1;
          padding-left: calc(${Root.Size} / 4);
        }
      }

      &__html {
        > *:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
  }
`;
