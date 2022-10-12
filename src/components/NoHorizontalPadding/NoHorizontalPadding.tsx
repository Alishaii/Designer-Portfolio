import React from 'react';
import styled from 'styled-components';

interface NoHorizontalPaddingProps {
  children?: React.ReactNode;
}

const NoHorizontalPaddingContainer = styled.div`
  width: 100vw;
  max-width: 1920px;
  position: relative;
  left: 50%;
  margin-left: -50vw;
`;

const NoHorizontalPadding: React.FC<NoHorizontalPaddingProps> = ({ children }) => {
  return <NoHorizontalPaddingContainer>{children}</NoHorizontalPaddingContainer>;
};

export default NoHorizontalPadding;
