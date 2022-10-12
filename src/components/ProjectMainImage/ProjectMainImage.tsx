import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import { StaticImageData } from 'next/image';
import ProjectMainImageDesktop from './ProjectMainImageDesktop';
import ProjectMainImageLaptop from './ProjectMainImageLaptop';
import ProjectMainImageMobile from './ProjectMainImageMobile';
import ProjectMainImageTablet from './ProjectMainImageTablet';

export interface ProjectMainImageProps {
  desktopImg: StaticImageData;
  laptopImg: StaticImageData;
  tabletImg: StaticImageData;
  mobileImg: StaticImageData;
}

const ProjectMainImage: React.FC<ProjectMainImageProps> = (props) => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <ProjectMainImageDesktop image={props.desktopImg} />;
    }
    case Device.LAPTOP: {
      return <ProjectMainImageLaptop image={props.laptopImg} />;
    }
    case Device.TABLET: {
      return <ProjectMainImageTablet image={props.tabletImg} />;
    }
    case Device.MOBILE: {
      return <ProjectMainImageMobile image={props.mobileImg} />;
    }
    default: {
      return <ProjectMainImageMobile image={props.mobileImg} />;
    }
  }
};

export default ProjectMainImage;
