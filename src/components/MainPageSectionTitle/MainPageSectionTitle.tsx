import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface MainPageSectionTitleProps {
  children?: ReactNode;
}

const MainPageSectionTitleContainer = styled.p`
  font-family: Plain Regular Italic;
  font-size: 36px;
  line-height: 120%;

  @media only screen and (min-width: 640px) {
    font-size: 48px;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 64px;
  }
`;

const MainPageSectionTitle: React.FC<MainPageSectionTitleProps> = ({ children }) => {
  return <MainPageSectionTitleContainer>{children}</MainPageSectionTitleContainer>;
};

export default MainPageSectionTitle;
