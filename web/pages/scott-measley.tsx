// Core
import React, { useEffect } from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TriColumnText } from "../components/Sections/TriColumnText";
import { Bio } from "../components/Sections/Bio";

// Begin Component
// __________________________________________________________________________________________

type ExpertPage = {};

export const ExpertPageClassName = "expert";

function initializeReactGA() {
  ReactGA.initialize("G-F3FQVRWRVS");
  ReactGA.pageview("/expert");
}

/**
 *
 * @name ExpertPage
 * @author Alisha Garric
 *
 */
const ExpertPage: NextPage<ExpertPage> = () => {
  return (
    <>
      <Navigation homepage={false} key={ExpertPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${ExpertPageClassName}`}>
          <Bio
            name="Scott Measley, M.B.A"
            image="/img/scott-measley.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Mr. Measley specializes in the calculation of economic damages in personal injury, wrongful death, employment and commercial litigation matters. He also works on assignments valuing employment related options and common-equity securities in both closely-held and actively traded public companies. Mr. Measley earned his M.B.A. from Drexel University in 1994.</p>",
            }}
            education={[
              {
                year: 1994,
                location: "Drexel University",
                detail1:
                  "LeBow College of Business Master of Business Administration, Business Economics",
              },
              {
                year: 1991,
                location: "The Richard Stockton College of New Jersey",
                detail1: "Bachelors of Arts, Economics",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
