import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ProjectMainImageProps } from './ProjectMainImage';

const ProjectImageLaptopContainer = styled.div`
  position: absolute;
  width: 100vw;
  transform: translateX(-6.25%);
  z-index: -1;
`;

const ProjectImageLaptop: React.FC<ProjectMainImageProps> = ({ projectName }) => {
  return (
    <ProjectImageLaptopContainer>
      <Image src={`/images/${projectName}/main/laptop.jpg`} alt="" width={1000} height={580} layout={'responsive'} />
    </ProjectImageLaptopContainer>
  );
};

export default ProjectImageLaptop;
