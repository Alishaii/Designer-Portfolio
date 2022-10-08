import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import styled from 'styled-components';

const Div = styled.div`
`;

const MinimalProjectDescription = () => {
  const device = useDeviceContext();

  // switch (device) {
  //   case Device.DESKTOP: {
  //     return <MinimalProjectDescriptionDesktop />;
  //   }
  //   case Device.LAPTOP: {
  //     return <MinimalProjectDescriptionDesktop />;
  //   }
  //   case Device.TABLET: {
  //     return <MinimalProjectDescriptionTablet />;
  //   }
  //   case Device.MOBILE: {
  //     return <MinimalProjectDescriptionTablet />;
  //   }
  //   default: {
  //     return <MinimalProjectDescriptionTablet />;
  //   }
  // }
  return <Div>123</Div>;
};

export default MinimalProjectDescription;
