// Core
import React from "react";

// Styles
import { ButtonClassName, ButtonStyle } from "./styles.scss";

//Components

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_Button = {
  link?: string;
  label: string;
  target?: string;
  download?: string;
  noSmoothScroll?: boolean;
};

/**
 *
 * @name Button
 * @author Alisha Garric
 * @requires /studio/sections/Button
 *
 */
export const Button: React.FunctionComponent<LMNTS_Section_Button> = ({
  link,
  label,
  download,
  target,
  noSmoothScroll,
}) => {
  if (download) {
    return (
      <ButtonStyle className={`${ButtonClassName}`}>
        <a className="txt-caption" href={download} download>
          {label}
        </a>
      </ButtonStyle>
    );
  } else if (link && target) {
    return (
      <ButtonStyle className={`${ButtonClassName}`}>
        <a
          href={link}
          target={target ? target : "_self"}
          className="txt-caption"
        >
          {label}
        </a>
      </ButtonStyle>
    );
  } else if (link && noSmoothScroll) {
    return (
      <ButtonStyle className={`${ButtonClassName}`}>
        <a href={link} className="txt-caption">
          {label}
        </a>
      </ButtonStyle>
    );
  } else {
    return (
      <ButtonStyle className={`${ButtonClassName}`}>
        <div className="txt-caption">{label}</div>
      </ButtonStyle>
    );
  }
};

// End Component
// __________________________________________________________________________________________
