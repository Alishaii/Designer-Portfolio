import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import FooterDesktop from './FooterDesktop';
import FooterLaptop from './FooterLaptop';
import FooterMobile from './FooterMobile';
import FooterTablet from './FooterTablet';

const Footer = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <FooterDesktop />;
    }
    case Device.LAPTOP: {
      return <FooterLaptop />;
    }
    case Device.TABLET: {
      return <FooterTablet />;
    }
    case Device.MOBILE: {
      return <FooterMobile />;
    }
    default: {
      return <FooterMobile />;
    }
  }
};

export default Footer;
