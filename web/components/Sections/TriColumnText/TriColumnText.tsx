// Core
import React from "react";

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
        size?: "longest" | "long" | "short";
      }
    | {
        _type: "html";
        text: {
          __html: string;
        };
        alignment?: "top" | "center" | "bottom";
        size?: "longest" | "long" | "short";
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
export const TriColumnText: React.FunctionComponent<
  LMNTS_Section_TriColumnText
> = ({ columns }) => {
  if (columns && columns.length > 0) {
    return (
      <TriColumnTextStyle className={`${TriColumnTextClassName}`}>
        <div className={`${TriColumnTextClassName}__columns`}>
          {columns.map((column, idx) => {
            return (
              <div
                className={`${TriColumnTextClassName}__column __type-${
                  column._type
                } ${
                  column.alignment ? `__alignment-${column.alignment}` : ""
                } ${
                  column.size == "long"
                    ? "__long"
                    : column.size == "short"
                    ? "__short"
                    : column.size == "longest"
                    ? "__longest"
                    : ""
                }`}
              >
                {column._type == "html" && (
                  <div
                    className={`${TriColumnTextClassName}__column__html`}
                    dangerouslySetInnerHTML={column.text}
                  />
                )}
                {column._type == "stat" && (
                  <div className={`stat`}>
                    {column.number && (
                      <div className={`stat__number h1`}>{column.number}</div>
                    )}
                    {column.unit && (
                      <div className={`stat__unit txt-caption`}>
                        {column.unit}
                      </div>
                    )}
                    {column.text && (
                      <p className={`stat__text h5`}>
                        <b>{column.text}</b>
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </TriColumnTextStyle>
    );
  } else return <></>;
};

// End Component
// __________________________________________________________________________________________
