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
            name="Dr. Leonard Cupingood"
            image="/img/leonard-cuppingood.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Leonard Cupingood received his B.A. degree in Mathematics from Rutgers University and his M.A. and Ph.D. degrees in Statistics from Temple University.</p><p>He has extensive experience in conducting statistical analyses for employment discrimination cases in the areas of hiring, initial placement, wage disparities, transfers, promotions, layoffs, terminations, disciplinary actions and calculation of net liability both on an individual and class basis. In support of these efforts, he has provided deposition and trial testimony both as a data base expert and as a statistician. Dr. Cupingood also has expertise in preparing work force utilization analyses with respect to minority and female representation, and in the comparison of the racial composition of jury wheels to the racial composition of the underlying geographic areas.</p><p>Dr. Cupingood has expertise in the design and selection of scientific random samples used for inferences in matters relating to litigation. Some of the applications of sampling include selection of employees for random drug testing, audits of insurance companies regarding claims processing, estimation of amounts of fraud to support criminal prosecution by the FBI, and surveys of employees regarding the number of overtime hours worked in wage and hour litigation.</p><p>Dr. Cupingood also has expertise in designing and applying statistical models for the banking industry, including mortgage pricing models and analysis of loss mitigation in mortgage modification.</p><p>Dr. Cupingood is a member of the American Statistical Association. His article on the seasonal adjustment of time series appeared in The Journal of Business and Economic Statistics.</p>",
            }}
            education={[
              {
                year: 1985,
                location: "Temple University",
                detail1: "M.A., Statistics",
              },
              {
                year: 1979,
                location: "Temple University",
                detail1: "Graduate Study Major, Economics",
              },
              {
                year: 1972,
                location: "Temple University",
                detail1: "M.A., Mathematics",
              },
              {
                year: 1968,
                location: "Rutgers",
                detail1: "B.A., Mathematics",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">L. Cupingood, "Use of Statistical Models to Provide Statistical Evidence of Discrimination in the Treatment of Mortgage Loan Applicants: A Study of One Lending Institution," Mortgage Lending, Racial Discrimination and Federal Policy, Urban Institute Press, 1996, J. Georing and R. Wienk, eds</p>`,
              },
              {
                __html: `<p class="p-sm">L. Cupingood, "ARIMA Estimates of Stock Option Prices" presented at the annual meeting of the American Statistical Association, Anaheim, California, August 1990</p>`,
              },
              {
                __html: `<p class="p-sm">L. Cupingood, D. Griffin and B. Siskin, "Economic Damages in a Wrongful Discharge Matter," presented at the American Bar Association's Mid-Winter Meeting in Palm Springs, California, 1990</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
