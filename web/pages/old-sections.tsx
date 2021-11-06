// Core
import React, { useEffect } from "react";

// Types
import { NextPage } from "next";
import { SimpleHero } from "../components/Sections/SimpleHero/SimpleHero";
import { ArrowModel } from "../components/Sections/ArrowModel";
import { BulletedSection } from "../components/Sections/BulletedSection";
import { CtaRow } from "../components/Sections/CtaRow";
import { ColumnIconBlocks } from "../components/Sections/BiColumnIcons";
import { Illuminate } from "../components/_svg/Icons/Illuminate";
import { OffsetImageSection } from "../components/Sections/OffsetImageSection";
import { Button } from "../components/Sections/Button";
import { PuzzleSection } from "../components/Sections/PuzzleSection";
import { BlurredItemsSection } from "../components/Sections/BlurredItemsSection";
import { BracketSection } from "../components/Sections/BracketSection";
import { MagnifyingGlass } from "../components/_svg/Icons/MagnifyingGlass";
import { WarningSection } from "../components/Sections/WarningSection";
import { InteractiveCards } from "../components/Sections/InteractiveCards";
import { SplitSection } from "../components/Sections/SplitSection";
import { TestimonialsSlider } from "../components/Sections/TestimonialsSlider";
import { NumberEye } from "../components/_svg/Icons/NumberEye";
import { Bullseye } from "../components/_svg/Icons/Bullseye";
import { GamePlay } from "../components/_svg/Icons/GamePlay";
import { RisingGraph } from "../components/_svg/Icons/RisingGraph";
import { Contract } from "../components/_svg/Icons/Contract";
import { ViewGraph } from "../components/_svg/Icons/ViewGraph";
import ReactGA from 'react-ga';
import { DownloadItem } from "../components/Sections/DownloadItem";
import { VideoRow } from "../components/Sections/VideoRow";
import { Navigation } from "../components/Navigation/Navigation";
import { LayoutClassName } from "../components/Layout";

// Begin Component
// __________________________________________________________________________________________

type HomePage = {};

export const HomePageClassName = "homepage";

