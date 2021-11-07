/**
 *
 * Bio.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Bio Styles. To be used in horizontal loop
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
import { Font } from "../../../constants/styles/Font";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BioClassName = `bio`;

export const BioStyle = styled.section`
  .${BioClassName} {
    &__bio {
      display: grid;
      background: ${Color.OffWhite};
      padding: calc(${Root.Size} * 2) calc(${Root.Size} * 1.5)
        calc(${Root.Size} * 1.5) calc(${Root.Size} * 1.25);
      grid-template-columns: 1fr 2fr;
      ${CssUtils.OrangeTab};

      &__image {
        grid-row: 1 / 3;
        grid-column: 1 / 2;

        img {
          width: 80%;
          height: auto;
          border-radius: 50%;
        }
      }

      &__name {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        margin-bottom: calc(${Root.Size} / 1.5);

        h2 {
          display: inline-block;
          color: ${Color.Purple4};
          ${CssUtils.UnderlinedHeader};
        }
      }

      &__text {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        margin-bottom: calc(${Root.Size} / 1.5);
      }

      &__text {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }

      &__education {
        grid-row: 3 / 4;
        grid-column: 1 / 2;
        padding-right: calc(${Root.Size} / 2);

        &__label {
          font-family: ${Font.Body};
          color: ${Color.Purple4};
        }

        &__item {
          display: grid;
          grid-template-columns: 1fr 3.5fr;
          padding-bottom: calc(${Root.Size} / 2);

          p {
            grid-column: 2 / 3;
            padding-bottom: 0;
          }

          &__year {
            grid-column: 1 / 2 !important;
            grid-row: 1 / 3;
          }

          &__name {
            font-weight: 700;
          }

          &__italic {
            font-style: italic;
          }
        }
      }

      &__publications {
        grid-row: 3 / 4;
        grid-column: 2 / 3;

        &__label {
          font-family: ${Font.Body};
          color: ${Color.Purple4};
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Md + "px"}) {
    .${BioClassName} {
      &__bio {
        grid-template-columns: 1fr 3fr;

        &__education {
          grid-row: 3 / 4;
          grid-column: 2 / 3;
        }

        &__publications {
          grid-row: 4 / 5;
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    .${BioClassName} {
      &__bio {
        grid-template-columns: auto;
        gap: calc(${Root.Size} / 2);

        > * {
          grid-column: 1 / 2;
          grid-row: auto;
        }

        &__image {
          img {
            width: calc(${Root.Size} * 4);
            margin-bottom: calc(${Root.Size} / 2);
          }
        }
      }
    }
  }
`;
