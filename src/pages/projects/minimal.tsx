import type { NextPage } from 'next';
import styled from 'styled-components';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';

interface DeviceProps {
  device: Device | undefined;
}

const MinimalPageContainer = styled.main`
  display: grid;
  grid-template-columns: ${(props: DeviceProps) => {
    switch (props.device) {
      case Device.DESKTOP: {
        return '28fr 34fr 38fr';
      }
      case Device.LAPTOP: {
        return '40fr 28fr 32fr';
      }
      case Device.TABLET || Device.MOBILE: {
        return '31fr 24fr 45fr';
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

const Home: NextPage = () => {
  const device = useDeviceContext();

  return <MinimalPageContainer device={device}></MinimalPageContainer>;
};

export default Home;
