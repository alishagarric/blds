// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  CtaRowClassName,
  CtaRowStyle,
} from "./styles.scss";

//Components
import { RedBird } from "../../_svg/Birds/RedBird";
import { Button } from "../Button";


// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_CtaRow = {
  headline?: string;
  cta?: {
    link: string;
    label: string;
    target?: string;
  }
};

/**
 *
 * @name CtaRow
 * @author Alisha Garric
 * @requires /studio/sections/CtaRow
 *
 */
export const CtaRow: React.FunctionComponent<LMNTS_Section_CtaRow> = ({
  cta,
  headline,
}) => {

  return (
    <CtaRowStyle className={`${CtaRowClassName}`}>

      <div className={`${CtaRowClassName}__brandmark`}>
        <RedBird />
      </div>

      <Inner className={`${CtaRowClassName}__inner`}>
        <div className={`${CtaRowClassName}__content`}>
          {headline && <h2 className="h3">{headline}</h2>}
          {cta &&
            <Button link={cta.link} label={cta.label} target={cta.target} />
          }
        </div>
      </Inner>

    </CtaRowStyle>
  );
};

// End Component
// __________________________________________________________________________________________
