/**
 *
 * WarningSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website WarningSection Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { WarningClassName } from "../../_svg/Icons/Warning";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const WarningSectionClassName = `warning-section`;

export const WarningSectionStyle = styled.section`
  &.${WarningSectionClassName} {
    .${WarningSectionClassName}__warning-box {
      background-color: rgba(255, 0, 0, 10%);
      padding: ${Root.Size} calc(${Root.Size} * 2) calc(${Root.Size} * 2) calc(${Root.Size} * 2);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;

      .${WarningClassName} {
        margin-bottom: ${Root.Size};
      }

      p {
        padding-bottom: 0;
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
