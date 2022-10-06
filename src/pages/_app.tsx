import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import DeviceWrapper from '../context/device';
import NoSsrWrapper from '../components/NoSsrWrapper';
import Marginer from '../components/Marginer';

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
    font-family: Plain Regular;
    src: url('/fonts/Plain Regular.otf');
  }

  @font-face {
    font-family: Plain Light;
    src: url('/fonts/Plain Light.otf');
  }

  @font-face {
    font-family: Plain Regular Italic;
    src: url('/fonts/Plain Regular Italic.otf');
  }

  @font-face {
    font-family: Plain Light Italic;
    src: url('/fonts/Plain Light Italic.otf');
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    max-width: 1920px;
    margin: 0 auto;

    font-family: Plain Light;
    color: black;
  }
`;

const Title = styled.title``;
const Meta = styled.meta``;
const Link = styled.link``;

const HorizontalPadding = styled.div`
  padding: 0 3.125%;

  @media only screen and (min-width: 640px) {
    padding: 0 4%;
  }

  @media only screen and (min-width: 1000px) {
    padding: 0 6.25%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Title>Portfolio</Title>
        <Meta name="description" content="Alina Barannykova Portfolio Website" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>

      <CssReset />
      <GlobalStyles />

      <NoSsrWrapper>
        <DeviceWrapper>
          <HorizontalPadding>
            <Header />
            <Component {...pageProps} />

          </HorizontalPadding>
        </DeviceWrapper>
      </NoSsrWrapper>
    </>
  );
}

export default MyApp;
