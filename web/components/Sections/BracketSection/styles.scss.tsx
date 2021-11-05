/**
 *
 * BracketSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website BracketSection Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BracketSectionClassName = `bracket-section`;

export const BracketSectionStyle = styled.section`
  &.${BracketSectionClassName} {
    --verticalLineHeight: calc(${Root.Size} * 1.5);
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);

    .${BracketSectionClassName}__content {
      margin-left: auto;
      margin-right: auto;

      .${BracketSectionClassName}__headline {
        text-align: center;
        padding-bottom: calc(${Root.Size} * 1.5);
        max-width: 410px;
        margin-left: auto;
        margin-right: auto;
      }

      .${BracketSectionClassName}__blocks {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid ${Theme.Color.Text};
        position: relative;
        margin: calc(${Root.Size} * 1.5) auto 0 auto;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          height: calc(${Root.Size} * 2);
          left: 0;
          right: 0;
          border-left: 1px solid ${Theme.Color.Text};
          border-right: 1px solid ${Theme.Color.Text};
          pointer-events: none;
        }

        &:before {
          content: "";
          position: absolute;
          width: 1px;
          height: var(--verticalLineHeight);
          background-color: ${Theme.Color.Text};
          left: 50%;
          top: 0;
          transform: translate(-50%, -100%);
        }

        &__block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 0 0 25%;
          padding: calc(${Root.Size} * 1.5) ${Root.Size} 0 ${Root.Size};

          &__label {
            padding-top: ${Root.Size};
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      .${BracketSectionClassName}__content {
        max-width: 600px;
        
        .${BracketSectionClassName}__blocks {
          &__block {
            flex: 0 0 50%;
          }
        }

      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
