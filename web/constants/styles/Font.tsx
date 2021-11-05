/* eslint-disable */

// Font.js:
// This is the sitewide font reference.

import { createGlobalStyle } from "styled-components";
import { Base } from "./Base";

export const Font = {
  Body: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Header: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

// Global Type Styles
export const Typography = createGlobalStyle`

  /* Base Text Styles */
  body {
    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  /*
  @font-face {
    font-family: "dharma";
    src: url("/fonts/dharma/dharma_regular.eot");
    src: url("/fonts/dharma/dharma_regular.eot?#iefix") format("embedded-opentype"), 
    url("/fonts/dharma/dharma_regular.woff2") format("woff2"), 
    url("/fonts/dharma/dharma_regular.woff") format("woff"), 
    url("/fonts/dharma/dharma_regular.ttf") format("truetype"),
    url("/fonts/dharma/dharma_regular.svg#DharmaGothicCW01-Regular") format("svg");
  }
  */

  .txt-caption {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 0.9rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 0.8rem;
    }
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: -0.2px;
    padding-bottom: calc(var(--Size) / 3.5);

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 0.9rem;
    }
  }

  .p-sm {
    font-family: ${Font.Body};
    line-height: 1.45;
    font-size: 0.9rem;
    letter-spacing: 0px;
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.45;
    font-size: 1.375rem;
    letter-spacing: 0px;

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.15rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.05;
    }
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .headline {
    font-family: ${Font.Header};
    line-height: 1.1;
    padding: 0;
    margin: 0;
    letter-spacing: -0.2px;
  }

  h1, .h1 {
    font-size: 3.8rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 3.04rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 2.25rem;
    }
  }
  h2, .h2 {
    font-size: 2.75rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.8rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.35rem;
    }
  }
  h3, .h3 {
    font-size: 2.25rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.8rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.35rem;
    }
  }
  h4, .h4 {
    font-size: 1.75rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.4rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.05rem;
    }
  }
  h5, .h5 {
    font-size: 1.5rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1rem;
    }
  }
  h6, .h6 {
    font-size: 1.25rem;

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1rem;
    }
  }

  .headline {
    font-size: 5.625rem;

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 3rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size)); }
`;
