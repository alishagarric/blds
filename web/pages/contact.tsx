// Core
import React, { useEffect } from "react";

// Types
import { NextPage } from "next";
import ReactGA from "react-ga";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";
import { TriColumnText } from "../components/Sections/TriColumnText";
import { Inner } from "../components/Inner";
import { ContactForm } from "../components/Sections/ContactForm";

// Begin Component
// __________________________________________________________________________________________

type ContactPage = {};

export const ContactPageClassName = "contact";

function initializeReactGA() {
  ReactGA.initialize("G-FX52XQGXD1");
  ReactGA.pageview("/contact");
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
      <Navigation homepage={false} key={ContactPageClassName} />
      <main className={`${LayoutClassName}`}>
        <div className={`${ContactPageClassName}`}>
          <Inner>
            <ContactForm
              headline="Contact Us"
              subheadline="Thank you for visiting BLDS"
              body={{
                __html:
                  "<p class='h4'><i>Please contact us if you have any questions or if you would like more information.</i></p>",
              }}
              offices={[
                {
                  __html:
                    "<p class='p-sm'><b>Philadelphia Office:</b></br> 1608 Walnut St. Suite 1108 Philadelphia, PA 19103 </br><b>Phone:</b> (215) 717-2320 </br><b>Fax:</b> (215) 717-2324</p>",
                },
                {
                  __html:
                    "<p class='p-sm'><b>Boston Office:</b></br> 264 North Main St. Suite 7 Natick, MA 01760 </br><b>Phone:</b> (508) 315-3454</p>",
                },
                {
                  __html:
                    "<p class='p-sm'><b>Wilmington Office:</b></br> 1201 North Orange St. Suite 602 Wilmington, DE 19801 </br><b>Phone:</b> (302) 655-2510 </br><b>Fax:</b> (302) 655-2512</p>",
                },
              ]}
            />
          </Inner>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
