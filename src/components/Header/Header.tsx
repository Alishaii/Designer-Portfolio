import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

import Device from '../../constants/device';

interface HeaderProps {
  device?: Device;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${(props: HeaderProps) => (props.device === Device.MOBILE ? '82px' : '94px')};
`;

const Header: React.FC<HeaderProps> = ({ device }) => {
  return (
    <HeaderContainer device={device}>
      <Button text={'main'} />
      <Button text={'projects'} />
      <Button text={'contacts'} />
    </HeaderContainer>
  );
};

export default Header;
