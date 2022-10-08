import React from 'react';
import styled from 'styled-components';

interface NoHorizontalPaddingProps {
  children?: React.ReactNode;
}

const NoHorizontalPaddingContainer = styled.div`
  width: 100vw;
  transform: translateX(-3.125%);

  @media only screen and (min-width: 640px) {
    transform: translateX(-4%);
  }

  @media only screen and (min-width: 1000px) {
    transform: translateX(-6.25%);
  }
`;

const NoHorizontalPadding: React.FC<NoHorizontalPaddingProps> = ({ children }) => {
  return <NoHorizontalPaddingContainer>{children}</NoHorizontalPaddingContainer>;
};

export default NoHorizontalPadding;
