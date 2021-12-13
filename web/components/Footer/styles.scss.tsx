/**
 *
 * Footer.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Footer Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Base } from "../../constants/styles/Base";
import { Color } from "../../constants/styles/Color";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterClassName = "footer";

export const FooterStyle = styled.footer`
  color: ${Color.White};
  padding: ${Root.Size} calc(${Root.Size} / 2);

  &.${FooterClassName} {
    > *:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-end;
    }

    .${FooterClassName} {
      &__main {
        grid-column: 1 / 2;

        a {
          color: ${Color.White};

          &:hover {
            text-decoration: none;
          }
        }

        p {
          padding-bottom: 0;
        }
      }

      &__form {
        display: none;
        grid-column: 2 / 3;
        grid-row: 1 / 2;

        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-row: auto auto auto;
          gap: calc(${Root.Size} / 8);
        }

        &__label {
          font-weight: 700;
          padding-bottom: 0;
        }

        &__email {
          grid-row: 2 / 3;
          grid-column: 1 / 2;
          padding: 0;

          input {
            width: 100%;
            padding: calc(${Root.Size} / 5);
          }
        }

        &__message {
          grid-row: 2 / 3;
          grid-column: 2 / 3;
          padding: calc(${Root.Size} / 5);
          height: 120px;
        }

        &__submit {
          grid-row: 3 / 4;
          grid-column: 2 / 3;
          height: 44px;
          line-height: 44px;
          background: ${Color.Orange};
          font-weight: bold;
          margin-left: 40%;
          color: ${Color.White};
          text-transform: uppercase;

          &:hover {
            opacity: 0.9;
            cursor: pointer;
          }
        }
      }

      &__bottom {
        text-align: right;
        grid-column: 2 / 3;

        p {
          padding-bottom: 0;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      &.${FooterClassName} {
        .${FooterClassName} {
          &__form {
            margin-bottom: calc(${Root.Size} / 5);

            form {
              grid-template-columns: auto;
            }

            &__message,
            &__submit {
              grid-column: 1 / 2;
            }

            &__message {
              grid-row: 3 / 4;
            }

            &__submit {
              grid-row: 4 / 5;
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      &.${FooterClassName} {
        > *:first-child {
          grid-template-columns: auto;

          > * {
            grid-column: 1 / 2;
            text-align: center;
          }
        }

        .${FooterClassName} {
          &__bottom {
            margin-top: ${Root.Size};
          }

          &__form {
            margin-bottom: ${Root.Size};

            &__submit {
              margin: 0 auto;
              width: 100%;
              max-width: 200px;
            }
          }
        }
      }
    }
  }
`;
