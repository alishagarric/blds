// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  BlurredItemsSectionClassName,
  BlurredItemsSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_BlurredItemsSection = {
  headline?: string;
  body?: { 
    __html: string;
  };
  focus_text: string;
  blurred_text: string;
};

/**
 *
 * @name BlurredItemsSection
 * @author Alisha Garric
 * @requires /studio/sections/BlurredItemsSection
 *
 */
export const BlurredItemsSection: React.FunctionComponent<LMNTS_Section_BlurredItemsSection> = ({
  headline,
  body,
  focus_text,
  blurred_text,
}) => {

  return (
    <BlurredItemsSectionStyle className={`${BlurredItemsSectionClassName}`}>
      <Inner className={`${BlurredItemsSectionClassName}__inner`}>
        {headline && <h2 className={`${BlurredItemsSectionClassName}__headline h3`}>{headline}</h2>}

        <div className={`${BlurredItemsSectionClassName}__content`}>

          <div className={`${BlurredItemsSectionClassName}__content__blurred-items`}>
            <p className={`${BlurredItemsSectionClassName}__content__blurred-items__focused p-lg`}>
              <span>{focus_text}</span>
            </p>
            <p className={`${BlurredItemsSectionClassName}__content__blurred-items__blurred p-lg`}>
              <span>{blurred_text}</span>
            </p>
          </div>

          <div className={`${BlurredItemsSectionClassName}__content__body`}>
            {body && <div className={`${BlurredItemsSectionClassName}__content__body__html`} dangerouslySetInnerHTML={body}/>}
          </div>
          
        </div>
      </Inner>
    </BlurredItemsSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
