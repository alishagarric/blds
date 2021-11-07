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
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

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
      padding: calc(${Root.Size});

      > * {
        position: relative;
      }

      &:before {
        content: "";
        ${CssUtils.Fill};
        opacity: 0.8;
        pointer-events: none;
      }

      &:nth-of-type(3n - 2) {
        &:before {
          top: auto;
          left: 0;
          bottom: 0;
          height: 800%;
          width: 200%;
          background-color: ${Color.Purple1};
          transform-origin: bottom left;
          transform: rotate(45deg) translate(-50%, -50px);
          opacity: 0.5;
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
          letter-spacing: 5px;
        }

        &__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-column: 2 / 3;
          grid-row: 1 / -1;
          padding-left: calc(${Root.Size} / 4);
          line-height: 1.4;
        }
      }

      &__html {
        > *:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Md + "px"}) {
    .${TriColumnTextClassName} {
      &__columns {
        flex-wrap: wrap;
      }

      &__column {
        flex: 0 0 50%;
        padding: calc(${Root.Size} * 2) 10%;

        &:nth-of-type(3n -2) {
          &:before {
            transform: none;
          }
        }

        &:nth-of-type(3n) {
          &:before {
            top: auto;
            left: 0;
            bottom: 0;
            height: 800%;
            width: 200%;
            transform-origin: bottom left;
            transform: rotate(45deg) translate(-50%, -30px);
            opacity: 0.8;
            background-color: ${Color.Purple2};
          }
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    .${TriColumnTextClassName} {
      &__column {
        flex: 0 0 100%;
      }
    }
  }
`;
