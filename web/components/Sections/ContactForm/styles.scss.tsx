/**
 *
 * ContactForm.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ContactForm Styles. To be used in horizontal loop
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
import { hexToRGB } from "../../../utils/hexToRGB";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ContactFormClassName = `contact-form`;

export const ContactFormStyle = styled.section`
  width: 100%;

  .${ContactFormClassName} {
    &__container {
      background: ${Color.OffWhite};
      padding: calc(${Root.Size}) calc(${Root.Size} * 2)
        calc(${Root.Size} * 1.5) calc(${Root.Size} / 1.5);
      width: 100%;
      display: grid;
      gap: 0 ${Root.Size};
      grid-template-columns: 1fr 215px;
      grid-template-rows: auto auto auto 1fr;
      ${CssUtils.OrangeTab};

      &__headline,
      &__subheadline,
      &__body,
      &__form {
        grid-column: 1 / 2;
      }

      &__offices {
        grid-column: 2 / -1;
        grid-row: 2 / -1;
      }

      &__headline {
        margin-bottom: ${Root.Size};
        color: ${Color.Purple3};

        h2 {
          display: inline-block;
          ${CssUtils.UnderlinedHeader};
        }
      }

      &__body {
        > * {
          max-width: 640px;
        }
      }

      &__form {
        --buttonHeight: calc(${Root.Size} / 1.1);
        --horzGap: calc(${Root.Size} / 2);
        margin-top: ${Root.Size};

        form {
          display: grid;
          grid-template-columns: 2fr 3fr;
          grid-template-rows: auto auto auto;
          gap: var(--horzGap) ${Root.Size};
          position: relative;

          > fieldset {
            display: flex;
            flex-direction: column;
            padding: 0;
          }

          &:after {
            content: "";
            opacity: 0.2;
            border-left: 1px solid ${Color.Black};
            top: 0;
            bottom: calc(var(--horzGap) + var(--buttonHeight));
            position: absolute;
            left: calc(2 / 5 * 100%);
          }
        }

        input:not(input[type="submit"]),
        textarea {
          padding: calc(${Root.Size} / 4);
          margin-top: calc(${Root.Size} / 8);
          position: relative;
          border: 1px solid ${hexToRGB(Color.Black, 0.2)};
        }

        textarea {
          height: 100%;
        }

        label {
          font-size: 1.125rem;
          font-weight: 700;
          padding-left: calc(${Root.Size} / 8);
          color: ${Color.OffBlack};
        }

        &__message {
          grid-column: 2 / 3;
          grid-row: 2 / 4;
        }

        &__submit {
          margin-top: var(---buttonSpace);
          grid-column: 2 / 3;
          grid-row: 4 / 5;
          text-align: right;

          input {
            height: var(--buttonHeight);
            line-height: var(--buttonHeight);
            background: ${Color.Orange};
            padding: 0;
            font-weight: 600;
            color: ${Color.White};
            min-width: 240px;

            &:hover {
              opacity: 0.9;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Md + "px"}) {
    .${ContactFormClassName} {
      &__container {
        grid-template-columns: auto;

        &__offices {
          grid-column: 1 / 2;
          grid-row: 5 / 6;
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    .${ContactFormClassName} {
      &__container {
        padding: calc(${Root.Size} * 2) ${Root.Size};

        &__form {
          margin-bottom: calc(${Root.Size} * 2);

          form {
            grid-template-columns: auto;

            &:after {
              content: none;
            }

            > * {
              grid-column: 1 / 2;
            }
          }

          &__submit {
            grid-row: 6 / 7;
            text-align: center;

            input {
              width: 100%;
              max-width: 200px;
            }
          }

          &__message {
            grid-row: 5 / 6;
          }

          &__subject {
            grid-row: 4 / 5;
          }
        }
      }
    }
  }
`;
