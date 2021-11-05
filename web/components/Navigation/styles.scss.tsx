/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Navigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";
import { ButtonClassName } from "../Sections/Button/styles.scss";
import { ContactInfoClassName } from "../Sections/ContactInfo/styles.scss";
import { OverlayBirdClassName } from "../_svg/Birds/OverlayBird";
import { BrandmarkClassName } from "../_svg/Brandmark/Brandmark";
import { ExitClassName } from "../_svg/Icons/Exit";
import { HamburgerClassName } from "../_svg/Icons/Hamburger";
import { LogoClassName } from "../_svg/Logos/Logo";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NavigationClassName = `nav`;
export const NavigationOverlayClassName = `nav-overlay`;

export const NavigationStyle = styled.nav`
  &.${NavigationClassName} {
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 ${Root.Size};
    align-items: center;
    background: ${Theme.Color.Background};
    will-change: transform;
    transition: transform .25s ease;

    &.__hidden {
      transform: translateY(-90px);
    }

    .${NavigationClassName}__logo {
      .${BrandmarkClassName} {
        display: none;
      }

      &__menu-toggle {
        display: none;
      }
    }

    .${NavigationClassName}__links {
      display: flex;
      align-items: center;

      &__list {
        display: flex;
        align-items: center;
        padding-right: ${Root.Size};

        &__item {
          padding-right: calc(${Root.Size} * 1.5);
          p {
            padding-bottom: 0;

            a {
              height: 90px;
              display: block;
              display: flex;
              align-items: center;
            }
          }
        }
      }

      .${ButtonClassName} {
        margin-top: 0;
        background: ${Theme.Color.Secondary};

        a, div {
          color: ${Theme.Color.White};
        }
        
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      .${NavigationClassName}__logo {
        .${LogoClassName} {
          height: 40px;
          width: auto;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      padding: 0 5px 0 ${Root.Size};
      
      .${NavigationClassName}__logo {
        display: flex;
        align-items: center;

        .${BrandmarkClassName} {
          display: block;
          height: 40px;
          margin-top: 5px;
          margin-bottom: 5px;
          width: auto;
        }

        .${LogoClassName} {
          display: none;
        }

        &__menu-toggle {
          display: block;
          margin-right: calc(${Root.Size} / 2);

          .${HamburgerClassName} {
            width: auto;
            height: 30px;
          }
        }
      }

      .${NavigationClassName}__links {
        &__list {
          display: none;
        }

        .${ButtonClassName} {

          a, div {
            height: 40px;
            padding-top: 0;
            padding-bottom: 0;
            display: grid;
            place-content: center;
          }
        }
      }
    }
  }
`;

export const NavigationOverlayStyle = styled.nav`
  &.${NavigationOverlayClassName} {
    position: fixed;
    display: none;
    background: ${Theme.Color.Text};
    color: ${Theme.Color.White};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    padding: ${Root.Size};
    flex-direction: column;
    justify-content: space-between;

    .${OverlayBirdClassName}{
      position: absolute;
      height: 80%;
      right: -20%;
      width: auto;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
    }

    .${NavigationOverlayClassName}__exit, .${NavigationOverlayClassName}__links, .${ContactInfoClassName} {
      position: relative;
      z-index: 1;
    }

    .${NavigationOverlayClassName}__social {
      position: absolute;
      bottom: calc(${Root.Size} * 1.5);
      right: calc(${Root.Size} * 1.5);

      svg {
        width: calc(${Root.Size} * 1.5);
        height: calc(${Root.Size} * 1.5);
        margin-bottom: calc(${Root.Size} / 3);
      }
    }  

    .${NavigationOverlayClassName}__exit {
      padding-bottom: calc(${Root.Size} * 3);
      .${ExitClassName} {
        width: 30px;
        height: auto;
      }
    } 

    .${NavigationOverlayClassName}__links {
      flex: 1;

      &__list {
        &__item {
          a {
            font-size: 10vw;
            text-transform: uppercase;
            font-weight: 600;
            padding: 2vw 0;
            display: block;
          }
        }
      }
    }

    &.__active {
      display: flex;

      ~ main, ~ footer {
        display: none;
      }

      @media (min-width: ${Base.Media.Width.Md + "px"}) {
        display: none;
      }
    }
  }
`;