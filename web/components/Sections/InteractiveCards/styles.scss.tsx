/**
 *
 * InteractiveCards.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website InteractiveCards Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { hexToRGB } from "../../../utils/hexToRGB";
import { BirdClassName } from "../../_svg/Birds/Bird";
import { CircleDecorClassName } from "../../_svg/CircleDecor/CircleDecor";
import { ButtonClassName } from "../Button/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const InteractiveCardsClassName = `interactive-cards`;

export const InteractiveCardsStyle = styled.section`
  &.${InteractiveCardsClassName} {
    position: relative;
    background: ${Theme.Color.Background};
    padding-top: calc(${Root.Size} * 4);
    padding-bottom: calc(${Root.Size} * 4);
    overflow: hidden;

    .${BirdClassName}, .${CircleDecorClassName} {
      position: absolute;
      pointer-events: none;
      z-index: 0;
    }

    .${BirdClassName} {
      right: 0;
      top: 50%;
      height: 90%;
      width: auto;
      transform: translate(50%, -50%);
    }

    .${CircleDecorClassName} {
      bottom:  0;
      left: 0;
      width: 50%;
      height: auto;
    }

    .${InteractiveCardsClassName}__content {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      > .${ButtonClassName} {
        display: none;
      }

      .${InteractiveCardsClassName}__headline {
        padding-bottom: calc(${Root.Size} * 2);
        width: 100%;
      }

      .${InteractiveCardsClassName}__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1;
        margin-bottom: calc(${Root.Size} * 2);

        > .${ButtonClassName} {
          margin-top: 0;
          
          a, div {
            padding-left: 0;
            padding-right: 0;
            border: none;
            flex-direction: row;
            text-align: center;

            svg {
              display: inline;
              margin-right: 10px;
            }
          }
        }

        &__card-sets-nav {
          display: flex;

          &__item {
            cursor: pointer;
            white-space: nowrap;

            &:not(.__active) {
              opacity: 0.5;

              .${ButtonClassName} a, .${ButtonClassName} div  {
                color: ${Theme.Color.Text};
                border-color: ${Theme.Color.Text};
              }
            }

            .${ButtonClassName} {
              margin-top: 0;
              margin-right: ${Root.Size};

              a, div {
                padding-left: ${Root.Size};
                padding-right: ${Root.Size};  
              }
            }
          }
        }
      }

      .${InteractiveCardsClassName}__card-sets {
        width: 100%;

        &__cards {
          display: none;
          position: relative;
          z-index: 1;
          width: calc(100% + calc(calc(100% / 3) * 2/10));
          flex-wrap: wrap;
          justify-content: flex-end;

          
          .${InteractiveCardsClassName}__card {
            flex: 0 0 calc(100% / 3);
            position: relative;
            padding-top: calc(100% / 3);

            &:nth-of-type(2) {
              margin-right: calc(100% / 3);
            }

            &:nth-of-type(3){
              margin-left: calc(100% / 3);
            }
            
            &__inner {
              position: absolute;
              top: 0;
              left: 0;
              width: 80%;
              height: 80%;
              background: ${Theme.Color.White};
              padding: 5% 10% 5% 5%;
              will-change: transform, background-color, color;
              transition: transform 0.5s linear 0s, color 0.5s linear 0s, background-color 0.5s linear 0s; ;
              cursor: pointer;

              &__label {
                opacity: 0.5;
              }

              &__back {
                opacity: 0;
                position: absolute;
                top: 50%;
                left: 5%;
                right: 10%;
                transform: scaleX(-1) translateY(-50%);
              }

              &__back, &__front {
                padding-bottom: 0;
                font-size: 1.1rem;
              }

              &__label, &__back, &__front, &__index {
                will-change: opacity;
                transition: opacity 0s linear 0.25s;
                overflow: hidden;
              }

              &:nth-of-type(3){
                grid-row: 2 / 3;
                grid-column: 2 / 3;
              }

              &:nth-of-type(4){
                grid-row: 2 / 3;
                grid-column: 3 / 4;
              }

              &:nth-of-type(5){
                grid-row: 3 / 4;
                grid-column: 3 / 4;
              }

              &:hover {
                box-shadow: 0px 0px 0 5px ${hexToRGB(Theme.Color.Grey, 0.25)};
              }

              &.__active {
                transform: scaleX(-1);
                background-color: ${Theme.Color.Text};
                color: ${Theme.Color.White};

                .${InteractiveCardsClassName}__card__inner__back {
                  opacity: 1;
                }

                .${InteractiveCardsClassName}__card__inner {

                  &__front, &__index, &__label {
                    opacity: 0;
                  }
                }
              }
            }

            &:after {
              content: "";
              position: absolute;
              height: 0px;
              width: 0px;
              border-left: 15px solid transparent;
              border-right: 15px solid transparent;
              border-top: 15px solid ${Theme.Color.Secondary};
              opacity: 0.43;
            }

            &:nth-of-type(1):after, &:nth-of-type(3):after {
              left: 90%;
              top: 40%;
              transform: translate(-50%, -50%) rotate(-90deg);
            }

            &:nth-of-type(2):after, &:nth-of-type(4):after {
              top: 90%;
              left: 10%;
              transform: translate(-50%, -50%);
            }

            &:last-of-type:after {
              content: none;
            }
          }

          &.__active {
            display: flex;
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      .${InteractiveCardsClassName}__content {
        .${InteractiveCardsClassName}__card-sets {
          .${InteractiveCardsClassName}__card {
            &__inner {
              &__front, &__back {
                font-size: 1.25vw;
              }
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      padding-left: calc(${Root.Size} * 3);
      padding-right: calc(${Root.Size} * 3);

      .${CircleDecorClassName} {
        left: auto;
        right: 0;
        transform: rotate(-90deg);
      }

      .${InteractiveCardsClassName}__content {
        width: 100%;

        > .${ButtonClassName} {
          display: flex;
          position: relative;
          z-index: 2;
          
          a, div {
            padding-left: 0;
            padding-right: 0;
            border: none;
            flex-direction: row;
            text-align: center;

            svg {
              display: inline;
              margin-right: 10px;
            }
          }
        }

        .${InteractiveCardsClassName}__header {
          > .${ButtonClassName} {
            display: none;
          }
        }

        .${InteractiveCardsClassName}__card-sets {

          &__cards {
            width: 100%;
            justify-content: flex-start;

            .${InteractiveCardsClassName}__card {
              flex: 0 0 calc(50% - ${Root.Size});
              padding-top: 0;
              margin-right: ${Root.Size};
              margin-bottom: ${Root.Size};

              &:nth-of-type(odd) {
                margin-right: ${Root.Size};
                margin-left: 0;
              }

              &:nth-of-type(even) {
                margin-left: ${Root.Size};
                margin-right: 0;
              }

              &__inner {
                position: relative;
                width: 100%;
                height: 100%;  
                cursor: auto; 

                &__back, &__front {
                  font-size: 1rem;
                }             

                &__back {
                  opacity: 1;
                  position: relative;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  transform: none;
                  margin-top: calc(${Root.Size} * 1.5);
                  padding-top: calc(${Root.Size} * 1);
                  border-top: 1px solid ${Theme.Color.Text};

                  &:before {
                    content: "";
                    height: 0px;
                    display: block;
                    width: 0px;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-top: 15px solid ${Theme.Color.Secondary};
                    opacity: 0.43;
                    margin-bottom: ${Root.Size};
                  }
                }

                &:hover {
                  box-shadow: none;
                }

                &.__active { 
                  transform: none;
                  background-color: ${Theme.Color.White};
                  color: ${Theme.Color.Text};
                  
                  .${InteractiveCardsClassName}__card__inner {
                    &__front, &__index, &__label {
                      opacity: 1;
                    }
                  }
                }
              }

              &:after {
                content: none;
              }
            }
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      padding-left: 0;
      padding-right: 0;
      overflow: visible;

      .${BirdClassName}, .${CircleDecorClassName} {
        display: none;
      }

      .${InteractiveCardsClassName}__content {
        position: relative;

        .${InteractiveCardsClassName}__headline {
          padding-bottom: 0;
        }

        .${InteractiveCardsClassName}__header {
          position: -webkit-sticky;
          position: sticky;
          top: 0px;
          z-index: 2;
          background: ${Theme.Color.Background};
          padding-bottom: 5px;
          padding-top: 50px;

          &__card-sets-nav {
            width: 100%;
            justify-content: space-between;

            &__item {
              flex: calc(calc(100% / 3) - ${Root.Size});
              white-space: normal;
              margin-right: calc(${Root.Size} / 2);
              
              &:last-of-type {
                margin-right: 0;
              }

              .${ButtonClassName} {
                margin-right: 0;
                font-size: 0.7rem;
                height: 100%;
                width: 100%;
                

                a, div {
                  padding: calc(${Root.Size} / 2);
                  height: 100%;
                  display: grid;
                  place-content: center;
                  width: 100%;
                  text-align: center;
                }
              }

            }
          }
        }

        .${InteractiveCardsClassName}__card-sets {
          z-index: 1;

          &__cards {
            .${InteractiveCardsClassName}__card {
              flex: 0 0 100%;

              &:nth-of-type(odd) {
                margin-right: 0;
              }

              &:nth-of-type(even) {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
`;
