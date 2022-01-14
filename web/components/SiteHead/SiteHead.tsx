/**
 *
 * Head.js
 * @author Alisha Garric
 * @description The website <head>.
 *
 */

// Core
import Head from "next/head";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface SiteHead {
  title: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SiteHead = ({ title = "This is the default title" }: SiteHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Basic page needs */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Fonts and styles */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"
      />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/files/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/files/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/files/favicon-16x16.png"
      />
      <link rel="manifest" href="/files/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* Opengraph */}
      <meta property="og:title" content="BLDS" />
      <meta property="og:site_name" content="BLDS" />
      <meta property="og:url" content="bldsllc.com/" />
      <meta
        property="og:description"
        content="Expert Analysis, Testimony &amp; Consulting"
      />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="/img/opengraph.jpg" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-F3FQVRWRVS`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F3FQVRWRVS', {
          page_path: window.location.pathname,
        });
        `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="XzE2MzAyMzEyMg";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/XzE2MzAyMzEyMg/oribi.js","ORIBI");
        `,
        }}
      />
    </Head>
  );
};
