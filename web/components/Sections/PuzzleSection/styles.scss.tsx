/**
 *
 * PuzzleSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website PuzzleSection Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { CheckmarkClassName } from "../../_svg/Icons/Checkmark";
import { FireClassName } from "../../_svg/Icons/Fire";
import { PuzzleClassName } from "../../_svg/Puzzle/Puzzle";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const PuzzleSectionClassName = `puzzle-section`;

export const PuzzleSectionStyle = styled.section`
  &.${PuzzleSectionClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 4);
  //  margin-bottom: calc(${Root.Size} * 4);

    .${PuzzleSectionClassName}__container {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;

      .${PuzzleSectionClassName}__headline {
        padding-bottom: calc(${Root.Size} * 4);
        text-align: center;
        width: 100%;
      }

      .${PuzzleSectionClassName}__content {
        display: flex;
        flex-direction: row;

        &__body, &__pieces {
          flex: 1;
        }

        &__body {
          padding-right: calc(${Root.Size} * 3);
          min-height: 380px;

          .${FireClassName} {
            margin-bottom: calc(${Root.Size} * 1.5);
          }

          &__html {
            padding-bottom: calc(${Root.Size} * 1.5);
          }

        }

        &__pieces {
          position: relative;

          &__container {
            padding-top: 70%;
            width: 70%;
            position: relative;

            .${PuzzleClassName} {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            p {
              position: absolute;
              color: ${Theme.Color.Background};
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              height: 50%;
              width: 50%;
              font-weight: 700;

              &:nth-of-type(1), &:nth-of-type(2) {
                top: 0;
              }

              &:nth-of-type(3), &:nth-of-type(4) {
                top: 50%;
              }

              &:nth-of-type(1), &:nth-of-type(3) {
                left: 0%;
              }

              &:nth-of-type(2), &:nth-of-type(4) {
                left: 50%;
              }

              &:nth-of-type(1) {
                padding: calc(${Root.Size} * 2) calc(${Root.Size} * 2) ${Root.Size} calc(${Root.Size} * 2);
              }

              &:nth-of-type(2) {
                padding: calc(${Root.Size} * 2) calc(${Root.Size} * 2) calc(${Root.Size} * 2) ${Root.Size};
              }

              &:nth-of-type(3) {
                padding: calc(${Root.Size} * 2) ${Root.Size} calc(${Root.Size} * 2) calc(${Root.Size} * 2);
              }

              &:nth-of-type(4) {
                padding:  ${Root.Size} calc(${Root.Size} * 2) calc(${Root.Size} * 2) calc(${Root.Size} * 2);
              }
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {

      .${PuzzleSectionClassName}__container {
        .${PuzzleSectionClassName}__content {
          &__pieces {
            &__container {
              
              p {
                font-size: .7rem;
              }
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      margin-bottom: calc(${Root.Size} * 4);

      .${PuzzleSectionClassName}__container {
        max-width: 600px;
        width: 100%;

        .${PuzzleSectionClassName}__headline {
          padding-bottom: calc(${Root.Size} * 2);
        }

        .${PuzzleSectionClassName}__content {
          flex-direction: column;

          &__body {
            min-height: auto;
          }

          &__pieces {
            &__container {
              margin-left: 15%;

              p {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      .${PuzzleSectionClassName}__container {

        .${PuzzleSectionClassName}__content {

          &__body {
            padding-right: 0;
          }

          &__pieces {
            &__container {
              padding-top: 100%;
              width: 100%;
              margin-left: 0;

              p {
                font-size: .9rem;
              }
            }
          }
        }
      }
    }
  }
`;
