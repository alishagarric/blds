// Core
import React, { useEffect } from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TabbedTextBox } from "../components/Sections/TabbedTextBox";

// Begin Component
// __________________________________________________________________________________________

type ExpertsPage = {};

export const ExpertsPageClassName = "experts";

function initializeReactGA() {
  ReactGA.initialize("G-FX52XQGXD1");
  ReactGA.pageview("/homepage");
}

/**
 *
 * @name ExpertsPage
 * @author Alisha Garric
 *
 */
const ExpertsPage: NextPage<ExpertsPage> = () => {
  return (
    <>
      <Navigation homepage={true} key={ExpertsPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${ExpertsPageClassName}`}>
          <TabbedTextBox
            headline="Our Experts"
            headlineAlignment="center"
            layout="more-space"
            textBlocks={[
              {
                _type: "bio",
                name: "Dr. Bernard Sisken",
                image: "/img/bernard-sisken.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Bernard Siskin received a B.S. in Mathematics from the University of Pittsburgh and ta Ph.D. in Statistics from the University of Pennsylvania...",
              },
              {
                _type: "bio",
                name: "Dr. Leonard Cupingood",
                image: "/img/leonard-cuppingood.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Leonard Cupingood received his B.A. degree in Mathematics from Rutgers University and his M.A. and Ph.D. degrees in Statistics from...",
              },
              {
                _type: "bio",
                name: "Dr. David Griffin",
                image: "/img/david-griffin.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "David W. Griffin received his Ph.D. in Economics from Cornell University and B.S. and M.S. degrees in Economics from Rutgers University...",
              },
              {
                _type: "bio",
                name: "Dr. Samuel Kursh",
                image: "/img/sam-kursh.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Dr. Samuel J. Kursh specializes in the calculation of economic damages in commercial and employment litigation matters. His practice includes...",
              },
              {
                _type: "bio",
                name: "Dr. Christopher Erath",
                image: "/img/chris-erath.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Dr. Erath received A.B. degrees in Economics and Mathematics from Bowdoin College and a Master's degree and Ph.D. in Economics from...",
              },
              {
                _type: "bio",
                name: "Dr. Bryce Stephens",
                image: "/img/bryce-stephens.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Bryce Stephens provides economic research, econometric analysis, and compliance advisory services, with a specific focus on issues related...",
              },
              {
                _type: "bio",
                name: "Nicholas Schmidt, M.B.A.",
                image: "/img/nick-schmidt.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Nicholas Schmidt is a partner at BLDS, LLC, and heads the Artificial Intelligence and Machine Learning Innovation Practice...",
              },
              {
                _type: "bio",
                name: "Dr. Brett Margolin",
                image: "/img/brett-margolin.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Brett Margolin, resident in the Wilmington, Delaware office of BLDS, provides economic analyses in litigation. His active business...",
              },
              {
                _type: "bio",
                name: "Scott Measley, M.B.A",
                image: "/img/scott-measley.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Mr. Measley specializes in the calculation of economic damages in personal injury, wrongful death, employment and commercial...",
              },
              {
                _type: "bio",
                name: "Dr. Joe Trippi",
                image: "/img/joe-trippl.jpg",
                link: {
                  label: "read more",
                  dest: "/expert",
                },
                summary:
                  "Joe Trippi has more than 25 years of experience as a litigation consultant and over 20 years of college teaching, research and administration...",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertsPage;
