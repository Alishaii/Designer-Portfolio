import Head from 'next/head';
import type { AppProps } from 'next/app';

import { createGlobalStyle } from 'styled-components';

const CssReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  html,
  body {
    height: 100%;
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  
  #root,
  #__next {
    isolation: isolate;
  }
`;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Plain;
    src: url('/fonts/Plain-Font/Plain-Regular.otf');
  }

  @font-face {
    font-family: Plain;
    src: url('/fonts/Plain-Font/Plain-Regular.otf');
  }

  body {
    padding: 0 5.2%;
    max-width: 1920px;
    margin: 0 auto;

    font-family: Plain;
    color: var(--black-primary)
  }
`;

const GlobalCssVariables = createGlobalStyle`
  html {
    --black-primary: #1C1C1C;
    --gray-primary: #BABABA;
    --gray-secondary: #F5F5F5; 
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="A budget tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssReset />
      <GlobalStyles />
      <GlobalCssVariables />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
