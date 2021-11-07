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
import { Base } from "../../constants/styles/Base";
import { Inner } from "../Inner";

import { Exit } from "../_svg/Icons/Exit";
import { Hamburger } from "../_svg/Icons/Hamburger";

// Styles
import {
  NavigationClassName,
  NavigationOverlayClassName,
  NavigationOverlayStyle,
  NavigationStyle,
} from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type NavigationData = {
  homepage: boolean;
};

export type NavigationState = {
  overlayActive: boolean;
  navHidden: boolean;
  scrollAmount: number;
};

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

    if (typeof window === "undefined") {
      //@ts-ignore
      global.window = {};
    }

    this.updateOverlayNav = this.updateOverlayNav.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  updateOverlayNav(toggle: boolean) {
    this.setState({
      overlayActive: toggle,
    });
  }

  handleScroll(event: any) {
    let scrollDown = this.state.scrollAmount < window.scrollY ? true : false;

    this.setState({
      scrollAmount: window.scrollY,
    });

    if (
      scrollDown == true &&
      !(this.state.scrollAmount < 50) &&
      window.innerWidth < Base.Media.Width.Md
    ) {
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
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    console.log(this.props.homepage);
    return (
      <>
        <NavigationStyle
          className={`${NavigationClassName} ${
            this.state.navHidden ? "__hidden" : ""
          } ${this.props.homepage ? "__layout-alt" : ""}`}
        >
          <Inner className={`${NavigationClassName}__inner`}>
            <div className={`${NavigationClassName}__logo`}>
              <Link href="/">
                <p className="h2">BLDS</p>
              </Link>

              <div
                className={`${NavigationClassName}__logo__menu-toggle`}
                onClick={() => this.updateOverlayNav(true)}
              >
                <Hamburger />
              </div>
            </div>

            <div className={`${NavigationClassName}__links`}>
              <ul className={`${NavigationClassName}__links__list`}>
                <li className={`${NavigationClassName}__links__list__item`}>
                  <Link href="/about">
                    <a className={`txt-caption`}>About BLDS</a>
                  </Link>
                </li>
                <li className={`${NavigationClassName}__links__list__item`}>
                  <Link href="/experts">
                    <a className={`txt-caption`}>Our Experts</a>
                  </Link>
                </li>
                <li className={`${NavigationClassName}__links__list__item`}>
                  <Link href="/contact">
                    <a className={`txt-caption`}>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <p className={`${NavigationClassName}__tagline h4`}>
              Expert Analysis, <span>Testimony &amp; Consulting</span>
            </p>
          </Inner>
        </NavigationStyle>

        <NavigationOverlayStyle
          className={`${NavigationOverlayClassName} ${
            this.state.overlayActive == true ? "__active" : ""
          }`}
        >
          <div
            className={`${NavigationOverlayClassName}__exit`}
            onClick={() => this.updateOverlayNav(false)}
          >
            <Exit />
          </div>

          <div className={`${NavigationOverlayClassName}__links`}>
            <ul className={`${NavigationOverlayClassName}__links__list`}>
              <li
                className={`${NavigationOverlayClassName}__links__list__item`}
              >
                <Link href="/about">
                  <a
                    className={`txt-caption`}
                    onClick={() => this.updateOverlayNav(false)}
                  >
                    About BLDS
                  </a>
                </Link>
              </li>
              <li
                className={`${NavigationOverlayClassName}__links__list__item`}
              >
                <Link href="/experts">
                  <a
                    className={`txt-caption`}
                    onClick={() => this.updateOverlayNav(false)}
                  >
                    Our Experts
                  </a>
                </Link>
              </li>
              <li
                className={`${NavigationOverlayClassName}__links__list__item`}
              >
                <Link href="/contact">
                  <a
                    className={`txt-caption`}
                    onClick={() => this.updateOverlayNav(false)}
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </NavigationOverlayStyle>
      </>
    );
  }
}

// End Component
//////////////////////////////////////////////////////////////////////
