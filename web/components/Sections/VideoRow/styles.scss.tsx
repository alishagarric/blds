/**
 *
 * VideoRowStyle.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website VideoRowStyle Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { CssUtils } from "../../../constants/styles/CssUtils";
import { Theme } from "../../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const VideoRowClassName = "video-row";

export const VideoRowStyle = styled.div`
  &.${VideoRowClassName} {
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   position: relative;
   z-index: 1;

   > .txt-caption {
    width: calc(100% / 2.5);
    margin-bottom: calc(${Root.Size} / 1);

    &:after {
      content: "";
      display: inline-block;
      margin-left: calc(${Root.Size} / 1);
      transform: translateY(20%);
      height: 0px;
      width: 0px;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 15px solid ${Theme.Color.Secondary};
      opacity: 0.43;
    }
   }
    

    .${VideoRowClassName}__trailer {
      padding-bottom: calc(56.25% / 2.5);
      position: relative;
      width: calc(100% / 2.5);

      &__toggle {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        transform: translate(-50%, -50%) scale(.7);
       // opacity: 0.5;
        border-radius: 50%;
        background: ${Theme.Color.Background};
        height: 150px;
        width: 150px;
        border: none;
        font-size: 5rem;
        will-change: opacity;
        transition: opacity .25 ease;
        padding: 0;

        &:focus, &:hover {
          opacity: 0.8;
        }
      }

      > *:not(button) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      img {
        ${CssUtils.ObjectFit()};
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      align-items: flex-start;

      > .txt-caption {
        width: 50%;
        margin-top: calc(${Root.Size} * 2);
      }

      .${VideoRowClassName}__trailer {
        width: 50%;
        padding-bottom: calc(56.25% / 2);

        &__toggle {
          font-size: 9vw;
          height: 18vw;
          width: 18vw;
        }
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Sm}) {

      > .txt-caption {
        width: 100%;
      }

      .${VideoRowClassName}__trailer {
        width: 100%;
        padding-bottom: calc(56.25% / 1);

        &__toggle {
          font-size: 12vw;
          height: 24vw;
          width: 24vw;
        }
      }
    }
  }
`;
