/**
 *
 * Listings.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Listings Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const InnerStyle = styled.div`
  --innerGutter: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  padding-left: var(--innerGutter);
  padding-right: var(--innerGutter);
  max-width: ${Theme.Base.Grid.SiteWidth};

  @media (max-width: ${Base.Media.Width.Md + "px"}) {
    --innerGutter: 5%;
  }
`;
