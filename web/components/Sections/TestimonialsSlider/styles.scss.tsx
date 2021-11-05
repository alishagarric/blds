/**
 *
 * TestimonialsSlider.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website TestimonialsSlider Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TestimonialsSliderClassName = `testimonial-slider`;

export const TestimonialsSliderStyle = styled.section`
  &.${TestimonialsSliderClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 6);
    margin-bottom: calc(${Root.Size} * 6);

    .${TestimonialsSliderClassName}__container {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      .${TestimonialsSliderClassName}__headline {
        padding-bottom: calc(${Root.Size} * 3);
        text-align: center;
      }

      .${TestimonialsSliderClassName}__slider {
        position: relative;

        &__slide {
          text-align: center;
          padding-left: 10%;
          padding-right: 10%;
        }

        &:before, &:after {
          content: "";
          position: absolute;
          width: 10%;
          background: linear-gradient(to right, rgba(255, 255, 255, 0), ${Theme.Color.White});
          pointer-events: none;
          top: 0;
          bottom: 0;
          z-index: 2;
        }

        &:before {
          left: 0;
          transform: scaleX(-1);
        }

        &:after {
          right: 0;
        }

        .slick-dots {
          li {

            &.slick-active {
              button {
                background: ${Theme.Color.Text};
              }
            }

            button {
              border: 1px solid ${Theme.Color.Text};
              border-radius: 50%;

              &:before {
                content: none;
              }
            }
          }
        }

        .slick-arrow {
          height: 40px;
          width: 40px;
          border-top: 4px solid ${Theme.Color.Secondary};
          border-right: 4px solid ${Theme.Color.Secondary};
          transform: rotate(45deg);
          display: block;
          opacity: 1;
          bottom: 50%;
          top: auto;

          &:before {
            content: none;
          }

          &.slick-prev {
            transform: scaleX(-1) rotate(45deg);
          }
        }
      }
    }

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      margin-top: calc(${Root.Size} * 4);
      margin-bottom: calc(${Root.Size} * 4);

      .${TestimonialsSliderClassName}__container {
        width: 100%;

        .${TestimonialsSliderClassName}__slider {
          .slick-arrow {
            height: 20px;
            width: 20px;
            bottom: 0;
            z-index: 10;
            display: none !important;

            &.slick-prev {
              transform: scaleX(-1) rotate(45deg) translateY(100%);
              left: 20px;
            }

            &.slick-next {
              transform: translateY(100%) rotate(-45deg);
              right: 20px;
            }
          }

          .slick-dots {
            li button {
              height: 10px;
              width: 10px;
              padding: 0;
            }
          }
        }
      }
    }
  }
`;
