/* eslint-disable */

// Font.js:
// This is the sitewide font reference.

import { createGlobalStyle } from "styled-components";
import { Base } from "./Base";

export const Font = {
  Body: `'proxima-nova', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `'proxima-nova', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Header: `'baskerville-urw', serif`,
};

// Global Type Styles
export const Typography = createGlobalStyle`

  @import url("https://use.typekit.net/vvl1tlf.css");
  @import url("https://use.typekit.net/vvl1tlf.css");

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
    font-family: ${Font.Body};
    font-size: 1.3125rem;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.1rem;
    }
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1.125rem;
    line-height: 1.45;
    padding-bottom: calc(var(--Size) / 3.5);

    .first-letter {
      initial-letter: 2;
    }

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
    font-size: 1rem;
    letter-spacing: 0px;
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.45;
    font-size: 1.375rem;
    letter-spacing: 0px;

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.1;
    }
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: ${Font.Header};
    line-height: 1.1;
    padding: 0;
    margin: 0;
    padding-bottom: calc(var(--Size) / 2);
  }

  h1, .h1 {
    font-size: 5.5rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 4rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 3rem;
    }
  }
  h2, .h2 {
    font-size: 3.75rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 3rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 2.3rem;
    }
  }
  h3, .h3 {
    font-size: 2.375rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 2.2rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.5rem;
    }
  }
  h4, .h4 {
    font-size: 2.1875rem;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 2rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.4rem;
    }
  }
  h5, .h5 {
    font-size: 1.75rem;
    font-family: ${Font.Body};
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.5rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.2rem;
    }
  }
  h6, .h6 {
    font-size: 1.5rem;
    font-family: ${Font.Body};
    line-height: 1.5;
    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      font-size: 1.4rem;
    }
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.1rem;
    }
  }
`;
