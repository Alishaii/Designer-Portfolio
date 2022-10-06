import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import MainPageSectionTitle from '../MainPageSectionTitle';

import { projects } from '../../constants/projects';
import Button from '../Button';
import Marginer from '../Marginer';

const MainPageProjectsDesktopContainer = styled.div`
  grid-column: 1 / span 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.div`
  grid-column: 1 / span 3;
`;

const Margin = styled.div`
  grid-column: 1 / span 2;
`;

const ProjectDescriptionContainerLeft = styled.div`
  padding-right: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const ImageContainerLeft = styled.div`
  padding-right: 5%;
`;

const ImageContainerRight = styled.div`
  padding-left: 5%;
`;

const ProjectDescriptionContainerRight = styled.div`
  padding-left: 24%;
  padding-right: 18%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const ProjectName = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 120%;
`;

const ProjectDescription = styled.p`
  line-height: 110%;
`;

const MainPageProjectsDesktop = () => {
  return (
    <>
      <Title>
        <MainPageSectionTitle>PROJECTS</MainPageSectionTitle>
      </Title>

      <Margin>
        <Marginer margin={10} />
      </Margin>

      <MainPageProjectsDesktopContainer>
        {projects.map((item, index) => {
          return index % 2 === 0 ? (
            <React.Fragment key={index}>
              <ProjectDescriptionContainerLeft>
                <ProjectName>{item.name}</ProjectName>
                <Marginer margin={8} />

                <ProjectDescription>{item.description}</ProjectDescription>
                <Marginer margin={26} />

                <Button text={'see more'}></Button>
              </ProjectDescriptionContainerLeft>

              <ImageContainerRight>
                <Image src={item.img} alt="" width={item.imgWidth} height={item.imgHeight}></Image>
              </ImageContainerRight>

              <Margin>
                <Marginer margin={60} />
              </Margin>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <ImageContainerLeft>
                <Image src={item.img} alt="" width={item.imgWidth} height={item.imgHeight}></Image>
              </ImageContainerLeft>

              <ProjectDescriptionContainerRight>
                <ProjectName>{item.name}</ProjectName>
                <Marginer margin={8} />

                <ProjectDescription>{item.description}</ProjectDescription>
                <Marginer margin={26} />

                <Button text={'see more'}></Button>
              </ProjectDescriptionContainerRight>

              <Margin>
                <Marginer margin={60} />
              </Margin>
            </React.Fragment>
          );
        })}
      </MainPageProjectsDesktopContainer>
    </>
  );
};

export default MainPageProjectsDesktop;
