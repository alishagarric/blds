// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import { TriColumnTextClassName, TriColumnTextStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_TriColumnText = {
  columns: (
    | {
        _type: "stat";
        number?: string;
        unit?: string;
        text?: string;
        alignment?: "top" | "center" | "bottom";
      }
    | {
        _type: "html";
        text: {
          __html: string;
        };
        alignment?: "top" | "center" | "bottom";
      }
  )[];
};

/**
 *
 * @name TriColumnText
 * @author Alisha Garric
 * @requires /studio/sections/TriColumnText
 *
 */
export const TriColumnText: React.FunctionComponent<LMNTS_Section_TriColumnText> =
  ({ columns }) => {
    if (columns && columns.length > 0) {
      return (
        <TriColumnTextStyle className={`${TriColumnTextClassName}`}>
          <Inner className={`${TriColumnTextClassName}__inner`}>
            <div className={`${TriColumnTextClassName}__columns`}>
              {columns.map((column, idx) => {
                return (
                  <div
                    className={`${TriColumnTextClassName}__column __type-${
                      column._type
                    } ${
                      column.alignment ? `__alignment-${column.alignment}` : ""
                    }`}
                  >
                    {column._type == "html" && (
                      <div
                        className={`${TriColumnTextClassName}__column__html`}
                        dangerouslySetInnerHTML={column.text}
                      />
                    )}
                    {column._type == "stat" && (
                      <div
                        className={`${TriColumnTextClassName}__column__stat`}
                      >
                        {column.number && (
                          <div
                            className={`${TriColumnTextClassName}__column__stat__number h1`}
                          >
                            {column.number}
                          </div>
                        )}
                        {column.unit && (
                          <div
                            className={`${TriColumnTextClassName}__column__stat__unit txt-caption`}
                          >
                            {column.unit}
                          </div>
                        )}
                        {column.text && (
                          <p
                            className={`${TriColumnTextClassName}__column__stat__text p-lg`}
                          >
                            <b>{column.text}</b>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Inner>
        </TriColumnTextStyle>
      );
    } else return <></>;
  };

// End Component
// __________________________________________________________________________________________
