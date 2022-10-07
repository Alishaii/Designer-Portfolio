import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import styled from 'styled-components';
import FooterDesktop from './FooterDesktop';
import FooterLaptop from './FooterLaptop';
import FooterMobile from './FooterMobile';
import FooterTablet from './FooterTablet';
import Marginer from '../Marginer';

interface FooterProps {
  device?: Device;
}

const FooterContainer = styled.header`
  display: grid;
  grid-template-columns: ${(props: FooterProps) => {
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
      case Device.MOBILE: {
        return '33fr 33fr 33fr';
      }
      default: {
        return '33fr 33fr 33fr';
      }
    }
  }};
`;

const Margin = styled.div`
  grid-column: 1 / span 3;
`;

const Footer = () => {
  const device = useDeviceContext();

  return (
    <FooterContainer device={device}>
      {(() => {
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
      })()}
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={60} />) ||
          (device === Device.LAPTOP && <Marginer margin={60} />) ||
          (device === Device.TABLET && <Marginer margin={50} />) ||
          (device === Device.MOBILE && <Marginer margin={34} />)}
      </Margin>
    </FooterContainer>
  );
};

export default Footer;
