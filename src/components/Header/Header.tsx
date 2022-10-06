import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';

interface HeaderProps {
  device?: Device;
}

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: ${(props: HeaderProps) => {
    switch (props.device) {
      case Device.DESKTOP: {
        return '28fr 34fr 38fr';
      }
      case Device.LAPTOP: {
        return '40fr 28fr 32fr';
      }
      case Device.TABLET: {
        return '31fr 24fr 45fr';
      }
      default: {
        return '31fr 24fr 45fr';
      }
    }
  }};

  @media only screen and (max-width: 639px) {
    display: flex;
    justify-content: space-between;
  }

  height: ${(props: HeaderProps) => (props.device === Device.MOBILE ? '82px' : '94px')};
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const device = useDeviceContext();

  return (
    <HeaderContainer device={device} id="header">
      <HeaderButtonContainer>
        <Button trueButton link="/#main" text={'main'} />
      </HeaderButtonContainer>

      <HeaderButtonContainer>
        <Button trueButton link="#projects" text={'projects'} />
      </HeaderButtonContainer>

      <HeaderButtonContainer>
        <Button trueButton link="#footer" text={'contacts'} />
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
