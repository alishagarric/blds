// Core
import React from "react";
import { Inner } from "../../Inner";
import { Warning } from "../../_svg/Icons/Warning";

// Styles
import {
  WarningSectionClassName,
  WarningSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_WarningSection = {
  text: { 
    __html: string;
  };
};

/**
 *
 * @name WarningSection
 * @author Alisha Garric
 * @requires /studio/sections/WarningSection
 *
 */
export const WarningSection: React.FunctionComponent<LMNTS_Section_WarningSection> = ({
  text,
}) => {

  return (
    <WarningSectionStyle className={`${WarningSectionClassName}`}>
      <Inner className={`${WarningSectionClassName}__inner`}>
        <div className={`${WarningSectionClassName}__warning-box`}>
          <Warning />
          <div dangerouslySetInnerHTML={text}/>
        </div>
      </Inner>
    </WarningSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
