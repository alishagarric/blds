/**
 *
 * ColumnIconBlocks.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ColumnIconBlocks Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ColumnIconBlocksClassName = `column-icon-blocks`;

export const ColumnIconBlocksStyle = styled.div`
  &.${ColumnIconBlocksClassName} {
    --verticalSpace: calc(${Root.Size} * 3);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: calc(var(--verticalSpace) * -1);

    .${ColumnIconBlocksClassName}__block {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex: 0 0 50%;
      padding: 0 calc(${Root.Size} * 2) var(--verticalSpace) calc(${Root.Size} * 2);

      &__label {
        padding-top: ${Root.Size};
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      .${ColumnIconBlocksClassName}__block {
        padding: 0 0 var(--verticalSpace) 0;
        

        &__label {
          padding-left: calc(${Root.Size} / 2);
          padding-right: calc(${Root.Size} / 2);
        }
      }

    }
  }
`;
