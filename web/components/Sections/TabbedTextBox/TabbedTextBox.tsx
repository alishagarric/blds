// Core
import Link from "next/link";
import React from "react";

// Styles
import { TabbedTextBoxClassName, TabbedTextBoxStyle } from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_TabbedTextBox = {
  headline?: string;
  layout?: "most-space" | "more-space" | "default";
  headlineAlignment?: "left" | "center" | "right";
  textBlocks?: (
    | {
        _type: "text";
        text: {
          __html: string;
        };
      }
    | {
        _type: "bio";
        name?: string;
        image?: string;
        summary?: string;
        link?: {
          label: string;
          dest: string;
        };
      }
  )[];
};

/**
 *
 * @name TabbedTextBox
 * @author Alisha Garric
 * @requires /studio/sections/TabbedTextBox
 *
 */
export const TabbedTextBox: React.FunctionComponent<LMNTS_Section_TabbedTextBox> =
  ({ headline, headlineAlignment, textBlocks, layout }) => {
    return (
      <TabbedTextBoxStyle className={`${TabbedTextBoxClassName}`}>
        <div
          className={`${TabbedTextBoxClassName}__container ${
            layout ? `__layout-${layout}` : ""
          }`}
        >
          {headline && (
            <div
              className={`${TabbedTextBoxClassName}__container__headline ${
                headlineAlignment ? `__alignment-${headlineAlignment}` : ""
              }`}
            >
              <h2 className={`h3`}>{headline}</h2>
            </div>
          )}
          {textBlocks &&
            textBlocks.length > 0 &&
            textBlocks.map((block, idx) => {
              if (block._type == "text") {
                return (
                  <div
                    className={`${TabbedTextBoxClassName}__container__item`}
                    dangerouslySetInnerHTML={block.text}
                    key={idx}
                  />
                );
              } else {
                return (
                  <div
                    className={`${TabbedTextBoxClassName}__container__item __type-${block._type}`}
                    key={idx}
                  >
                    {block.image && (
                      <div
                        className={`${TabbedTextBoxClassName}__container__item__image`}
                      >
                        <img
                          src={block.image}
                          alt={
                            block.name
                              ? block.name
                              : block.summary
                              ? block.summary
                              : "Image"
                          }
                        />
                      </div>
                    )}
                    {block.name && (
                      <h3
                        className={`${TabbedTextBoxClassName}__container__item__name p-sm`}
                      >
                        {block.name}
                      </h3>
                    )}
                    {block.summary && (
                      <p
                        className={`${TabbedTextBoxClassName}__container__item__summary p-sm`}
                      >
                        {block.summary}
                      </p>
                    )}
                    {block.link && (
                      <Link href={block.link.dest}>
                        <a
                          className={`${TabbedTextBoxClassName}__container__item__link`}
                        >
                          {block.link.label}
                        </a>
                      </Link>
                    )}
                  </div>
                );
              }
            })}
        </div>
      </TabbedTextBoxStyle>
    );
  };

// End Component
// __________________________________________________________________________________________
