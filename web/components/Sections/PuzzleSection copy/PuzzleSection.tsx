// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Birds/Bird";
import { Checkmark } from "../../_svg/Icons/Checkmark";
import { Fire } from "../../_svg/Icons/Fire";
import { Logotype } from "../../_svg/Logos/Logotype";
import { Puzzle } from "../../_svg/Puzzle/Puzzle";

// Styles
import {
  PuzzleSectionClassName,
  PuzzleSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_PuzzleSection = {
  headline?: string;
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
      <Inner className={`${PuzzleSectionClassName}__inner`}>
        {headline && <h2 className={`${PuzzleSectionClassName}__headline h3`}>{headline}</h2>}

        <div className={`${PuzzleSectionClassName}__content`}>
          <div className={`${PuzzleSectionClassName}__content__body`}>
            <Fire />
            {sub_headline && <h3 className={`${PuzzleSectionClassName}__content__body__subheadline`}>{sub_headline}</h3>}
            {body && <div className={`${PuzzleSectionClassName}__content__body__html`} dangerouslySetInnerHTML={body}/>}
          </div>
          {puzzle_pieces && puzzle_pieces.length > 0 && 
            <div className={`${PuzzleSectionClassName}__content__pieces`}>
              <Puzzle />
              {puzzle_pieces.map((piece, idx) => {
                return (
                  <p key={idx}><span>{piece}</span></p>
                )
              })}
            </div>
          }
        </div>
      </Inner>
    </PuzzleSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
