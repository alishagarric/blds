// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  AnchorClassName,
  AnchorStyle,
} from "./styles.scss";

//Components
import Link from "next/link";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_Anchor = {
  id: string;
};

/**
 *
 * @name Anchor
 * @author Alisha Garric
 * @requires /studio/sections/Anchor
 *
 */
export const Anchor: React.FunctionComponent<LMNTS_Section_Anchor> = ({
  id
}) => {

  return (
    <AnchorStyle className={`${AnchorClassName}`} id={id}/>
  );

};

// End Component
// __________________________________________________________________________________________
