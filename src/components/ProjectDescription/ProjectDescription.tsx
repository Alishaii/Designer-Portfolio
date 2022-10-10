import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import ProjectDescriptionContent from '../../types';
import ProjectDescriptionDesktop from './ProjectDescriptionDesktop';
import ProjectDescriptionLaptop from './ProjectDescriptionLaptop';
import ProjectDescriptionMobile from './ProjectDescriptionMobile';
import ProjectDescriptionTablet from './ProjectDescriptionTablet';

export interface ProjectDescriptionProps {
  projectDescription: ProjectDescriptionContent;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ projectDescription }) => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <ProjectDescriptionDesktop projectDescription={projectDescription} />;
    }
    case Device.LAPTOP: {
      return <ProjectDescriptionLaptop projectDescription={projectDescription} />;
    }
    case Device.TABLET: {
      return <ProjectDescriptionTablet projectDescription={projectDescription} />;
    }
    case Device.MOBILE: {
      return <ProjectDescriptionMobile projectDescription={projectDescription} />;
    }
    default: {
      return <ProjectDescriptionMobile projectDescription={projectDescription} />;
    }
  }
};

export default ProjectDescription;
