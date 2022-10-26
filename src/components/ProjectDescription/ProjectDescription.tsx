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
  noProblemSolutionResearchGrid?: boolean;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  projectDescription,
  noProblemSolutionResearchGrid
}) => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return (
        <ProjectDescriptionDesktop
          projectDescription={projectDescription}
          noProblemSolutionResearchGrid={noProblemSolutionResearchGrid}
        />
      );
    }
    case Device.LAPTOP: {
      return (
        <ProjectDescriptionLaptop
          projectDescription={projectDescription}
          noProblemSolutionResearchGrid={noProblemSolutionResearchGrid}
        />
      );
    }
    case Device.TABLET: {
      return (
        <ProjectDescriptionTablet
          projectDescription={projectDescription}
          noProblemSolutionResearchGrid={noProblemSolutionResearchGrid}
        />
      );
    }
    case Device.MOBILE: {
      return (
        <ProjectDescriptionMobile
          projectDescription={projectDescription}
          noProblemSolutionResearchGrid={noProblemSolutionResearchGrid}
        />
      );
    }
    default: {
      return (
        <ProjectDescriptionMobile
          projectDescription={projectDescription}
          noProblemSolutionResearchGrid={noProblemSolutionResearchGrid}
        />
      );
    }
  }
};

export default ProjectDescription;
