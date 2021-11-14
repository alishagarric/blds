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
            name="Dr. Samuel Kursh"
            image="/img/sam-kursh.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Dr. Samuel J. Kursh specializes in the calculation of economic damages in commercial and employment litigation matters. His practice includes the valuation of common and preferred stock, restricted stock, employment related options, fixed income and common-equity securities in both closely-held and actively traded public companies. He has been retained to advise or opine on issues of valuation theory and practice.</p><p>Dr. Kursh has previously served as chief financial officer and general manager of construction-materials distributor. His extensive experience in corporate finance and management has been applied to the calculation of lost profits in a broad spectrum of commercial matters. He earned his doctorate in Business Administration at The George Washington University.</p>",
            }}
            education={[
              {
                year: 1974,
                location: "The George Washington University",
                detail1: "D.B.A.",
              },
              {
                year: 1971,
                location: "The George Washington University",
                detail1: "M.E.A.",
              },
              {
                year: 1969,
                location: "University of Delaware",
                detail1: "B.E.A.",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">"An Overview of Valuation Theory and Practice with Reference to Emerging Growth Companies" (with Brett Margolin), Pennsylvania Bar Institute Pub. No.4533, April 2007</p>`,
              },
              {
                __html: `<p class="p-sm">"Who Gets More Harry or Sally? Conducting Meaningful Investigation of Pay Equity ", Society for Human Resource Management, August 2006</p>`,
              },
              {
                __html: `<p class="p-sm">"The Elusive Concept of Distributor Value", Beer Business Daily, December 2005</p>`,
              },
              {
                __html: `<p class="p-sm">"The Economics of Delaware Fair Value" (with Brett Margolin), Vol. 30, No.2 The Delaware Journal of Corporate Law, Winter 2005</p>`,
              },
              {
                __html: `<p class="p-sm">"The Quiet Conflict", National Law Journal Opinion Page, April 1, 2002</p>`,
              },
              {
                __html: `<p class="p-sm">"Weinberg V. Commissioner: Good Law, Bad Economics, Or Both?" Judges & Lawyers Business Valuation, June 2000</p>`,
              },
              {
                __html: `<p class="p-sm">"Will We All Be Shedding Tiers?" The Beer Letter, www.BeerNet.com, February 7, 2000</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
