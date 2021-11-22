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
            name="Chris Stocks"
            image="/img/chris-stocks.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Chris is a Manager in the Algorithmic Fairness and Data Science practices at SolasAI, where he helps clients build fair, highly predictive models using advanced machine learning and explainable AI techniques. Prior to his work with SolasAI and BLDS LLC, Chris analyzed disparities in credit outcomes at the Consumer Financial Protection Bureau to support fair lending actions that resulted in millions of dollars in restitution to consumers. Chris also serves on the board of the Foundation for Best Practices in Machine Learning, where he chairs the Technical Best Practices committee.</p><p>While in graduate school, Chris worked on fair lending projects part time at both BLDS, LLC and Hudson Cook, LLP, a Consumer Financial Services Law Firm. He’s been involved in many projects involving discrimination measurement, algorithmic bias, disparity mitigation, and explainable AI in fields like credit, healthcare, and insurance.</p><p>Chris has had meaningful experience working on issues around fairness across government, at a law firm, and in consulting. He brings a blend of compliance experience from many fields and perspectives, alongside quantitative abilities that allow him to cross between worlds to be a highly effective data scientist.</p><p>Chris hopes to use his experience on both the regulatory and industry side of fair AI in fields like credit, healthcare, and marketing to help bridge the gap between academic ideals of fairness and how algorithms can be made more equitable in practice. Chris has an MS in Business Analytics.</p>",
            }}
            publications={[
              {
                __html: `<p class="p-sm">Dietrich, Jason and Schneider, Karl and Stocks, Chris, Small Business Lending and the Great Recession (January 16, 2020). Consumer Financial Protection Bureau Office of Research Reports Series No. 20-1</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
