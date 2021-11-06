/**
 *
 * Footer.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Footer Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Base } from "../../constants/styles/Base";
import { Color } from "../../constants/styles/Color";
import { Font } from "../../constants/styles/Font";
import { Theme } from "../../constants/Theme";
import { BlueBirdClassName } from "../_svg/Birds/BlueBird";
import { LogoClassName } from "../_svg/Logos/Logo";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterClassName = "footer";

export const FooterStyle = styled.footer`
  color: ${Color.White};
  padding: ${Root.Size};

  &.${FooterClassName} {
    > *:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-end;
    }

    .${FooterClassName} {
      &__main {
        grid-column: 1 / 2;

        p {
          padding-bottom: 0;
        }
      }

      &__form {
        display: none;
      }

      &__bottom {
        text-align: right;
        grid-column: 2 / 3;

        p {
          padding-bottom: 0;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    }
  }
`;
