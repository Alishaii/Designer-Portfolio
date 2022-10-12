import React from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

interface ProjectMainImageDesktopProps {
  image: StaticImageData;
}

const HoobProjectImageDesktopContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const ProjectMainImageDesktop: React.FC<ProjectMainImageDesktopProps> = ({ image }) => {
  return (
    <HoobProjectImageDesktopContainer>
      <Image src={image} alt="" width={1400} height={580} layout={'responsive'} placeholder='blur' />
    </HoobProjectImageDesktopContainer>
  );
};

export default ProjectMainImageDesktop;
