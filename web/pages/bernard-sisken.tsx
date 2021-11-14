// Core
import React from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
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
            name="Dr. Bernard Sisken"
            image="/img/bernard-sisken.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Bernard Siskin received his Bachelors of Science in Mathematics from the University of Pittsburgh and a Ph.D. in Statistics from the Wharton School of the University of Pennsylvania. For many years, he taught statistics at Temple University and served as Chairman of the Department of Statistics.</p><p>Dr. Siskin has specialized in the application of statistics in law, particularly in the area of analyzing data for statistical evidence of discrimination. He has testified in Court, either in person or via deposition, for both Plaintiffs and Defendants in more than 200 cases, many of which were precedent-setting large employment class actions. In addition to employment discrimination litigation, Dr. Siskin has conducted statistical studies and has testified about discrimination in lending, housing, and insurance. He was retained by the Department of Justice in 1973 to bring its first fair lending discrimination cases based primarily on statistical analysis.</p><p>Over the course of his career, Dr. Siskin has advised Fannie Mae (the Federal National Mortgage Association), Freddie Mac (the Federal Home Loan Mortgage Corporation), FHFA (The Federal Housing Finance Agency), and most major U.S. banks. He is currently retained by the CFPB to aid in its enforcement actions. In the late 1990s Dr. Siskin developed a method for searching for alternative credit models with less disparate impact while maintaining acceptable accuracy, which has been adopted by most major lenders in the United States.</p><p>Dr. Siskin has frequently been appointed as a neutral expert by federal judges to aid the court in statistical issues and was the statistical consultant to the Third Circuit Court of Appeals Task Force on Equal Treatment in the Courts. Notable appointments have included appointment as an expert to measure the accuracy of a company’s vehicle valuation methodology and as an expert to assist in monitoring the fair lending implications of a large bank under judicial supervision.</p><p>Dr. Siskin is the author of numerous articles and textbooks on statistics and quantitative techniques. He has also written and lectured extensively on the use of statistics in litigation.<p>In addition to his work in the judicial system as an expert, Dr. Siskin has served as a statistical consultant to the U.S. Department of Justice, the Equal EmploymentOpportunity Commission, the U.S. Department of Labor, the Federal Bureau of Investigation, the Central Intelligence Agency, Consumer Financial Protection Bureau (CFPB), Office of Federal Contract Compliance Programs (OFCCP) and as well as numerous other federal, state, and city agencies and many of the Fortune 500 corporations</p>",
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
                __html: `<p class="p-sm">B. Siskin, "Comparing the Role of Statistics In Lending and Employment Cases," Fair Lending Analysis: A Compendium of Essays on the Use of Statistics, American Bankers Association, 1995.</p>`,
              },
              {
                __html: `<p class="p-sm">B. Siskin and D. Griffin, "Litigating Employment Discrimination & Sexual Harassment Claims," Litigation Handbook Series, 2002.</p>`,
              },
              {
                __html: `<p class="p-sm">B. Siskin, H. Carter, V. Lee, G. Page, M. Parker, R.G. Ford, G. Swartzman, S. Kress, S. Singer and D.M. Fry, "The 1986 Apex Houston Oil Spill in Central California: Seabird Mortality and Population Impacts, Injury Assessments, Litigation Process, and Initial Restoration Efforts," Marine Ornithology, 2002.</p>`,
              },
              {
                __html: `<p class="p-sm">B. Siskin, "Employment Discrimination Litigation: Behavioral, Quantitative, and Legal Perspectives" John Wiley & Sons, Inc. 2005, Chapter 5 Statistical Issues in Litigation (with Joseph Trippi).</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas, Siskin, Bernard, and Mansur, Syeed.  “How Data Scientists Help Regulators and Banks Ensure Fairness when Implementing Machine Learning and Artificial Intelligence Models.” Conference on Fairness, Accountability, and Transparency.  New York, NY. February 23 - 24, 2018.</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas and Siskin, Bernard.  “Proper Methods for Statistical Analysis of Promotions.”  In Adverse Impact Analysis: Understanding Data, Statistics, and Risk, edited by Morris, Scott and Dunleavy, Eric, New York: Psychology Press (Taylor & Francis), 2016.</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
