// Core
import React from "react";

// Types
import { NextPage } from "next";
import { SimpleHero } from "../components/Sections/SimpleHero/SimpleHero";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";

// Begin Component
// __________________________________________________________________________________________

type SuccessPage = {};

export const EmailDownloadPageClassName = "email-download";

/**
 *
 * @name Success
 * @author Alisha Garric
 *
 */
const SuccessPage: NextPage<SuccessPage> = () => {
  return (
    <>
    <Navigation homepage={false} key={EmailDownloadPageClassName}/>
    <main className={`${LayoutClassName}`}>
      <div className={`${EmailDownloadPageClassName}`}>
        <SimpleHero 
          headline={`Thanks for your request. We've emailed you the download link.`} 
          logo={false}
          cta= {{
            label: "Go back home",
            link: "/",
            noSmoothScroll: true
          }}
        />
      </div>
    </main>
    </>
  );
};

export default SuccessPage;
