/**
 *
 * SplitSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website SplitSection Styles. To be used in horizontal loop
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

export const SplitSectionClassName = `split-section`;

export const SplitSectionStyle = styled.section`
  &.${SplitSectionClassName} {
    display: flex;
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);
    position: relative;
    background: ${Theme.Color.Background};

    .${SplitSectionClassName}__image {
      background: ${Theme.Color.Grey};
      position: absolute;
      left: 0;
      width: 50%;
      top: 0;
      height: 100%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .${SplitSectionClassName}__content {
      width: 50%;
      margin-left: 50%;
      padding: calc(${Root.Size} * 3) 0 calc(${Root.Size} * 4) calc(${Root.Size} * 4);

      .${FireClassName}{
        margin-bottom: ${Root.Size};
      }

      &__blocks {
        display: flex;
        flex-wrap: wrap;
        padding-top: ${Root.Size};

        &__block {
          flex: 0 0 50%;
          padding-right: 5%;
          padding-bottom: ${Root.Size};

          &:nth-of-type(even){
            padding-right: 0;
            padding-left: 5%;
          }

          &__label {
            font-weight: 700;
            padding-bottom: 0;
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      flex-direction: column-reverse;

      .${SplitSectionClassName}__image {
        position: relative;
        width: 100%;
        height: auto;

        img {
          position: relative;
          object-fit: contain;
        }
      }

      .${SplitSectionClassName}__content {
        width: 100%;
        margin-left: 0;
        padding: calc(${Root.Size} * 3) calc(${Root.Size} * 3) 0 calc(${Root.Size} * 3);
      }
    }
    
    
    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      .${SplitSectionClassName}__content {
        padding-left: 0;
        padding-right: 0;

        &__blocks {
          &__block {
            flex: 0 0 100%;
            padding-right: 0;
            padding-left: 0 !important;

            &:last-of-type {
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
`;
