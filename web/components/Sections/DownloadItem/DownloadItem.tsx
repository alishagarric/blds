// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  DownloadItemClassName,
  DownloadItemStyle,
} from "./styles.scss";

//Components
import { Fire } from "../../_svg/Icons/Fire";
import { Button } from "../Button";
import { ButtonClassName, ButtonStyle } from "../Button/styles.scss";


// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_DownloadItem = {
  headline?: { 
    __html: string 
  };
  item_for_download: string;
  email_formspree_link?: string;
};

/**
 *
 * @name DownloadItem
 * @author Alisha Garric
 * @requires /studio/sections/DownloadItem
 *
 */
export const DownloadItem: React.FunctionComponent<LMNTS_Section_DownloadItem> = ({
  item_for_download,
  email_formspree_link,
  headline,
}) => {

  return (
    <DownloadItemStyle className={`${DownloadItemClassName}`}>



      <Inner>
        <div className={`${DownloadItemClassName}__container`}>
          <div className={`${DownloadItemClassName}__papers-image`}>
            <img alt={"Download papers"} src={"/img/papers.png"} />
          </div>
          <div className={`${DownloadItemClassName}__content`}>
            {headline && <div className={`${DownloadItemClassName}__content__headline`} dangerouslySetInnerHTML={headline}/>}
            {email_formspree_link ?
              <div className={`${DownloadItemClassName}__content__download-form`}>
                <form action={email_formspree_link} method="POST">
                  <ButtonStyle className={`${DownloadItemClassName}__content__download-form__input ${ButtonClassName} __clr-blue`}>
                    <input className="txt-caption" required type="email" name="_replyto" placeholder={"Email"}/>
                  </ButtonStyle> 
                  <ButtonStyle className={`${ButtonClassName}`}>
                    <button className="txt-caption" type="submit">Download</button>
                  </ButtonStyle>
                </form>
              </div>
              :
              <Button label={"Download"} download={item_for_download} />
            }
          </div>
        </div>
      </Inner>

    </DownloadItemStyle>
  );
};

// End Component
// __________________________________________________________________________________________
