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
import { Color } from "../../constants/styles/Color";
import { Theme } from "../../constants/Theme";
import { FooterClassName } from "../Footer/styles.scss";
import { ButtonClassName } from "../Sections/Button/styles.scss";
import { ExitClassName } from "../_svg/Icons/Exit";
import { HamburgerClassName } from "../_svg/Icons/Hamburger";
import { LogoClassName } from "../_svg/Logos/Logo";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NavigationClassName = `nav`;
export const NavigationOverlayClassName = `nav-overlay`;

export const NavigationStyle = styled.nav`
  &.${NavigationClassName} {
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    padding: calc(${Root.Size} / 2);
    will-change: transform;
    transition: transform 0.25s ease;

    > *:first-child {
      align-items: baseline;
      flex-wrap: nowrap;
    }

    &.__layout-alt {
      .${NavigationClassName} {
        &__tagline {
          align-self: flex-end;
          margin: calc(${Root.Size} * 1.5) calc(${Root.Size} / 2)
            calc(${Root.Size} * 1.5) 0;
          font-size: 2.1875rem;

          span {
            display: block;
            white-space: nowrap;
            padding-left: 20%;
          }
        }
      }

      ~ footer {
        .${FooterClassName} {
          &__main {
            p {
              max-width: 200px;
            }
          }

          &__bottom {
            grid-column: 1 / -1;
            text-align: center;
          }

          &__form {
            display: block;
          }
        }
      }
    }

    .${NavigationClassName}__logo {
      color: ${Color.Purple4};
      cursor: pointer;

      * {
        padding-bottom: 0;
      }

      &__menu-toggle {
        display: none;
      }
    }

    .${NavigationClassName}__links {
      display: flex;
      align-items: center;
      flex: 1;

      &__list {
        display: flex;
        align-items: center;
        padding: 0 calc(${Root.Size} / 2);

        &__item {
          padding-right: calc(${Root.Size} / 2);

          a.txt-caption {
            height: 90px;
            font-size: 1rem;
            font-weight: 600;
            position: relative;
            color: ${Color.Purple4};
            white-space: nowrap;

            &:after {
              content: "";
              left: 0;
              opacity: 0;
              width: 100%;
              position: absolute;
              bottom: calc(${Root.Size} / -12);
              height: 3px;
              background-color: ${Color.Orange};
            }

            &:hover {
              text-decoration: none;

              &:after {
                opacity: 1;
              }
            }
          }
        }
      }
    }

    .${NavigationClassName}__tagline {
      font-size: 1.75rem;
      padding-bottom: 0;
      font-style: italic;
    }

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      &.${NavigationClassName} {
        &.__layout-alt {
          .${NavigationClassName} {
            &__tagline {
              font-size: 2.5vw;
              margin-right: 0;
            }
          }
        }
      }
      .${NavigationClassName}__logo {
        .${LogoClassName} {
          height: 40px;
          width: auto;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      .${NavigationClassName}__logo {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        &__menu-toggle {
          display: block;

          .${HamburgerClassName} {
            width: auto;
            height: 30px;
          }
        }
      }

      .${NavigationClassName}__links__list, .${NavigationClassName}__tagline {
        display: none;
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      padding: 0;

      .${NavigationClassName}__logo {
        .h2 {
          line-height: 1.4;
        }
      }

      &.${NavigationClassName} {
        &.__layout-alt {
          ~ footer {
            .${FooterClassName} {
              &__main {
                p {
                  max-width: none;
                }
              }
            }
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
    background: ${Color.OffWhite};
    color: ${Color.Black};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    padding: ${Root.Size};
    flex-direction: column;
    justify-content: space-between;

    .${NavigationOverlayClassName}__exit {
      display: flex;
      justify-content: flex-end;

      .${ExitClassName} {
        width: 30px;
        height: auto;

        &:hover {
          cursor: pointer;
        }

        * {
          fill: ${Color.Orange};
        }
      }
    }

    .${NavigationOverlayClassName}__links {
      flex: 1;
      display: grid;
      place-content: center;

      &__list {
        text-align: center;

        &__item {
          a {
            font-size: 5vw;
            text-transform: uppercase;
            font-weight: 600;
            padding: 2vw 0;
            display: block;
            position: relative;

            &:after {
              height: 3px;
              width: 100%;
              background: ${Color.Orange};
              position: absolute;
              left: 0;
              bottom: 1vw;
            }

            &:hover {
              text-decoration: none;

              &:after {
                content: "";
              }
            }
          }
        }
      }
    }

    &.__active {
      display: flex;

      ~ main,
      ~ footer {
        display: none;
      }

      @media (min-width: ${Base.Media.Width.Md + "px"}) {
        display: none;
      }
    }
  }
`;
