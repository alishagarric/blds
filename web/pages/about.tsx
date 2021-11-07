// Core
import React, { useEffect } from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TriColumnText } from "../components/Sections/TriColumnText";
import { TabbedTextBox } from "../components/Sections/TabbedTextBox";
import { Inner } from "../components/Inner";

// Begin Component
// __________________________________________________________________________________________

type AboutPage = {};

export const AboutPageClassName = "about";

function initializeReactGA() {
  ReactGA.initialize("G-FX52XQGXD1");
  ReactGA.pageview("/about");
}

/**
 *
 * @name AboutPage
 * @author Alisha Garric
 *
 */
const AboutPage: NextPage<AboutPage> = () => {
  return (
    <>
      <Navigation homepage={false} key={AboutPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${AboutPageClassName}`}>
          <Inner>
            <TabbedTextBox
              headline="About BLDS"
              headlineAlignment="center"
              textBlocks={[
                {
                  _type: "text",
                  text: {
                    __html: `<p class="p-lg"><span class="first-letter">F</span>or nearly 45 years the nationally recognized statistics and economics experts of BLDS have advised law firms and their clients – including Fortune 500 corporations, government agencies, and privately held businesses – on a wide variety of issues that require quantitative expertise and explanation.</p>`,
                  },
                },
                {
                  _type: "text",
                  text: {
                    __html:
                      "<p style='color:#373B55'>Led by Bernard R. Siskin, Ph.D., BLDS statistical experts provide independent expert analysis in applied statistics and effectively communicate both the results and implications of their work. They have been retained in matters of employment discrimination including hiring, promotion, compensation, reductions-in-force, and class action certification. BLDS experts are frequently retained to analyze the work force impact of planned management actions in an effort to minimize litigation exposure.</p>",
                  },
                },
              ]}
            />
            <TriColumnText
              columns={[
                {
                  _type: "html",
                  text: {
                    __html: `<p>BLDS's rigorous statistical approach has also been applied to questions of credit discrimination, wage and hour disputes, and insurance issues.</p>`,
                  },
                },
                {
                  _type: "html",
                  text: {
                    __html: `<p>BLDS economic experts provide litigation support and advisory services on economic damages in commercial, employment, and tort actions. They are also recognized experts in business valuation theory and practice, including valuation discounts and premiums.</p>`,
                  },
                },
                {
                  _type: "html",
                  text: {
                    __html: `<p>BLDS experts have been appointed by Courts as neutral experts and have testified before federal, state, and local courts – including the Delaware Court of Chancery – and before arbitration panels.</p>`,
                  },
                },
              ]}
            />
          </Inner>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
