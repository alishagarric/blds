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
            name="Dr. David Griffin"
            image="/img/david-griffin.jpg"
            bio={{
              __html:
                "<p class='p-sm'>David W. Griffin received his Ph.D. in Economics from Cornell University and B.S. and M.S. degrees in Economics from Rutgers University. Since 1983, he has specialized in the application of statistical theory and methodology to questions of liability and damages arising in employment discrimination litigation. He has offered expert testimony numerous times in Federal and state courts has been an invited speaker to various legal groups on the topic of statistical evidence of discrimination.</p>",
            }}
            education={[
              {
                year: 1989,
                location: "Cornell University",
                detail1: "Ph.D.",
              },
              {
                year: 1975,
                location: "Rutgers University",
                detail1: "M.S.",
              },
              {
                year: 1972,
                location: "Rutgers University",
                detail1: "B.S.",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">D. Griffin, R. DuPont, B. Siskin, S. Shiraki, and E. Katze, "Random Drug Tests at Work: The Probability of Identifying Frequent and Infrequent Users of Illicit Drugs," Journal of Addictive Diseases, Vol. 14, Number 3, 1995</p>`,
              },
              {
                __html: `<p class="p-sm">D. Griffin, R. DuPont, B. Siskin, S. Shiraki, and E. Katze, "Random Workplace Drug Testing: Does It Primarily Identify Casual or Regular Drug Users," Employment Testing, Vol. 4, No. 1, 1995</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
