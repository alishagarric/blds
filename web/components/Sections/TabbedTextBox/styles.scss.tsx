/**
 *
 * TabbedTextBox.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website TabbedTextBox Styles. To be used in horizontal loop
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

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TabbedTextBoxClassName = `tabbed-text-box`;

export const TabbedTextBoxStyle = styled.section`
  .${TabbedTextBoxClassName} {
    &__container {
      background: ${Color.OffWhite};
      padding: calc(${Root.Size} / 1.5) calc(${Root.Size} / 1.5)
        calc(${Root.Size} * 1.5) calc(${Root.Size} / 1.5);
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      gap: calc(${Root.Size});
      overflow: hidden;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: calc(${Root.Size});
        width: calc(${Root.Size});
        background: ${Color.Orange};
        transform: rotate(45deg) translateY(-70%);
      }

      &__headline {
        grid-column: 1 / -1;

        &.__alignment {
          &-center {
            text-align: center;
          }

          &-right {
            text-align: right;
          }
        }

        h2 {
          position: relative;
          padding-bottom: calc(${Root.Size} / 4);
          display: inline-block;

          &:after {
            content: "";
            position: absolute;
            height: 1px;
            left: 0;
            width: 100%;
            bottom: 0;
            background-color: ${Color.Black};
          }
        }
      }

      &__item {
        > *:last-child {
          padding-bottom: 0;
        }

        &__name {
          font-weight: 700;
          padding-bottom: calc(${Root.Size} / 5);
          grid-row: 1 / 2;
          grid-column: 2 / 3;
        }

        &__summary {
          grid-row: 2 / 3;
          grid-column: 2 / 3;
        }

        &__link {
          grid-row: 3 / 4;
          grid-column: 2 / 3;

          text-decoration: underline;
        }

        &__image {
          grid-row: 1 / 4;
          grid-column: 1 / 2;
          margin-right: calc(${Root.Size} / 1.5);

          img {
            border-radius: 50%;
            height: calc(${Root.Size} * 2);
            width: calc(${Root.Size} * 2);
            object-fit: contain;
          }
        }

        &.__type {
          &-bio {
            display: grid;
            grid-template-columns: auto auto;
          }
        }
      }

      &.__layout {
        &-more-space {
          gap: calc(${Root.Size} * 1.5);
        }

        &-most-space {
          .${TabbedTextBoxClassName} {
            &__container {
              &__item:nth-of-type(even) {
                padding-left: 25%;
                padding-right: 5%;
              }
              &__item:nth-of-type(odd) {
                padding-right: 25%;
                padding-left: 5%;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
  }
`;
