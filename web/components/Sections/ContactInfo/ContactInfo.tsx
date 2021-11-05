// Core
import React from "react";
import { Email } from "../../_svg/Icons/Email";
import { Location } from "../../_svg/Icons/Location";

// Styles
import {
  ContactInfoClassName,
  ContactInfoStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ContactInfo = {
};

/**
 *
 * @name ContactInfo
 * @author Alisha Garric
 * @requires /studio/sections/ContactInfo
 *
 */
export const ContactInfo: React.FunctionComponent<LMNTS_Section_ContactInfo> = ({
}) => {

  return (
    <ContactInfoStyle className={`${ContactInfoClassName}`}>
      <div className={`${ContactInfoClassName}__row`}>
        <Email />
        <p className={`${ContactInfoClassName}__row__text`}><a href="mailto:info@solas.ai">info@solas.ai</a></p>
      </div>

      <div className={`${ContactInfoClassName}__row`}>
        <Location />
        <p className={`${ContactInfoClassName}__row__text`}>
          <a href="https://www.google.com/maps/place/1608+Walnut+St,+Philadelphia,+PA+19103/@39.9498457,-75.168124,15z/data=!4m13!1m7!3m6!1s0x89c6c63a9cfaf4db:0x537ccbb7f99ea981!2s1608+Walnut+St,+Philadelphia,+PA+19103!3b1!8m2!3d39.9495016!4d-75.1680817!3m4!1s0x89c6c63a9cfaf4db:0x537ccbb7f99ea981!8m2!3d39.9495016!4d-75.1680817" target="_blank">
            1608 Walnut St. 
            <br/>
            Suite 1108
            <br/>
            Philadelphia, PA 19103
          </a>
        </p>
      </div>
    </ContactInfoStyle>
  );
};

// End Component
// __________________________________________________________________________________________

