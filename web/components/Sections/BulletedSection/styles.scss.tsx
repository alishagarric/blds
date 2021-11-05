/**
 *
 * BulletedSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website BulletedSection Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { RedBird, RedBirdClassName } from "../../_svg/Birds/RedBird";
import { CheckmarkClassName } from "../../_svg/Icons/Checkmark";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BulletedSectionClassName = `bulleted-section`;

export const BulletedSectionStyle = styled.section`
  &.${BulletedSectionClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);

    .${BulletedSectionClassName}__container {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      .${BulletedSectionClassName}__headline {
        padding-bottom: calc(${Root.Size} * 1.5);
      }

      .${BulletedSectionClassName}__content {
        display: flex;
        flex-direction: row;

        &__body, &__children {
          flex: 1;
        }

        &__body {
          &__html {
            padding-bottom: calc(${Root.Size} * 1.5);
          }

          &__bullets {
            li {
              display: flex;
              align-items: flex-start;
              padding-bottom: ${Root.Size};

              .${CheckmarkClassName} {
                margin-right: calc(${Root.Size} / 2);
                flex: 0 0 22px;
                transform: translateY(50%);
              }
            }
          }

          + .${BulletedSectionClassName}__content__children {
            margin-left: calc(${Root.Size} * 3);
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      .${BulletedSectionClassName}__container {
        width: 100%;

        .${BulletedSectionClassName}__headline {
          padding-left: calc(${Root.Size} * 3);
          padding-right: calc(${Root.Size} * 3);
        }

        .${BulletedSectionClassName}__content {
          flex-direction: column;

          &__body {
            padding-left: calc(${Root.Size} * 3);
            padding-right: calc(${Root.Size} * 3);
          }

          &__body {
            + .${BulletedSectionClassName}__content__children {
              width: calc(100% + 1.5rem);
              margin-left: calc(.75rem * -1);
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      .${BulletedSectionClassName}__container {
        .${BulletedSectionClassName}__headline {
          padding-left: 0;
          padding-right: 0;
        }

        .${BulletedSectionClassName}__content {
          &__body {
            padding-left: 0;
            padding-right: 0;

            &__bullets {
              li {

                .${CheckmarkClassName} {
                  transform: translateY(25%);
                }
              }
            }
          }
        }
      }
    }
  }
`;
