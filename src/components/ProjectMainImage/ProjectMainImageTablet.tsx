import React from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import NoHorizontalPadding from '../NoHorizontalPadding';

interface ProjectMainImageTabletProps {
  image: StaticImageData;
}

const ProjectMainImageTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const ProjectMainImageTablet: React.FC<ProjectMainImageTabletProps> = ({ image }) => {
  return (
    <ProjectMainImageTabletContainer>
      <NoHorizontalPadding>
        <Image src={image} alt="" width={640} height={530} layout={'responsive'} />
      </NoHorizontalPadding>
    </ProjectMainImageTabletContainer>
  );
};

export default ProjectMainImageTablet;
