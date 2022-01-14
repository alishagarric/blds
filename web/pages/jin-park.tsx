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
            name="Dr. Jin Heum Park"
            image="/img/jin-park.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Dr. Park is a Senior Consultant at BLDS, LLC. He specializes in labor economics and statistics.</p><p>Dr. Park has extensive experience in performing statistical analysis of discrimination and wage-and-hour issues for single-plaintiff and class-action cases. He has also conducted numerous workforce audit studies as well as studies on geographic wage differential, disparate impact of hiring and promotion tests and performance evaluation, issues relevant in wage arbitrations, and availability and utilization of minorities and women.</p><p>Dr. Park’s expertise also includes maintaining and analyzing large databases--required for the assessment of damages or execution of comparability studies--such as the 2000 U.S. Census of Population and Housing, American Community Survey, Current Population Survey and its various supplements such as Displaced Worker Supplements, and employment and procurement contract data of client companies and government agencies.</p><p>In addition, Dr. Park is conversant with many low- and high-level computer programming languages and has written user-friendly software and sophisticated simulation programs.</p><p>Prior to joining BLDS, Dr. Park was a lecturer at Princeton University before he joined NERA Economic Consulting in 1995. He occasionally teaches statistics to MBA students at Northeastern University in Boston, Massachusetts.</p>",
            }}
            education={[
              {
                year: 1995,
                location: "Princeton University",
                detail1: "Ph.D., Economics",
              },
              {
                year: 1990,
                location: "University of Toronto",
                detail1: "B.Sc., High Distinction, Economics",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">“English Speaking Ability and the Earnings of Immigrants in the United States,” <i>American Journal of Economics and Sociology</i>, 1999.</p>`,
              },
              {
                __html: `<p class="p-sm">“Estimation of Sheepskin Effects Using the Old and the New CPS Measures of Educational Attainment,” <i>Economics Letters</i>, 1999.</p>`,
              },
              {
                __html: `<p class="p-sm">“Measuring Education over Time: A Comparison of Old and New Measures of Education from the CPS,” <i>Economics Letters</i>, 1996.</p>`,
              },
              {
                __html: `<p class="p-sm">“Changes in U.S. School Quality: What Do We Learn from Immigrants?” mimeograph, November 1995.</p>`,
              },
              {
                __html: `<p class="p-sm">“Estimation of Returns to Schooling Using the New CPS Measures of Educational Attainment,” mimeograph, October 1995.</p>`,
              },
              {
                __html: `<p class="p-sm">“How Much Is a Year of Attended but Not Completed Schooling Worth?” mimeograph, December 1994.</p>`,
              },
              {
                __html: `<p class="p-sm">“Returns to Schooling: A Peculiar Deviation from Linearity,” Industrial Relations Section Working Paper #335, Princeton University, October 1994.</p>`,
              },
              {
                __html: `<p class="p-sm">“Estimation of Sheepskin Effects and Returns to Schooling Using the Old and the New CPS Measures of Educational Attainment,” mimeograph, Industrial Relations Section Working Paper #338, Princeton University, August 1994.</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
