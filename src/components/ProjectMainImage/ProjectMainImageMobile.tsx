import React from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import NoHorizontalPadding from '../NoHorizontalPadding';

interface ProjectMainImageMobileProps {
  image: StaticImageData;
}

const ProjectMainImageMobileContainer = styled.div`
  grid-column: 1 / span 3;
`;

const ProjectMainImageMobile: React.FC<ProjectMainImageMobileProps> = ({ image }) => {
  return (
    <ProjectMainImageMobileContainer>
      <NoHorizontalPadding>
        <Image src={image} alt="" width={340} height={370} layout={'responsive'} />
      </NoHorizontalPadding>
    </ProjectMainImageMobileContainer>
  );
};

export default ProjectMainImageMobile;
