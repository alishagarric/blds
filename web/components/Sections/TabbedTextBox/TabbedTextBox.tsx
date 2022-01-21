// Core
import Link from "next/link";
import React from "react";
import { TriColumnTextClassName } from "../TriColumnText/styles.scss";

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
    | {
        _type: "stat";
        number?: string;
        unit?: string;
        text?: string;
        size?: "short";
        alignment?: "top" | "center" | "bottom";
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
export const TabbedTextBox: React.FunctionComponent<
  LMNTS_Section_TabbedTextBox
> = ({ headline, headlineAlignment, textBlocks, layout }) => {
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
            } else if (block._type == "stat") {
              return (
                <div
                  className={`stat ${block.size == "short" ? "__short" : ""}`}
                >
                  {block.number && (
                    <div className={`stat__number h1`}>{block.number}</div>
                  )}
                  {block.unit && (
                    <div className={`stat__unit txt-caption`}>{block.unit}</div>
                  )}
                  {block.text && (
                    <p className={`stat__text h5`}>
                      <b>{block.text}</b>
                    </p>
                  )}
                </div>
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
