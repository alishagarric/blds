import { Theme } from "../../../constants/Theme";

export const HamburgerClassName = "svg-hamburger";

export const Hamburger = () => (
  <svg className={HamburgerClassName} height="384pt" viewBox="0 -53 384 384" width="384pt">
    <path fill={Theme.Color.Text} d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    <path fill={Theme.Color.Text} d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    <path fill={Theme.Color.Text} d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
  </svg>
);
