// Core
import React from "react";

// Styles
import { ContactFormClassName, ContactFormStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ContactForm = {
  headline?: string;
  subheadline?: string;
  body?: {
    __html: string;
  };
  offices?: {
    __html: string;
  }[];
};

/**
 *
 * @name ContactForm
 * @author Alisha Garric
 * @requires /studio/sections/ContactForm
 *
 */
export const ContactForm: React.FunctionComponent<LMNTS_Section_ContactForm> =
  ({ headline, subheadline, body, offices }) => {
    return (
      <ContactFormStyle className={`${ContactFormClassName}`}>
        <div className={`${ContactFormClassName}__container`}>
          {headline && (
            <div className={`${ContactFormClassName}__container__headline`}>
              <h2 className={`h3`}>{headline}</h2>
            </div>
          )}
          {subheadline && (
            <div className={`${ContactFormClassName}__container__subheadline`}>
              <p className={`h6`}>{subheadline}</p>
            </div>
          )}
          {body && (
            <div
              className={`${ContactFormClassName}__container__body`}
              dangerouslySetInnerHTML={body}
            />
          )}

          <div className={`${ContactFormClassName}__container__form`}>
            <form>
              <fieldset
                className={`${ContactFormClassName}__container__form__name`}
              >
                <label htmlFor="Name">Name</label>
                <input name="Name" type="text" required />
              </fieldset>
              <fieldset
                className={`${ContactFormClassName}__container__form__subject`}
              >
                <label htmlFor="Subject">Subject</label>
                <input name="Subject" type="text" required />
              </fieldset>
              <fieldset
                className={`${ContactFormClassName}__container__form__email`}
              >
                <label htmlFor="_replyTo">Email</label>
                <input name="_replyTo" type="text" required />
              </fieldset>
              <fieldset
                className={`${ContactFormClassName}__container__form__message`}
              >
                <label htmlFor="Message">Message</label>
                <textarea name="Message" required />
              </fieldset>
              <fieldset
                className={`${ContactFormClassName}__container__form__company`}
              >
                <label htmlFor="Company">Company</label>
                <input name="Company" type="text" />
              </fieldset>
              <div
                className={`${ContactFormClassName}__container__form__submit txt-caption`}
              >
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>

          {offices && offices.length > 0 && (
            <div className={`${ContactFormClassName}__container__offices`}>
              <div
                className={`${ContactFormClassName}__container__offices__label`}
              >
                <h3 className={`h3`}>Offices</h3>
              </div>
              {offices.map((item, idx) => {
                return (
                  <div
                    className={`${ContactFormClassName}__container__offices__item`}
                    dangerouslySetInnerHTML={item}
                    key={idx}
                  />
                );
              })}
            </div>
          )}
        </div>
      </ContactFormStyle>
    );
  };

// End Component
// __________________________________________________________________________________________
