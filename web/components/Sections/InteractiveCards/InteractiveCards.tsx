// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Birds/Bird";
import { CircleDecor } from "../../_svg/CircleDecor/CircleDecor";
import { Anchor } from "../Anchor";
import { Button, LMNTS_Section_Button } from "../Button";

// Styles
import {
  InteractiveCardsClassName,
  InteractiveCardsStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_InteractiveCards = {
  headline?: { 
    __html: string;
  };
  cta?: LMNTS_Section_Button;
  card_sets: {
    label: string;
    cards: {
      front_text: string;
      back_text: string;
    }[];
  }[];
};

export type InteractiveCardsState = {
  activeSet: number;
  flippedCard: number;
 }

/**
 *
 * @name InteractiveCards
 * @author Alisha Garric
 * @requires /studio/sections/InteractiveCards
 *
 */
 export class InteractiveCards extends React.PureComponent<
 LMNTS_Section_InteractiveCards,
 InteractiveCardsState
> {
 constructor(props: LMNTS_Section_InteractiveCards) {
    super(props);

    this.state = {
      activeSet: 0,
      flippedCard: -1,
    };

    this.updateActiveSet = this.updateActiveSet.bind(this);
    this.updateFlippedCard = this.updateFlippedCard.bind(this);
 }


  updateActiveSet( index: number ) {
    this.setState({
      activeSet: index,
    });
  }

  updateFlippedCard( index: number) {
    if (this.state.flippedCard == index ){
      this.setState({
        flippedCard: -1,
      });
    } else {
      this.setState({
        flippedCard: index,
      });
    }
  }


  render() {

    let { cta, card_sets, headline, children} = this.props;
    return (
      <InteractiveCardsStyle className={`${InteractiveCardsClassName}`}>
        <Anchor id="how" />
        <Inner>
          <div className={`${InteractiveCardsClassName}__content`}>
            <Bird />
            <CircleDecor />
            {headline && <div className={`${InteractiveCardsClassName}__headline`} dangerouslySetInnerHTML={headline}/>}

            <div className={`${InteractiveCardsClassName}__header`}>
              {card_sets && card_sets.length > 0 &&
                <nav className={`${InteractiveCardsClassName}__header__card-sets-nav`}>
                  {card_sets.map((set, idx) => {
                    return (
                      <div 
                        key={idx} 
                        className={`${InteractiveCardsClassName}__header__card-sets-nav__item ${this.state.activeSet == idx ? "__active" : ""}`}
                        onClick={() => this.updateActiveSet(idx)}
                      >
                        <Button label={set.label} link="#how"/>
                      </div>
                    );
                  })}
                </nav>
              }
              {cta &&
                <Button link={cta.link} label={cta.label} target={cta.target} download={cta.download}/>
              }
            </div>

            {card_sets && card_sets.length > 0 &&
              <div className={`${InteractiveCardsClassName}__card-sets`}>
                {card_sets.map((set, idx) => {
                  return (
                    <div key={idx} className={`${InteractiveCardsClassName}__card-sets__cards ${this.state.activeSet == idx ? "__active" : ""}`}>
                      {set.cards && set.cards.length > 0 && set.cards.map((card, idxx) => {
                        let specialKey = parseInt(`${idxx + 1}${idx + 1}`);

                        return (
                          <div key={specialKey} className={`${InteractiveCardsClassName}__card`}>
                            <div 
                              className={`${InteractiveCardsClassName}__card__inner ${this.state.flippedCard == specialKey ? "__active" : ""}`}
                              onClick={() => this.updateFlippedCard(specialKey)}
                            >
                              <div className={`${InteractiveCardsClassName}__card__inner__label`}>Step</div>
                              <div className={`${InteractiveCardsClassName}__card__inner__index headline`}>{idxx}</div>
                              <p className={`${InteractiveCardsClassName}__card__inner__front`}>{card.front_text}</p>
                              <p className={`${InteractiveCardsClassName}__card__inner__back`}>{card.back_text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            }
            {children}
            {cta &&
              <Button link={cta.link} label={cta.label} target={cta.target} download={cta.download}/>
            }
          </div>
        </Inner>
      </InteractiveCardsStyle>
    );
  }
};

// End Component
// __________________________________________________________________________________________
