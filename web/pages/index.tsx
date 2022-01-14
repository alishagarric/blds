// Core
import React from "react";

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

type HomePage = {};

export const HomePageClassName = "homepage";

function initializeReactGA() {
  ReactGA.initialize("G-F3FQVRWRVS");
  ReactGA.pageview("/homepage");
}

/**
 *
 * @name HomePage
 * @author Alisha Garric
 *
 */
const HomePage: NextPage<HomePage> = () => {
  return (
    <>
      <Navigation homepage={true} key={HomePageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${HomePageClassName}`}>
          <Inner>
            <TabbedTextBox
              headline="Industry-leading consultants, statisticians and economists"
              headlineAlignment="left"
              layout="most-space"
              textBlocks={[
                {
                  _type: "text",
                  text: {
                    __html: `<p class="h6">We have worked with more than 50% of the <a href="https://www.law.com/americanlawyer/2021/04/20/the-2021-am-law-100-ranked-by-gross-revenue/?slreturn=20211122175031" target="_blank" rel="noopener noreferrer nofollow">AmLaw top-100 firms</a></p>`,
                  },
                },
                {
                  _type: "text",
                  text: {
                    __html: `<p class="h6">Providing expert consulting to numerous Federal, State, and Local Regulators</p>`,
                  },
                },
              ]}
            />
            <TriColumnText
              columns={[
                {
                  _type: "stat",
                  number: "45",
                  unit: "years",
                  text: "In Employment Discrimination Analytics",
                  alignment: "center",
                },
                {
                  _type: "stat",
                  number: "25",
                  unit: "years",
                  text: "In Fair Lending Analytics",
                  alignment: "center",
                },
                {
                  _type: "html",
                  text: {
                    __html: `<p class="h5">Consultants to <b>over 50% of the fortune 50</b></p>`,
                  },
                  alignment: "center",
                },
              ]}
            />
          </Inner>
        </div>
      </main>
    </>
  );
};

export default HomePage;
