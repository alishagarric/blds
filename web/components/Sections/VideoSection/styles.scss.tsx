/**
 *
 * VideoSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website VideoSection Styles. To be used in horizontal loop
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

export const VideoSectionClassName = `video-section`;

export const VideoSectionStyle = styled.section`
  &.${VideoSectionClassName} {

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      
    }
  }
`;
