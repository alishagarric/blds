// Core
import React from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TabbedTextBox } from "../components/Sections/TabbedTextBox";
import { Inner } from "../components/Inner";

// Begin Component
// __________________________________________________________________________________________

type ExpertsPage = {};

export const ExpertsPageClassName = "experts";

function initializeReactGA() {
  ReactGA.initialize("G-FX52XQGXD1");
  ReactGA.pageview("/experts");
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
      <Navigation homepage={false} key={ExpertsPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${ExpertsPageClassName}`}>
          <Inner>
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
                    dest: "/bernard-sisken",
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
                    dest: "/leonard-cupingood",
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
                    dest: "/david-griffin",
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
                    dest: "/samuel-kursh",
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
                    dest: "/christopher-erath",
                  },
                  summary:
                    "Dr. Erath received A.B. degrees in Economics and Mathematics from Bowdoin College and a Master's degree and Ph.D. in Economics from...",
                },
                {
                  _type: "bio",
                  name: "Nicholas Schmidt, M.B.A.",
                  image: "/img/nick-schmidt.jpg",
                  link: {
                    label: "read more",
                    dest: "/nicholas-schmidt",
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
                    dest: "/brett-margolin",
                  },
                  summary:
                    "Brett Margolin, resident in the Wilmington, Delaware office of BLDS, provides economic analyses in litigation. His active business...",
                },
                {
                  _type: "bio",
                  name: "Dr. Jin Park",
                  image: "/img/jin-park.jpg",
                  link: {
                    label: "read more",
                    dest: "/jin-park",
                  },
                  summary:
                    "Dr. Park is a Senior Consultant at BLDS, LLC. He specializes in labor economics and statistics. Dr. Park has extensive experience in...",
                },
                {
                  _type: "bio",
                  name: "Dr. Susanne Shay",
                  image: "/img/temp.jpg",
                  link: {
                    label: "read more",
                    dest: "/susanne-shay",
                  },
                  summary:
                    "Susanne Shay received her B.S. (magna cum laude), M.A. and Ph.D. degrees in Psychology from Temple University. While at Temple,...",
                },
                {
                  _type: "bio",
                  name: "Scott Measley, M.B.A",
                  image: "/img/scott-measley.jpg",
                  link: {
                    label: "read more",
                    dest: "/scott-measley",
                  },
                  summary:
                    "Mr. Measley specializes in the calculation of economic damages in personal injury, wrongful death, employment and commercial...",
                },
                {
                  _type: "bio",
                  name: "Chris Stocks",
                  image: "/img/chris-stocks.jpg",
                  link: {
                    label: "read more",
                    dest: "/chris-stocks",
                  },
                  summary:
                    "Chris is a Manager in the Algorithmic Fairness and Data Science practices at SolasAI, where he helps clients build fair, highly...",
                },
              ]}
            />
          </Inner>
        </div>
      </main>
    </>
  );
};

export default ExpertsPage;
