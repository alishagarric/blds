// Core
import React from "react";
import { Inner } from "../../Inner";
import { Checkmark } from "../../_svg/Icons/Checkmark";
import { Anchor } from "../Anchor";

// Styles
import {
  BulletedSectionClassName,
  BulletedSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_BulletedSection = {
  headline?: string;
  body?: { 
    __html: string 
  };
  bullets?: string[];
};

/**
 *
 * @name BulletedSection
 * @author Alisha Garric
 * @requires /studio/sections/BulletedSection
 *
 */
export const BulletedSection: React.FunctionComponent<LMNTS_Section_BulletedSection> = ({
  headline,
  body,
  bullets,
  children
}) => {

  return (
    <BulletedSectionStyle className={`${BulletedSectionClassName}`}>
      <Anchor id="why-now" />
      <Inner>
        <div className={`${BulletedSectionClassName}__container`}>
          {headline && <h2 className={`${BulletedSectionClassName}__headline h3`}>{headline}</h2>}

          <div className={`${BulletedSectionClassName}__content`}>
            <div className={`${BulletedSectionClassName}__content__body`}>
              {body && <div className={`${BulletedSectionClassName}__content__body__html`} dangerouslySetInnerHTML={body}/>}
              {bullets && bullets.length > 0 && 
                <ul className={`${BulletedSectionClassName}__content__body__bullets`}>
                  {bullets.map((bullet, idx) => {
                    return (
                      <li key={idx}>
                        <Checkmark />
                        <p className="p-lg">{bullet}</p>
                      </li>
                    )
                  })}
                </ul>
              }
            </div>
            <div className={`${BulletedSectionClassName}__content__children`}>
              {children}
            </div>
          </div>
        </div>
      </Inner>
    </BulletedSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
