// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  SplitSectionClassName,
  SplitSectionStyle,
} from "./styles.scss";

//Components
import { Fire } from "../../_svg/Icons/Fire";


// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_SplitSection = {
  headline?: { 
    __html: string 
  };
  text_blocks: {
    label?: string;
    text?: string;
  }[];
  image: string;
  alt: string;
};

/**
 *
 * @name SplitSection
 * @author Alisha Garric
 * @requires /studio/sections/SplitSection
 *
 */
export const SplitSection: React.FunctionComponent<LMNTS_Section_SplitSection> = ({
  alt,
  image,
  text_blocks,
  headline,
}) => {

  return (
    <SplitSectionStyle className={`${SplitSectionClassName}`}>

      <div className={`${SplitSectionClassName}__image`}>
        <img alt={alt} src={image} />
      </div>

      <Inner>
        <div className={`${SplitSectionClassName}__content`}>
          <Fire />
          {headline && <div className={`${SplitSectionClassName}__content__headline`} dangerouslySetInnerHTML={headline}/>}
          {text_blocks && text_blocks.length > 0 &&
            <div className={`${SplitSectionClassName}__content__blocks`}>
              {text_blocks.map((block, idx) => {
                return(
                  <div key={idx} className={`${SplitSectionClassName}__content__blocks__block`}>
                    {block.label && <p className={`${SplitSectionClassName}__content__blocks__block__label h2`}>{block.label}</p>}
                    {block.text && <p>{block.text}</p>}
                  </div>
                );
              })}
            </div>
          }
        </div>
      </Inner>

    </SplitSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
