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
            name="Nicholas Schmidt, M.B.A"
            image="/img/nick-schmidt.jpg"
            bio={{
              __html:
                "<p class='p-sm'>Nick specializes in the application of statistics and economics to questions of law, regulatory compliance, and best practices in model governance. He has created AI-based techniques that enable clients to minimize disparate impact in credit, insurance, and marketing models.  Nick writes and speaks frequently on the benefits and risks of artificial intelligence, Explainable AI and how to make fairer machine learning algorithms.</p><p>Nick is currently a Partner and the Artificial Intelligence Practice Leader at BLDS, LLC, a Philadelphia-based consulting firm that provides expert guidance to companies and regulators in the application of economics and statistics to questions of law and regulation.  In his consulting work, Nick focuses on algorithmic fairness, explainable AI and ensuring robust model governance practices. As head of the AI practice, Nick develops and assists in the deployment of methods that allow his clients to make their AI models fairer and more inclusive.</p><p>His consulting work led to the development of SolasAI, a compliance-focused and AI-based software platform that identifies and mitigates bias and discrimination in algorithmic decisioning. As its CEO, Nick has led SolasAI to create a groundbreaking product that allows customers to review, analyze, and make decisions related to disparity reduction in an efficient and transparent way. This cutting-edge product illuminates and reduces causes of disparate impact, disparate treatment, and other forms of bias in algorithmic models, protecting customers against regulatory, legal, and reputational problems, while accelerating modelers’ ability to innovate.</p><p>Nick’s work is used by many of the country’s most prominent consumer lenders, FinTech companies, life and health insurers, as well as other enterprises to achieve fairer outcomes for their customers.</p><p>Nick holds an MBA from the University of Chicago Booth School of Business (2011), with concentrations in econometrics, statistics and finance and a B.S. in Economics from George Mason University, High Honors (2001).</p>",
            }}
            education={[
              {
                year: 1970,
                location: "University of Pennsylvania",
                detail1: "Ph.D., Statistics",
                detail2: "Minor, Econometrics",
              },
              {
                year: 1966,
                location: "University of North Carolina",
                detail1: "Graduate Study Major, Economics",
                detail2: "Minor, Statistics",
              },
              {
                year: 1965,
                location: "University of Pittsburgh",
                detail1: "B.S., Mathematics",
                detail2: "Minor, Economics",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">Hall Patrick, Cox Benjamin, Dickerson Steven, Ravi Kannan Arjun, Kulkarni Raghu, Schmidt Nicholas.  June 2021. “A United States Fair Lending Perspective on Machine Learning.”  Frontiers in Artificial Intelligence Volume 4. </p>`,
              },
              {
                __html: `<p class="p-sm">Gill, Navdeep; Hall, Patrick; Montgomery, Kim; Schmidt, Nicholas. 2020. "A Responsible Machine Learning Workflow with Focus on Interpretable Models, Post-hoc Explanation, and Discrimination Testing." Information 11, no. 3: 137.  Chosen to be the cover article in a special issue about Machine Learning in Python.</p>`,
              },
              {
                __html: `<p class="p-sm">AI Risk and Security Working Group (co-author).  2020. “Artificial Intelligence Risk & Governance.”  AIRS White Paper.</p>`,
              },
              {
                __html: `<p class="p-sm">HBLDS, LLC (Nicholas Schmidt); Discover Financial Services (Raghu Kulkarni, et al.); H2O.ai (Patrick Hall, et al.). 2020. “Machine Learning: Considerations for expanding access to credit fairly and transparently.”</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas and Stephens, Bryce.  “An Introduction to Artificial Intelligence and Solutions to the Problem of Algorithmic Discrimination.” Conference on Consumer Finance Law (CCFL) Quarterly Report.  Volume 73, Number 2 (October 2019).</p>`,
              },
              {
                __html: `<p class="p-sm">Hall, Patrick, Gill, Navdeep, and Schmidt, Nicholas.  “Proposed Guidelines for the Responsible Use of Explainable Machine Learning.”  December 13, 2019. Robust AI in Financial Services Workshop at the 33rd Conference on Neural Information Processing Systems (NeurIPS), Vancouver, Canada.</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas, Siskin, Bernard, and Mansur, Syeed.  “How Data Scientists Help Regulators and Banks Ensure Fairness when Implementing Machine Learning and Artificial Intelligence Models.” Conference on Fairness, Accountability, and Transparency.  New York, NY. February 23 - 24, 2018.</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas and Siskin, Bernard.  “Proper Methods for Statistical Analysis of Promotions.”  In Adverse Impact Analysis: Understanding Data, Statistics, and Risk, edited by Morris, Scott and Dunleavy, Eric, New York: Psychology Press (Taylor & Francis), 2016.</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
