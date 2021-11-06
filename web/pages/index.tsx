// Core
import React from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TriColumnText } from "../components/Sections/TriColumnText";
import { TabbedTextBox } from "../components/Sections/TabbedTextBox";

// Begin Component
// __________________________________________________________________________________________

type HomePage = {};

export const HomePageClassName = "homepage";

function initializeReactGA() {
  ReactGA.initialize("G-FX52XQGXD1");
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
          <TabbedTextBox
            headline="Industry-leading consultants and data scientists"
            headlineAlignment="left"
            layout="most-space"
            textBlocks={[
              {
                _type: "text",
                text: {
                  __html: `<p class="h6">Virtually every major lending institution in the U.S. uses our framework for fair lending</p>`,
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
                  __html: `<p class="p-lg">Consultants to <b>over 50% of the fortune 50</b></p>`,
                },
                alignment: "center",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
