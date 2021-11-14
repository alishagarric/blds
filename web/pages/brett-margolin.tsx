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
            name="Dr. Brett Margolin"
            image="/img/brett-margolin.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Brett Margolin, resident in the Wilmington, Delaware office of BLDS, provides economic analyses in litigation. His active business valuation practice in corporate governance and bankruptcy matters focuses on appraisal actions, solvency opinions, and the type of private-company dissolution litigation that has become known as “business divorce.” The business divorce matters also leverage Dr. Margolin’s extensive experience evaluating economic damages in commercial litigation, including intellectual property and contract disputes, and frequently address issues of personal goodwill and excess compensation. His practice also regularly evaluates lost earnings damages in employment and personal injury matters, and has addressed issues of statistical and financial modeling in unclaimed property audits and litigation. Dr. Margolin has testified in a number of state and federal jurisdictions, including the Delaware Court of Chancery.</p>",
            }}
            education={[
              {
                year: 1998,
                location: "George Mason University",
                detail1: "Ph.D., (Economics)",
              },
              {
                year: 1993,
                location: "University of Delaware",
                detail1: "B.S., (Economics)",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">“Chapter 6: Issues in Damages and Valuation” (with Jaime d’Almeida and Boris Steffan) in Litigating the Business Divorce, Kurt Heyman and Melissa Donimirski, eds., 2016</p>`,
              },
              {
                __html: `<p class="p-sm">“The Affordable Care Act and Personal Injury Damages, Parts I and II” The Legal Intelligencer, October 14-15, 2014</p>`,
              },
              {
                __html: `<p class="p-sm">“The Use, Selection and Compensation of Experts from an Expert’s Perspective: Parts 1 and 2” Ethically Speaking column of The Journal of the Delaware State Bar Association, November 2013 and January 2014</p>`,
              },
              {
                __html: `<p class="p-sm">"Estimation Fight at the AUP Corral” Law360, October 24, 2013</p>`,
              },
              {
                __html: `<p class="p-sm">“The Economics of Delaware Fair Value” (with Samuel J. Kursh), Vol. 30, No.2 The Delaware Journal of Corporate Law, Winter 2005</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
