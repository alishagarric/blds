// Core
import React from "react";
import { Inner } from "../../Inner";
import Slider from "react-slick";

// Styles
import {
  TestimonialsSliderClassName,
  TestimonialsSliderStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_TestimonialsSlider = {
  headline?: string;
  testimonials: {
    testimonial: string;
    author?: string;
  }[];
};

/**
 *
 * @name TestimonialsSlider
 * @author Alisha Garric
 * @requires /studio/sections/TestimonialsSlider
 *
 */
export const TestimonialsSlider: React.FunctionComponent<LMNTS_Section_TestimonialsSlider> = ({
  headline,
  testimonials,
}) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    buttons: true
  };

  return (
    <TestimonialsSliderStyle className={`${TestimonialsSliderClassName}`}>
      <Inner>
        <div className={`${TestimonialsSliderClassName}__container`}>
          {headline && <h2 className={`${TestimonialsSliderClassName}__headline h3`}>{headline}</h2>}

          <Slider {...settings} className={`${TestimonialsSliderClassName}__slider`}>
            {testimonials && testimonials.length > 0 && 
              testimonials.map((testimonial, idx) => {
                return (
                  <div key={idx} className={`${TestimonialsSliderClassName}__slider__slide`}>
                    <p className="h4">{testimonial.testimonial}</p>
                    {testimonial.author && 
                      <p className="h4"><i>—{testimonial.author}</i></p>
                    }
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </Inner>
    </TestimonialsSliderStyle>
  );
};

// End Component
// __________________________________________________________________________________________
