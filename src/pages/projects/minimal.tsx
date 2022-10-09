import type { NextPage } from 'next';
import styled from 'styled-components';
import Marginer from '../../components/Marginer';
import MinimalProjectContent from '../../components/MinimalProjectContent';
import MinimalProjectDescription from '../../components/MinimalProjectDescription';
import MinimalProjectImage from '../../components/MinimalProjectImage';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';

interface DeviceProps {
  device: Device | undefined;
}

const MinimalPageContainer = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: ${(props: DeviceProps) => {
    switch (props.device) {
      case Device.DESKTOP: {
        return '28fr 34fr 38fr';
      }
      case Device.LAPTOP: {
        return '40fr 13fr 47fr';
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

const Minimal: NextPage = () => {
  const device = useDeviceContext();

  return (
    <MinimalPageContainer device={device}>
      <MinimalProjectImage />

      <MinimalProjectDescription />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={80} />) ||
          (device === Device.LAPTOP && <Marginer margin={60} />) ||
          (device === Device.TABLET && <Marginer margin={60} />) ||
          (device === Device.MOBILE && <Marginer margin={50} />)}
      </Margin>

      <MinimalProjectContent />
    </MinimalPageContainer>
  );
};

export default Minimal;
