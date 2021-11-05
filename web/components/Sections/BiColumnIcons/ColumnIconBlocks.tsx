// Core
import React from "react";

// Styles
import {
  ColumnIconBlocksClassName,
  ColumnIconBlocksStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ColumnIconBlocks = {
  icons: {
    icon: any;
    label?: string;
  }[];
};

/**
 *
 * @name ColumnIconBlocks
 * @author Alisha Garric
 * @requires /studio/sections/ColumnIconBlocks
 *
 */
export const ColumnIconBlocks: React.FunctionComponent<LMNTS_Section_ColumnIconBlocks> = ({
  icons,
}) => {

  return (
    <ColumnIconBlocksStyle className={`${ColumnIconBlocksClassName}`}>
      {icons && icons.length > 0 &&
        icons.map((block, idx) => {
          return (
            <div key={idx} className={`${ColumnIconBlocksClassName}__block`}>
              {block.icon}
              {block.label && <p className={`${ColumnIconBlocksClassName}__block__label p-sm`} >{block.label}</p>}
            </div>
          );
        })
      }
    </ColumnIconBlocksStyle>
  );
};

// End Component
// __________________________________________________________________________________________
