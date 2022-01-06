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
  ReactGA.initialize("G-FX52XQGXD1");
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
            name="Dr. Susanne Shay"
            image="/img/avatar.png"
            bio={{
              __html:
                "<p class='p-sm'>Susanne Shay received her B.S. (magna cum laude), M.A. and Ph.D. degrees in Psychology from Temple University. While at Temple, she taught psychology and conducted research on jury decision making processes. Her doctoral dissertation focused on the effects of defendant character attractiveness and juror authoritarianism on juror decision making.<p/><p>Dr. Shay has primary responsibility for editing the reports produced by the Philadelphia Office of BLDS, LLC. She previously had supervisory responsibility for data management of all the large data projects conducted by BLDS as well as all survey research conducted by them.</p><p>Prior to joining BLDS, Dr. Shay had supervisory responsibility for data management of all the large data projects conducted by LECG and the Center for Forensic Economic Studies as well as all survey research conducted them. Dr. Shay also worked on a variety of lending discrimination and employment discrimination cases for the U.S. Department of Justice and for state governments and was chief investigator for independent primary research for clients in the private sector.</p><p>Prior to joining the Center, Dr. Shay was a market research analyst with responsibility for executing survey research studies involving consumer product satisfaction, concept tests, television, print and radio commercial testing. She has extensive experience in questionnaire design, database management and both quantitative and qualitative research, including in-depth interviews and focus groups. Her clients included many Fortune 500 corporations.</p><p>Dr. Shay is a member of Phi Beta Kappa.</p>",
            }}
            education={[
              {
                year: 1987,
                location: "Temple University",
                detail1: "Ph.D., Social Psychology",
              },
              {
                year: 1983,
                location: "Temple University",
                detail1: "Master of Arts",
              },
              {
                year: 1977,
                location: "Temple University",
                detail1: "B.A, magna cum laude",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">John Lamberth, Edith Krieger and Susanne Shay, Juror Decision Making: A Case of Attitude Change Mediated by Authoritarianism, <i>Journal of Research in Personality</i>, Volume 16, Issue 4, December 1982, pages 419-434.</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
