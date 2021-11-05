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

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const PuzzleSectionClassName = `puzzle-section`;

export const PuzzleSectionStyle = styled.section`
  &.${PuzzleSectionClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);

    .${PuzzleSectionClassName}__headline {
      padding-bottom: calc(${Root.Size} * 2);
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

        &__html {
          padding-bottom: calc(${Root.Size} * 1.5);
        }

      }

      &__pieces {
        position: relative;

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

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
