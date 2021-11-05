/**
 *
 * ArrowModel.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ArrowModel Styles. To be used in horizontal loop
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

export const ArrowModelClassName = `arrow-model`;

export const ArrowModelStyle = styled.div`
  &.${ArrowModelClassName} {
    --arrowSpace: ${Root.Size};
    overflow: hidden;

    .${ArrowModelClassName}__item {
      position: relative;
      text-align: center;

      p {  
        color: ${Theme.Color.White};
        padding: ${Root.Size} ${Root.Size} calc(${Root.Size} * 1.5) ${Root.Size};
        position: relative;
        z-index: 2;
      }

      &:after, &:before {
        content: "";
        top: 0;
        background-color: ${Theme.Color.Secondary};
        border-bottom: 3px solid ${Theme.Color.White};
        position: absolute;
        bottom: 0;
      }

      &:after {
        left: -50%;
        right: 50%;
        transform: rotate(3deg);
        transform-origin: bottom right;
      }
      
      &:before {
        right: -50%;
        left: 50%;
        transform: rotate(-3deg);
        transform-origin: bottom left;
      }

      &:nth-of-type(2):after, &:nth-of-type(2):before {
        background-color: ${Theme.Color.Red2};
      }

      &:nth-of-type(3):after, &:nth-of-type(3):before {
        background-color: ${Theme.Color.Red3};
      }

      &:nth-of-type(4):after, &:nth-of-type(4):before {
        background-color: ${Theme.Color.Red4};
      }

      &:nth-of-type(5):after, &:nth-of-type(5):before {
        background-color: ${Theme.Color.Red5};
      }

    }
  }
`;
