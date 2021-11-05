/**
 *
 * DownloadItem.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website DownloadItem Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { FireClassName } from "../../_svg/Icons/Fire";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const DownloadItemClassName = `download-item`;

export const  DownloadItemStyle = styled.section`
  &.${DownloadItemClassName} {

    .${DownloadItemClassName}__container {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      background: ${Theme.Color.Background};
      display: flex;
      padding-left: calc(${Root.Size} * 3);
      padding-right: calc(${Root.Size} * 3);
      min-height: 350px;
    }

    .${DownloadItemClassName}__papers-image {
      flex: 350px 0 0;
      position: relative;

      img {
        position: absolute;
        width: 100%;
        height: auto;
        object-fit: contain;
        bottom: 0;
      }
    }

    .${DownloadItemClassName}__content {
      flex: 675px 0 1;
      padding: calc(${Root.Size} * 2) 0 calc(${Root.Size} * 2) calc(${Root.Size} * 2);

      &__headline {
        width: 100%;
       
        h2 {
          line-height: 1.3;
        }
      }

      &__download-form {
        form {
          display: flex;
        }

        &__input {
          flex: 1;

          input {
            width: calc(100% - ${Root.Size});
            padding-left: ${Root.Size};
            padding-right: ${Root.Size};
            margin-right: ${Root.Size};
            min-width: auto;
            text-transform: none;

            &::placeholder {
              text-transform: uppercase;
              letter-spacing: 1px;
            }
          }
        }
      }

      .btn {
        align-items: flex-start;

        > a {
          display: flex;

          svg {
            margin-right: 10px;
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      .${DownloadItemClassName}__content {
        &__download-form {

          &__input {
            input {
              margin-right: 0;
              width: 100%;
            }
          }

          form {
            flex-direction: column;

            .btn {
              width: 100%;
              margin-top: calc(${Root.Size} / 2);

              button {
                width: 100%;
              }
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      .${DownloadItemClassName}__container {
        width: calc(100% + 1.5rem);
        margin-left: calc(.75rem * -1);
        margin-right: calc(.75rem * -1);
        flex-direction: column;
      }

      .${DownloadItemClassName}__papers-image {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        

        img {
          position: relative;
          bottom: calc(${Root.Size} * 3);
        }
      }

      .${DownloadItemClassName}__content {
        padding-top: 0;
        padding-left: 0;
        flex: auto;
        text-align: center;

        .btn {
          align-items: center;
        }
      }
    }
  }
`;
