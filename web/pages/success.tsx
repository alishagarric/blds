// Core
import React, { useEffect } from "react";

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

type SuccessPage = {};

export const SuccessPageClassName = "success";

function initializeReactGA() {
  ReactGA.initialize("G-F3FQVRWRVS");
  ReactGA.pageview("/success");
}

/**
 *
 * @name SuccessPage
 * @author Alisha Garric
 *
 */
const SuccessPage: NextPage<SuccessPage> = () => {
  return (
    <>
      <Navigation homepage={false} key={SuccessPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${SuccessPageClassName}`}>
          <Inner>
            <TabbedTextBox
              headline="Thank you for reaching out"
              headlineAlignment="center"
              textBlocks={[
                {
                  _type: "text",
                  text: {
                    __html: `<p class="p-lg" style="text-align: center">We will be in touch soon.</p>`,
                  },
                },
              ]}
            />
          </Inner>
        </div>
      </main>
    </>
  );
};

export default SuccessPage;
