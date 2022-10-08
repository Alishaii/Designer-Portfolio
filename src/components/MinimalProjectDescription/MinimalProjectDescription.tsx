import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import styled from 'styled-components';
import MinimalProjectDescriptionDesktop from './MinimalProjectDescriptionDesktop';

const MinimalProjectDescription = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <MinimalProjectDescriptionDesktop />;
    }
    case Device.LAPTOP: {
      return <MinimalProjectDescriptionDesktop />;
    }
    // case Device.TABLET: {
    //   return <MinimalProjectDescriptionTablet />;
    // }
    // case Device.MOBILE: {
    //   return <MinimalProjectDescriptionTablet />;
    // }
    default: {
      return <MinimalProjectDescriptionDesktop />;
    }
  }
};

export default MinimalProjectDescription;
