export {};
// import React from 'react';
// import { NextPage } from 'next';
// import styled from 'styled-components';

// import ProjectDescription from '../../components/ProjectDescription';
// import ProjectMainImage from '../../components/ProjectMainImage';
// import Device from '../../constants/device';
// import Marginer from '../../components/Marginer';

// import { useDeviceContext } from '../../context/device';

// import { secr } from '../../constants/SecrPage/secr';

// import desktopImg from '../../../public/images/Secr/main/desktop.jpg';
// import SecrProjectContentDesktop from '../../components/SecrProjectContent/SecrProjectContentDesktop';

// interface DeviceProps {
//   device: Device | undefined;
// }

// const SecrPageContainer = styled.main`
//   position: relative;
//   display: grid;
//   grid-template-columns: ${(props: DeviceProps) => {
//     switch (props.device) {
//       case Device.DESKTOP: {
//         return '28fr 34fr 38fr';
//       }
//       case Device.LAPTOP: {
//         return '40fr 13fr 47fr';
//       }
//       case Device.TABLET || Device.MOBILE: {
//         return '31fr 24fr 45fr';
//       }
//       default: {
//         return '33fr 33fr 33fr';
//       }
//     }
//   }};
// `;

// const Margin = styled.div`
//   grid-column: 1 / span 3;
// `;

// const Secr: NextPage = () => {
//   const device = useDeviceContext();

//   return (
//     <SecrPageContainer device={device}>
//       <ProjectMainImage desktopImg={desktopImg} laptopImg={desktopImg} tabletImg={desktopImg} mobileImg={desktopImg} />

//       <ProjectDescription projectDescription={secr} noProblemSolutionResearchGrid />
//       <Margin>
//         {(device === Device.DESKTOP && <Marginer margin={80} />) ||
//           (device === Device.LAPTOP && <Marginer margin={60} />) ||
//           (device === Device.TABLET && <Marginer margin={60} />) ||
//           (device === Device.MOBILE && <Marginer margin={50} />)}
//       </Margin>

//       <SecrProjectContentDesktop />
//     </SecrPageContainer>
//   );
// };

// export default Secr;
