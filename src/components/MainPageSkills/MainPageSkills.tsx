import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';

import MainPageSkillsDesktop from './MainPageSkillsDesktop';
import MainPageSkillsLaptop from './MainPageSkillsLaptop';
import MainPageSkillsMobile from './MainPageSkillsMobile';
import MainPageSkillsTablet from './MainPageSkillsTablet';

const MainPageSkills = () => {
  const device = useDeviceContext();
  switch (device) {
    case Device.DESKTOP: {
      return <MainPageSkillsDesktop />;
    }
    case Device.LAPTOP: {
      return <MainPageSkillsLaptop />;
    }
    case Device.TABLET: {
      return <MainPageSkillsTablet />;
    }
    case Device.MOBILE: {
      return <MainPageSkillsMobile />;
    }
    default: {
      return <MainPageSkillsMobile />;
    }
  }
};

export default MainPageSkills;
