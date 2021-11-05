// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  VideoSectionClassName,
  VideoSectionStyle,
} from "./styles.scss";

//Components
import { Fire } from "../../_svg/Icons/Fire";


// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_VideoSection = {
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
 * @name VideoSection
 * @author Alisha Garric
 * @requires /studio/sections/VideoSection
 *
 */
export const VideoSection: React.FunctionComponent<LMNTS_Section_VideoSection> = ({
  alt,
  image,
  text_blocks,
  headline,
}) => {

  return (
    <VideoSectionStyle className={`${VideoSectionClassName}`}>

      <div className={`${VideoSectionClassName}__image`}>
        <img alt={alt} src={image} />
      </div>

      <Inner>
        <div className={`${VideoSectionClassName}__content`}>
          <Fire />
          {headline && <div className={`${VideoSectionClassName}__content__headline`} dangerouslySetInnerHTML={headline}/>}
          {text_blocks && text_blocks.length > 0 &&
            <div className={`${VideoSectionClassName}__content__blocks`}>
              {text_blocks.map((block, idx) => {
                return(
                  <div key={idx} className={`${VideoSectionClassName}__content__blocks__block`}>
                    {block.label && <p className={`${VideoSectionClassName}__content__blocks__block__label h2`}>{block.label}</p>}
                    {block.text && <p>{block.text}</p>}
                  </div>
                );
              })}
            </div>
          }
        </div>
      </Inner>

    </VideoSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
