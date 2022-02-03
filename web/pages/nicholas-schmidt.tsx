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
                year: 2011,
                location: "University of Chicago, Booth School of Business",
                detail1: "M.B.A., Econometrics, Economics and Finance",
              },
              {
                year: 2001,
                location: "George Mason University",
                detail1: "B.S., Economics",
                detail2: "High Honors",
              },
            ]}
            publications={[
              {
                __html: `<p class="p-sm">Siskin, Bernard; Schmidt, Nicholas; Stephens, Bryce. <a href="/files/20211116_FICO_-_Unbiased_Algorithmic_Credit_Scoring.pdf" target="_blank">“Algorithmic Credit Scoring and FICO’s Role in Developing Accurate, Unbiased, and Fair Credit Scoring Models.”</a> Forthcoming, Consumer Law Quarterly Report (subject to revision). (2021)</p>`,
              },
              {
                __html: `<p class="p-sm">Hall Patrick, Cox Benjamin, Dickerson Steven, Ravi Kannan Arjun, Kulkarni Raghu, Schmidt Nicholas <a href="/files/20210607_-_A_United_States_Fair_Lending_Perspective_on_Machine_Learning.pdf" target="_blank">“A United States Fair Lending Perspective on Machine Learning.”</a> Frontiers in Artificial Intelligence, Volume 4 (2021)</p>`,
              },
              {
                __html: `<p class="p-sm">Gill, Navdeep; Hall, Patrick; Montgomery, Kim; Schmidt, Nicholas <a href="/files/20200229_A_Responsible_Machine_Learning_Workflow.pdf" target="_blank">"A Responsible Machine Learning Workflow with Focus on Interpretable Models, Post-hoc Explanation, and Discrimination Testing"</a> Information 11, no. 3: 137 (2020) Chosen to be the cover article in a special issue about Machine Learning in Python</p>`,
              },
              {
                __html: `<p class="p-sm">BLDS, LLC (Nicholas Schmidt); Discover Financial Services (Raghu Kulkami, et al.); H2O.ai (Patrick Hall, et al.) <a href="/files/Considerations_for_ML_in_Fair_Lending_FINAL_7-14-20 (1).pdf" target="_blank">"Machine Learning: Considerations for expanding access to credit fairly and transparently"</a> (2020)</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas and Stephens, Bryce <a href="/files/ccfl_intro_to_ai_solving_alg_disc (1).pdf" target="_blank">"An Introduction to Artificial Intelligence and Solutions to the Problem of Algorithmic Discrimination"</a> Conference on Consumer Finance Law (CCFL) Quarterly Report Volume 73, Number 2 (October 2019)</p>`,
              },
              {
                __html: `<p class="p-sm">Hall, Patrick, Gill, Navdeep, and Schmidt, Nicholas <a href="/files/2019_NeurIPS-Responsible_xAI_arxiv_version.pdf" target="_blank">"Proposed Guidelines for the Responsible Use of Explainable Machine Learning"</a> Robust AI in Financial Services Workshop at the 33rd Conference on Neural Information Processing Systems (NeurIPS), Vancouver, Canada. (December 13, 2019)</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas, Siskin, Bernard, and Mansur, Syeed. <a href="/files/2018_ACM_FAT_Tutorial-Ensuring_Fairness_in_AI.pdf" target="_blank">“How Data Scientists Help Regulators and Banks Ensure Fairness when Implementing Machine Learning and Artificial Intelligence Models.”</a> Conference on Fairness, Accountability, and Transparency. New York, NY. (February 23 - 24, 2018)</p>`,
              },
              {
                __html: `<p class="p-sm">Schmidt, Nicholas and Siskin, Bernard. <a href="https://www.amazon.com/Adverse-Impact-Analysis-Understanding-Statistics-ebook/dp/B01N6C9RLO" target="_blank">“Proper Methods for Statistical Analysis of Promotions.”</a> In Adverse Impact Analysis: Understanding Data, Statistics, and Risk, edited by Morris, Scott and Dunleavy, Eric, New York: Psychology Press (Taylor & Francis) (2016)</p>`,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default ExpertPage;
