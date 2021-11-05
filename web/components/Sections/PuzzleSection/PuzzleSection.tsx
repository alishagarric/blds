// Core
import React from "react";
import { Inner } from "../../Inner";
import { Fire } from "../../_svg/Icons/Fire";
import { Puzzle } from "../../_svg/Puzzle/Puzzle";
import { Anchor } from "../Anchor";

// Styles
import {
  PuzzleSectionClassName,
  PuzzleSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_PuzzleSection = {
  headline?: { 
    __html: string;
  };
  sub_headline?: string;
  body?: { 
    __html: string 
  };
  puzzle_pieces?: string[];
};

/**
 *
 * @name PuzzleSection
 * @author Alisha Garric
 * @requires /studio/sections/PuzzleSection
 *
 */
export const PuzzleSection: React.FunctionComponent<LMNTS_Section_PuzzleSection> = ({
  headline,
  sub_headline,
  body,
  puzzle_pieces,
}) => {

  return (
    <PuzzleSectionStyle className={`${PuzzleSectionClassName}`}>
      <Anchor id="why-solasai" />
      <Inner className={`${PuzzleSectionClassName}__inner`}>
        <div className={`${PuzzleSectionClassName}__container`}>
          {headline && <div className={`${PuzzleSectionClassName}__headline`} dangerouslySetInnerHTML={headline}/>}


          <div className={`${PuzzleSectionClassName}__content`}>
            <div className={`${PuzzleSectionClassName}__content__body`}>
              <Fire />
              {sub_headline && <h3 className={`${PuzzleSectionClassName}__content__body__subheadline h5`}>{sub_headline}</h3>}
              {body && <div className={`${PuzzleSectionClassName}__content__body__html`} dangerouslySetInnerHTML={body}/>}
            </div>
            {puzzle_pieces && puzzle_pieces.length > 0 && 
              <div className={`${PuzzleSectionClassName}__content__pieces`}>
                <div className={`${PuzzleSectionClassName}__content__pieces__container`}>
                  <Puzzle />
                  {puzzle_pieces.map((piece, idx) => {
                    return (
                      <p key={idx} className="p-sm"><span>{piece}</span></p>
                    )
                  })}
                </div>
              </div>
            }
          </div>
        </div>
      </Inner>
    </PuzzleSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
