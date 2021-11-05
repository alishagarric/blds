/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */

// Core
import Link from "next/link";
import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";

import { Button } from "../Sections/Button";
import { ContactInfo } from "../Sections/ContactInfo";
import { BlueBird } from "../_svg/Birds/BlueBird";
import { OverlayBird } from "../_svg/Birds/OverlayBird";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Exit } from "../_svg/Icons/Exit";
import { Facebook } from "../_svg/Icons/Facebook";
import { Hamburger } from "../_svg/Icons/Hamburger";
import { LinkedIn } from "../_svg/Icons/LinkedIn";
import { Twitter } from "../_svg/Icons/Twitter";
import { Logo } from "../_svg/Logos/Logo";

// Styles
import { NavigationClassName, NavigationOverlayClassName, NavigationOverlayStyle, NavigationStyle } from "./styles.scss";


// Begin Component
//////////////////////////////////////////////////////////////////////

export type NavigationData = {
  homepage: boolean;
};

 export type NavigationState = {
  overlayActive: boolean;
  navHidden: boolean;
  scrollAmount: number;
 }
 
 /**
  *
  * @name Navigation
  * @author Alisha Garric
  * @requires /studio/sections/Navigation
  *
  */
 
 export class Navigation extends React.PureComponent<
   NavigationData,
   NavigationState
 > {
    constructor(props: NavigationData) {
        super(props);
    
        this.state = {
          overlayActive: false,
          navHidden: false,
          scrollAmount: 0,
        };

        if (typeof window === 'undefined') {
          //@ts-ignore
          global.window = {};
        }

      this.updateOverlayNav = this.updateOverlayNav.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
    }

    updateOverlayNav( toggle: boolean) {
      this.setState({
        overlayActive: toggle,
      });
    }

    handleScroll(event: any){

      let scrollDown = this.state.scrollAmount < window.scrollY ? true : false;

      this.setState({
        scrollAmount: window.scrollY,
      });

      if (scrollDown == true && !(this.state.scrollAmount < 50) && (window.innerWidth < Base.Media.Width.Md)) {
        this.setState({
          navHidden: true,
        });
      } else {
        this.setState({
          navHidden: false,
        });
      }

    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, { passive: true })
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  


  render() {

    return (
      <>
        <NavigationStyle className={`${NavigationClassName} ${this.state.navHidden ? "__hidden" : ""}`}>
          <div className={`${NavigationClassName}__logo`}>
            {this.props.homepage ?
              <AnchorLink href="#top">
                <Logo />
              </AnchorLink>
            :
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            }

            <div className={`${NavigationClassName}__logo__menu-toggle`} onClick={() => this.updateOverlayNav(true)}>
              <Hamburger />
            </div>
            <Brandmark />
          </div>

          <div className={`${NavigationClassName}__links`}>
            <ul className={`${NavigationClassName}__links__list`}>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p>
                  {this.props.homepage ?
                    <AnchorLink href="#product">Our Product</AnchorLink>
                  :
                    <Link href="/#product">Our Product</Link>
                  }
                </p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p>
                  {this.props.homepage ?
                    <AnchorLink href="#how">How It Works</AnchorLink>
                  :
                    <Link href="/#how">How It Works</Link>
                  }
                </p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p>
                  {this.props.homepage ?
                    <AnchorLink href="#why-now">Why Now</AnchorLink>
                  :
                    <Link href="/#why-now">Why Now</Link>
                  }
                </p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p>
                  {this.props.homepage ?
                    <AnchorLink href="#why-solasai">Why SolasAI</AnchorLink>
                  :
                    <Link href="/#why-solasai">Why SolasAI</Link>
                  }
                </p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><a href="https://pub.solas.ai/" target="_blank">Blog</a></p>
              </li>
            </ul>

            {this.props.homepage ?
              <Button link="#contact" label="Contact Us" />
            :
              <Button link="/#contact" label="Contact Us" noSmoothScroll={true}/>
            }
          </div>
        </NavigationStyle>

        <NavigationOverlayStyle className={`${NavigationOverlayClassName} ${this.state.overlayActive == true ? "__active" : ""}`}>

          {<OverlayBird />}

          <div 
            className={`${NavigationOverlayClassName}__exit`}
            onClick={() => this.updateOverlayNav(false)}
          >
            <Exit />
          </div>

          <div className={`${NavigationOverlayClassName}__links`}>
            <ul className={`${NavigationOverlayClassName}__links__list`}>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href={`${this.props.homepage ? "" : "/" }#product`}>What</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href={`${this.props.homepage ? "" : "/" }#how`}>How</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href={`${this.props.homepage ? "" : "/" }#why-now`}>Why</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href={`${this.props.homepage ? "" : "/" }#why-solasai`}>About Us</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href={`${this.props.homepage ? "" : "/" }#contact`}>Contact</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a target="_blank" href="https://pub.solas.ai/">Blog</a>
              </li>
            </ul>
          </div>

          <div className={`${NavigationOverlayClassName}__social`}>
            <a href="https://www.facebook.com/solasai.software/" target="_blank"><Facebook/></a>
            <a href="https://www.linkedin.com/company/solasai" target="_blank"><LinkedIn/></a>
            <a href="https://twitter.com/solas_ai" target="_blank"><Twitter/></a>
          </div>

          <ContactInfo />
        </NavigationOverlayStyle>
      </>
    );
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
