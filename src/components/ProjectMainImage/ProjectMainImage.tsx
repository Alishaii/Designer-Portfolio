import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import ProjectMainImageDesktop from './ProjectMainImageDesktop';
import ProjectMainImageLaptop from './ProjectMainImageLaptop';
import ProjectMainImageMobile from './ProjectMainImageMobile';
import ProjectMainImageTablet from './ProjectMainImageTablet';

export interface ProjectMainImageProps {
  projectName: string;
}

const ProjectMainImage: React.FC<ProjectMainImageProps> = ({ projectName }) => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <ProjectMainImageDesktop projectName={projectName} />;
    }
    case Device.LAPTOP: {
      return <ProjectMainImageLaptop projectName={projectName} />;
    }
    case Device.TABLET: {
      return <ProjectMainImageTablet projectName={projectName} />;
    }
    case Device.MOBILE: {
      return <ProjectMainImageMobile projectName={projectName} />;
    }
    default: {
      return <ProjectMainImageMobile projectName={projectName} />;
    }
  }
};

export default ProjectMainImage;
