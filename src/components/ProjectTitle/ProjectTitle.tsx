import React from 'react';
import styled from 'styled-components';

interface ProjectTitleProps {
  title: string;
  subtitle: string;
}

const ProjectTitleContainer = styled.div``;

const Title = styled.p`
  font-family: Plain Regular Italic;
  font-size: 64px;
  line-height: 120%;
`;

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
`;

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title, subtitle }) => {
  return (
    <ProjectTitleContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ProjectTitleContainer>
  );
};

export default ProjectTitle;
