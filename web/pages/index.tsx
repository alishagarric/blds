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
                  size: "short",
                },
              ]}
            />
            <TriColumnText
              columns={[
                {
                  _type: "html",
                  text: {
                    __html: `<p class="h5">We have worked with more than <b>50% of the <a href="https://www.law.com/americanlawyer/2021/04/20/the-2021-am-law-100-ranked-by-gross-revenue/" target="_blank">AmLaw top-100</a></b> firms</p>`,
                  },
                  alignment: "center",
                },
                {
                  _type: "html",
                  text: {
                    __html: `<p class="h5">Consultants to <b>over 50% of the Fortune 50</b></p>`,
                  },
                  alignment: "center",
                  size: "short",
                },
                {
                  _type: "html",
                  text: {
                    __html: `<p class="h5">Providing expert consulting to <b>numerous Federal, State, and Local Regulators</b></p>`,
                  },
                  alignment: "center",
                  size: "long",
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
