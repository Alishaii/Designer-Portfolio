import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NoHorizontalPadding from '../NoHorizontalPadding';
import { ProjectMainImageProps } from './ProjectMainImage';

const ProjectMainImageTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const ProjectMainImageTablet: React.FC<ProjectMainImageProps> = ({ projectName }) => {
  return (
    <ProjectMainImageTabletContainer>
      <NoHorizontalPadding>
        <Image src={`/images/${projectName}/main/tablet.jpg`} alt="" width={640} height={530} layout={'responsive'} />
      </NoHorizontalPadding>
    </ProjectMainImageTabletContainer>
  );
};

export default ProjectMainImageTablet;
