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
  ReactGA.pageview("/homepage");
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
      <Navigation homepage={true} key={ExpertPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${ExpertPageClassName}`}>
          <Bio
            name="Dr. Bernard Sisken"
            image="/img/bernard-sisken.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Bernard Siskin received a B.S. in Mathematics from the University of Pittsburgh and a Ph.D. in Statistics from the University of Pennsylvania. For many years, he taught statistics at Temple University and served as Chairman of the Department of Statistics.</p><p class='p-sm'>Dr. Siskin has specialized in the application of statistics in law, particularly in the area of analyzing data for statistical evidence of discrimination. He has testified for both plaintiffs and defendants in more than 200 cases, many of which were large employment class actions. In addition to discrimination studies, he has conducted statistical studies and has testified in commercial and environmental cases involving statistical issues.</p><p class='p-sm'>Dr. Siskin has frequently been appointed by federal judges as a neutral expert to aid the court in statistical issues and he was the statistical consultant to the Third Circuit Court of Appeals Task Force on Equal Treatment in the Courts.</p><p class='p-sm'>Dr. Siskin is the author of many articles and textbooks on statistics and quantitative techniques including Elementary Business Statistics, Encyclopedia of Management and Quantitative Techniques for Business Decisions. He has also written and lectured extensively on the use of statistics in litigation.</p><p class='p-sm'>Dr. Siskin has served as a statistical consultant to the U.S. Department of Justice, the Equal Employment Opportunity Commission, the U.S. Department of Labor, the Federal Bureau of Investigation, the Central Intelligence Agency, the Environmental Protection Agency, the National Aeronautics and Space Administration, and Fannie Mae (the Federal National Mortgage Association) and Freddie Mac (the Federal Home Loan Mortgage Corporation), as well as numerous other federal, state, and city agencies and Fortune Five Hundred corporations.</p>",
            }}
            education={[
              {
                year: 1970,
                location: "University of Pennsylvania",
                detail1: "Ph.D., Statistics",
                detail2: "Minor, Econometrics",
              },
              {
                year: 1966,
                location: "University of North Carolina",
                detail1: "Graduate Study Major, Economics",
                detail2: "Minor, Statistics",
              },
              {
                year: 1965,
                location: "University of Pittsburgh",
                detail1: "B.S., Mathematics",
                detail2: "Minor, Economics",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">B. Siskin, <i>"Employment Discrimination Litigation: Behavioral, Quantitative, and Legal Perspectives"</i>  John Wiley & Sons, Inc. 2005, Chapter 5 Statistical Issues in Litigation (with Joseph Trippi)</p>`,
              },
              {
                __html: `<p class="p-sm">B. Siskin and D. Griffin, <i>"Litigating Employment Discrimination & Sexual Harassment Claims,"</i> Litigation Handbook Series, 2002</p>`,
              },
              {
                __html: `<p class="p-sm">B. Siskin, H. Carter, V. Lee, G. Page, M. Parker, R.G. Ford, G. Swartzman, S. Kress, S. Singer and D.M. Fry, <i>"The 1986 Apex Houston Oil Spill in Central California: Seabird Mortality and Population Impacts, Injury Assessments, Litigation Process, and Initial Restoration Efforts,"</i> Marine Ornithology, 2002</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
