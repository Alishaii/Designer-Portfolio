import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import MainPageProjectsDesktop from './MainPageProjectsDesktop';

const MainPageProjects = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <MainPageProjectsDesktop />;
    }
    case Device.LAPTOP: {
      return <MainPageProjectsDesktop />;
    }
    case Device.TABLET: {
      return <MainPageProjectsDesktop />;
    }
    case Device.MOBILE: {
      return <MainPageProjectsDesktop />;
    }
    default: {
      return <MainPageProjectsDesktop />;
    }
  }
};

export default MainPageProjects;
