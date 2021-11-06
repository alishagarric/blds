// Core
import React, { useEffect } from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TriColumnText } from "../components/Sections/TriColumnText";
import { Inner } from "../components/Inner";

// Begin Component
// __________________________________________________________________________________________

type ContactPage = {};

export const ContactPageClassName = "contact";

function initializeReactGA() {
  ReactGA.initialize("G-FX52XQGXD1");
  ReactGA.pageview("/homepage");
}

/**
 *
 * @name ContactPage
 * @author Alisha Garric
 *
 */
const ContactPage: NextPage<ContactPage> = () => {
  return (
    <>
      <Navigation homepage={true} key={ContactPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${ContactPageClassName}`}>
          <Inner>
            <div style={{ background: "white", padding: "40px" }}>
              <h3>Contact Us</h3>
              <h6>Thank you for visiting BLDS.</h6>
              <h4>
                Please contact us if you have any questions or if you would like
                more information.
              </h4>
              <h4>Offices</h4>
              <p>
                Philadelphia Office: 1608 Walnut St. Suite 1108 Philadelphia, PA
                19103 Phone: (215) 717-2320 Fax: (215) 717-2324
              </p>
              <p>
                Boston Office: 264 North Main St. Suite 7 Natick, MA 01760
                Phone: (508) 315-3454
              </p>
              <p>
                Wilmington Office: 1201 North Orange St. Suite 602 Wilmington,
                DE 19801 Phone: (302) 655-2510 Fax: (302) 655-2512
              </p>
            </div>
          </Inner>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
