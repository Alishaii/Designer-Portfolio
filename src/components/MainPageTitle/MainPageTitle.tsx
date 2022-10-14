import React from 'react';
import styled from 'styled-components';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import EaseInWrapper from '../EaseInWrapper';

interface MainPageTitleProps {
  device?: Device;
}

const MainPageTitleContainer = styled.div`
  grid-column: 1 / span 3;

  line-height: 120%;
  font-size: ${(props: MainPageTitleProps) => {
    switch (props.device) {
      case Device.MOBILE: {
        return '42px';
      }
      case Device.TABLET: {
        return '64px';
      }
      default: {
        return '80px';
      }
    }
  }};

  display: flex;
  flex-direction: column;
`;

const TopText = styled.p`
  padding-left: 14%;
  font-family: Plain Regular;

  @media only screen and (max-width: 639px) {
    padding-left: 0;
  }
`;

const BottomText = styled.p``;

const Italic = styled.span`
  font-family: Plain Regular Italic;
`;

const MainPageTitle = () => {
  const device = useDeviceContext();

  return (
    <MainPageTitleContainer device={device} id="main">
      <EaseInWrapper>
        <TopText>
          HEY, I&lsquo;M <Italic>ALINA</Italic>
        </TopText>

        <BottomText>
          <Italic>WELCOME</Italic>
        </BottomText>
      </EaseInWrapper>
    </MainPageTitleContainer>
  );
};

export default MainPageTitle;
