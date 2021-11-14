// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import { BioClassName, BioStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_Bio = {
  name: string;
  image: string;
  bio: {
    __html: string;
  };
  education?: {
    year: number;
    location: string;
    detail1: string;
    detail2?: string;
  }[];
  publications?: {
    __html: string;
  }[];
};

/**
 *
 * @name Bio
 * @author Alisha Garric
 * @requires /studio/sections/Bio
 *
 */
export const Bio: React.FunctionComponent<LMNTS_Section_Bio> = ({
  name,
  image,
  bio,
  education,
  publications,
}) => {
  return (
    <BioStyle className={`${BioClassName}`}>
      <Inner className={`${BioClassName}__inner`}>
        <div className={`${BioClassName}__bio`}>
          <div className={`${BioClassName}__bio__image`}>
            <img src={image} alt={name} />
          </div>
          <div className={`${BioClassName}__bio__name`}>
            <h2 className={`h3`}>{name}</h2>
          </div>
          <div
            className={`${BioClassName}__bio__text`}
            dangerouslySetInnerHTML={bio}
          />
          {education && education.length > 0 && (
            <div className={`${BioClassName}__bio__education`}>
              <h3 className={`${BioClassName}__bio__education__label`}>
                Education
              </h3>
              {education.map((item, idx) => {
                return (
                  <div
                    className={`${BioClassName}__bio__education__item`}
                    key={idx}
                  >
                    <p
                      className={`${BioClassName}__bio__education__item__year p-sm`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`${BioClassName}__bio__education__item__name p-sm`}
                    >
                      {item.location}
                    </p>
                    <p className={`p-sm`}>{item.detail1}</p>
                    {item.detail2 && (
                      <p
                        className={`${BioClassName}__bio__education__item__italic p-sm`}
                      >
                        {item.detail2}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {publications && publications.length > 0 && (
            <div className={`${BioClassName}__bio__publications`}>
              <h3 className={`${BioClassName}__bio__publications__label`}>
                Publications
              </h3>
              {publications.map((item, idx) => {
                return (
                  <div
                    className={`${BioClassName}__bio__publications__item`}
                    key={idx}
                    dangerouslySetInnerHTML={item}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
      </Inner>
    </BioStyle>
  );
};

// End Component
// __________________________________________________________________________________________
