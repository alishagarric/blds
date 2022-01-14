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
            name="Dr. Christopher Erath"
            image="/img/chris-erath.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Dr. Erath received A.B. degrees in Economics and Mathematics from Bowdoin College and a Master's degree and Ph.D. in Economics from the University of Wisconsin.</p><p>Dr. Erath's primary area of interest is labor economics. He has served as an expert witness in numerous matters involving damages in employment discrimination and wage and hour claims. He has also prepared extensive studies of statistical liability in employment proceedings and opined on class certification issues. In addition, he has directed research for use in regulatory prudence hearings and in various antitrust issues such as damages from patent infringement and breach of contract. Dr. Erath taught graduate courses in econometrics at the University of Wisconsin.</p>",
            }}
            education={[
              {
                year: 1997,
                location: "University of Wisconsin",
                detail1: "Ph.D., Economics",
                detail2: "Major Fields: Labor Economics, Econometrics",
              },
              {
                year: 1992,
                location: "University of Wisconsin",
                detail1: "M.A., Economics",
              },
              {
                year: 1987,
                location: "Bowdoin College",
                detail1: "B.S., Mathematics",
                detail2: "A.B., Economics and Mathematics",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">“Statistics and RIFs: What You Don’t Know Can Hurt You”, New York City Bar Association, 2009</p>`,
              },
              {
                __html: `<p class="p-sm">“The Quick and Easy Way is Rarely the Right Way,” Practising Law Institute, 2005, in Litigating Employment Discrimination and Sexual Harassment Claims.</p>`,
              },
              {
                __html: `<p class="p-sm">“Friend or Foe: Recent Changes from the OFCCP and the Supreme Court,” Employment Law Strategist, June 2005</p>`,
              },
              {
                __html: `<p class="p-sm">“A Nightmare and a Good Dream: A Parable about the Value of Sound Statistical Analysis” (with Daniel Garcia), in HR Advisor, March/April 2003.</p>`,
              },
              {
                __html: `<p class="p-sm">NERA Labor Luncheon, “Disraeli Would Have Loved Employment Discrimination Cases,” Chicago, IL, November 2000, and New York, NY, December 2000.</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
