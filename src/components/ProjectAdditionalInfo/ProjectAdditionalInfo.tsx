import React from 'react';
import styled from 'styled-components';
import Marginer from '../Marginer';
import { ProjectDescriptionProps } from '../ProjectDescription';

const Item = styled.div``;

const ProjectAdditionalInfoContainer = styled.div`
  grid-column: 1 / span 3;

  display: grid;
  grid-template-columns: 210px auto;
  row-gap: 37px;
`;

const ItemTitle = styled.p`
  font-size: 20px;
  line-height: 110%;
`;

const InnerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InnerItem = styled.p`
  line-height: 100%;
`;

const ProjectAdditionalInfo: React.FC<ProjectDescriptionProps> = ({ projectDescription }) => {
  return (
    <ProjectAdditionalInfoContainer>
      {projectDescription.projectAdditionalInfo.map((item, index) => (
        <Item key={index}>
          <ItemTitle>{item.title}</ItemTitle>
          <Marginer margin={10} />

          <InnerItems>
            {item.items.map((innerItem, innerIndex) => (
              <InnerItem key={innerIndex}>{innerItem}</InnerItem>
            ))}
          </InnerItems>
          <Marginer margin={10} />
        </Item>
      ))}
    </ProjectAdditionalInfoContainer>
  );
};

export default ProjectAdditionalInfo;