function initializeReactGA() {
    ReactGA.initialize('G-FX52XQGXD1');
    ReactGA.pageview('/homepage');
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
      <Navigation homepage={true} key={HomePageClassName}/>
      <main className={`${LayoutClassName}`}>
        <div className={`${HomePageClassName}`}>
          <SimpleHero 
            headline="Reduce your regulatory, legal, and reputational risk with" 
            guide_text="Learn More" 
            guide_link="#product"
            logo={true}
          />

          <OffsetImageSection 
            image="/img/graph.png"
            alt={"Understand and Resolve Disparity while Preserving the Predictive Value of Your Model"}
            headline={"Understand and Resolve Disparity while Preserving the Predictive Value of Your Model"}
          >
            <ColumnIconBlocks 
              icons={[
                { icon: <NumberEye />, label: "Detects and quantifies algorithmic disparities" },
                { icon: <Illuminate />, label: "Illuminate drivers of disparities" },
                { icon: <Bullseye />, label: "Clarify drivers of predictive value" },
                { icon: <GamePlay />, label: "Auto-generate viable alternatives with less disparity" },
              ]}
            />
            {/*<Button label="Download Whitepaper" download="/files/SolasAI - Disparate Impact Mitigation and Proxy Detection Software.pdf"/>*/}
          </OffsetImageSection>

          <InteractiveCards 
            headline={{__html: `<h2 class="h3">How The <strong><span class="txt-red">Solas</span>AI</strong> Platform Works</h2>`}}
            cta= {{
              label: "Download More Information",
              download: "/files/SolasAI - Disparate Impact Mitigation and Proxy Detection Software.pdf",
            }}
            card_sets={[
              {
                label: "Modeler",
                cards: [
                  { front_text: "You are the best at building models for your company - We don’t ask you to change", back_text: "We use your models" },
                  { front_text: "We take testing for disparity and alternatives off your plate", back_text: "We expose and quantify disparities" },
                  { front_text: "We provide you additional insight to make your model better", back_text: "We explain what drives value and disparities" },
                  { front_text: "We preserve and expand the great work you have done", back_text: "We create alternatives without sacrificing predictive value" },
                  { front_text: "We generate the documentation and insights you need to choose the best viable alternative for your business", back_text: "We generate the information you need to make justifiable choices" }
                ]
              },
              {
                label: "Compliance / Legal",
                cards: [
                  { front_text: "You don't have to get your modelers to change", back_text: "We use your models" },
                  { front_text: "We test using accepted standards that will give you the greatest protection possible", back_text: "We expose and quantify disparities" },
                  { front_text: "We openly clarify what is happening in the models so you understand it", back_text: "We explain what drives value and disparities" },
                  { front_text: "We generate justifiable alternatives that have a minor impact on predictive value", back_text: "We create alternatives without sacrificing predictive value" },
                  { front_text: "We provide you the information you need to choose the best alternative for your business and justify it to regulators", back_text: "We generate the information you need to make justifiable choices" }
                ]
              },
              {
                label: "Chief data officer",
                cards: [
                  { front_text: "We aren't trying to replace your modelers - we just want to make them more efficient", back_text: "We use your models" },
                  { front_text: "We continually update our testing module based on the latest guidance, research and accepted standards", back_text: "We expose and quantify disparities" },
                  { front_text: "We illuminate what is driving value and disparity in the models", back_text: "We explain what drives value and disparities" },
                  { front_text: "We generate viable alternatives that ensure overall model quality", back_text: "We create alternatives without sacrificing predictive value" },
                  { front_text: "We provide your subject matter experts the best alternatives and supporting information to grow and protect your business", back_text: "We generate the information you need to make justifiable choices" }
                ]
              }
            ]}
          >
            <VideoRow 
              poster="/img/poster.png"
              video="https://youtu.be/-kdTXEv0LPY"
              alt="Model Creation Process Preview"
            />
          </InteractiveCards>

          <BulletedSection 
            headline="Why does your business need a robust model fairness pipeline?"
            body={{__html: `<p class="p-lg">Multiple forces are converging.</p><p class="p-lg">Enterprises must gain deep insight into their predictive models.</p>`}}
            bullets={[
              "Test for disparities",
              "Identify opportunities to reduce disparities",
              "Provide clarity on trade-off decisions between business value and reducing disparities",
            ]}
          >
            <ArrowModel 
              items={[
                "Increased model usage",
                "Increased model risks",
                "Increased societal awareness",
                "Increased focus from regulators",
                "Regulators and courts looking to establish precedent"
              ]}
            />
          </BulletedSection>

          <DownloadItem 
            headline={{__html: `<h2 class="h4">Let the <strong>SolasAI “<span class="txt-red">Fairness Compliance Checklist</span>”</strong> accelerate your journey to fair and constructive use of learning and artificial intelligence</h2>`}}
            item_for_download="/files/SolasAI_FairLendingChecklist.pdf"
            email_formspree_link="https://formspree.io/f/xrgrqgzr"
          />

          <CtaRow 
            headline="Interested in learning more? Reduce your risk with fairer AI"
            cta={{
              label: "Contact us today",
              link: "#contact"
            }}
          />

          <PuzzleSection 
            headline={{__html: `<h2 class="h3">Why <strong><span class="txt-red">Solas</span>AI</strong> Is Different</h2>`}}
            sub_headline="SolasAI goes beyond Data Science"
            body={{__html: "<p>We approach the problem from multiple sides, which makes us a one-stop shop for fairer model reconstruction.</p>"}}
            puzzle_pieces={[
              "Business Needs",
              "Data Science & Technology",
              "Regulatory Requirements",
              "Legal Application"
            ]}
          />

          <BlurredItemsSection 
            body={{__html: "<p>Competitors focus on one area of expertise, which leaves other important areas overlooked</p>"}}
            focus_text="Data Science & Technology"
            blurred_text="Business Needs"
          />

          <BracketSection 
            headline="SolasAI leverages your existing models and production pipeline"
            icons={[
              { icon: <RisingGraph />, label: "Configurable Business Rules and Objectives" },
              { icon: <MagnifyingGlass/>, label: "Optimized, Fast, & Fair Search" },
              { icon: <Contract />, label: "Regulatory Expertise" },
              { icon: <ViewGraph />, label: "Explainable AI" },
            ]}
          />

          <WarningSection text={{__html: "<p className='h5'><strong>We are not trying to be AutoML.</strong> We don’t set out with the intention of reinventing or replacing your modeling process.</p>"}} />
          <SplitSection 
            headline={{__html: `<h3><strong><span class="txt-red">Solas</span>AI</strong> was created by industry-leading consultants and data scientists</h3>`}}
            text_blocks={[
              {label: "45 Years", text: "in Employment Discrimination Analytics" },
              {label: "25 Years", text: "in Fair Lending Analytics" },
              {label: "Expert Consultants", text: "to numerous Federal, State, and Local Regulators" },
              {label: "Trusted Fair Lending", text: "framework used by virtually every major lending institution in the U.S" },
              {label: "Fortune 50", text: "we advise over 50% of these companies" },
            ]}
            image="/img/helixs.png"
            alt="We don’t set out with the intention of reinventing or replacing your modeling process."
          />

          <TestimonialsSlider 
            headline="Who We’ve Helped"
            testimonials= {[
              {testimonial: "Reduced the time required to perform fair lending assessments and DI mitigation search by over 60%.", author: "Top-10 US Consumer Lender"},
              {testimonial: "Reduced a credit model’s gender and race disparities by half with only a marginal loss in performance.", author: "FinTech Client"},
              {testimonial: "Doubled the predictive value for protected classes in a healthcare model.", author: "Fortune 50 Healthcare Customer"},
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
