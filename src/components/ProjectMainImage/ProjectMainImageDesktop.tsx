import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ProjectMainImageProps } from './ProjectMainImage';

const HoobProjectImageDesktopContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const ProjectMainImageDesktop: React.FC<ProjectMainImageProps> = ({ projectName }) => {
  return (
    <HoobProjectImageDesktopContainer>
      <Image src={`/images/${projectName}/main/desktop.jpg`} alt="" width={1400} height={580} layout={'responsive'} />
    </HoobProjectImageDesktopContainer>
  );
};

export default ProjectMainImageDesktop;
