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
import { Font } from "../../constants/styles/Font";
import { Theme } from "../../constants/Theme";
import { BlueBirdClassName } from "../_svg/Birds/BlueBird";
import { LogoClassName } from "../_svg/Logos/Logo";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterClassName = "footer";

export const FooterStyle = styled.footer`
  &.${FooterClassName} {
    background: ${Theme.Color.Text};
    color: ${Theme.Color.White};
    padding-top: calc(${Root.Size} * 4);
    padding-bottom: calc(${Root.Size} * 4);
    min-height: 40vh;
    position: relative;
    overflow: hidden;

    .${BlueBirdClassName} {
      position: absolute;
      top: 0;
      height: 130%;
      left: -20%;
      width: auto;
      z-index: 0;
      pointer-events: none;
    }

    .${FooterClassName}__headline, .${FooterClassName}__container, .${FooterClassName}__bottom {
      position: relative;
      z-index: 1;
    }

    .${FooterClassName}__headline, .${FooterClassName}__container {
      padding-left: 10%;
    }

    .${FooterClassName}__headline {
      width: 100%;
      padding-bottom: calc(${Root.Size} * 3);
    }   

    .${FooterClassName}__bottom {
      padding-top: calc(${Root.Size} * 4);
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;


      svg {
        path {
          fill: ${Theme.Color.White};
        }

        .${LogoClassName}__ai {
          opacity: .5;
        }
      }
    }  

    .${FooterClassName}__social {
      position: absolute;
      top: calc(${Root.Size} * 1.5);
      right: calc(${Root.Size} * 1.5);

      svg {
        width: calc(${Root.Size} * 1.5);
        height: calc(${Root.Size} * 1.5);
        margin-bottom: calc(${Root.Size} / 3);
      }
    }   

    .${FooterClassName}__container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;

      .${FooterClassName}__details {
        flex: 2;

        &__subheadline {
          padding-bottom: calc(${Root.Size} * 3);
        }
      }

      .${FooterClassName}__form {
        flex: 3;

        form {
          display: flex;
          width: 100%;

          fieldset {
            display: flex;
            flex-direction: column;
            padding: 0;

            &:first-of-type {
              flex: 3;
            }

            &:last-of-type {
              flex: 4;
            }
          }

          textarea {
            flex: 1;
          }

          input, textarea {
            margin-bottom: ${Root.Size};
            margin-right: ${Root.Size};
            padding: ${Root.Size};
            font-size: 1rem;
            font-family: ${Font.Header};
            color: ${Theme.Color.Text};

            &::placeholder {
              text-transform: uppercase;
              letter-spacing: 1px;
            }
          }

          input {
            height: 59px;
            background: ${Theme.Color.White};
            border: none;

            &[type="submit"] {
              background: transparent;
              border: 1px solid ${Theme.Color.White};
              color: ${Theme.Color.White};
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      .${FooterClassName}__container {
        .${FooterClassName}__form {
          flex: 1;

          form {
            flex-direction:  column;

            input, textarea {
              min-width: 300px;
            }
          }
        }

        .${FooterClassName}__details {
          flex: 1;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {

      .${FooterClassName}__headline {
        padding-bottom: ${Root.Size};
      }

      .${FooterClassName}__container {
        flex-direction: column;

        .${FooterClassName}__form {
          margin-top: ${Root.Size};
          width: 100%;

          form {
            input, textarea {
              margin-right: 0;
            }
          }
        }
      }

      .${FooterClassName}__headline, .${FooterClassName}__container {
        padding-left: 0;
      }

      .${BlueBirdClassName} {
        bottom: 0;
        width: 70%;
        left: -10%;
        height: auto;
        top: auto;
      }
    } 
  }
`;
