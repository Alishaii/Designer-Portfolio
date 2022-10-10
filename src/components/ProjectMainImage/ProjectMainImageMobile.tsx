import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NoHorizontalPadding from '../NoHorizontalPadding';
import { ProjectMainImageProps } from './ProjectMainImage';

const ProjectMainImageMobileContainer = styled.div`
  grid-column: 1 / span 3;
`;

const ProjectMainImageMobile: React.FC<ProjectMainImageProps> = ({ projectName }) => {
  return (
    <ProjectMainImageMobileContainer>
      <NoHorizontalPadding>
        <Image src={`/images/${projectName}/main/mobile.jpg`} alt="" width={340} height={370} layout={'responsive'} />
      </NoHorizontalPadding>
    </ProjectMainImageMobileContainer>
  );
};

export default ProjectMainImageMobile;
