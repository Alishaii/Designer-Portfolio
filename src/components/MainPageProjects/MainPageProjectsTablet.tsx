import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Marginer from '../Marginer';
import Link from '../Link';
import MainPageSectionTitle from '../MainPageSectionTitle';

import { projects } from '../../constants/MainPage/projects';

const MainPageProjectsTabletContainer = styled.div`
  grid-column: 1 / span 3;

  display: flex;
  flex-direction: column;
  row-gap: 90px;
`;

const ImageContainer = styled.div`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;

const ProjectItem = styled.div`
  &:nth-child(3) ${ImageContainer} {
    padding-right: 10%;
  }
`;

const Title = styled.div`
  grid-column: 1 / span 3;
`;

const Margin = styled.div`
  grid-column: 1 / span 2;
`;

const ProjectName = styled.p`
  font-family: Plain Regular;
  font-size: 28px;
  line-height: 100%;
`;

const ProjectDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;

  @media only screen and (min-width: 640px) {
    padding-right: 10%;
  }
`;

const MainPageProjectsTablet = () => {
  return (
    <>
      <Title id="projects">
        <MainPageSectionTitle>PROJECTS</MainPageSectionTitle>
      </Title>

      <Margin>
        <Marginer margin={40} />
      </Margin>

      <MainPageProjectsTabletContainer>
        {projects.map((item, index) => (
          <ProjectItem key={index}>
            <ImageContainer>
              <Link href={item.href}>
                <Image
                  layout="responsive"
                  src={item.img}
                  alt=""
                  width={item.imgWidth}
                  height={item.imgHeight}
                  placeholder={'blur'}
                />
              </Link>
            </ImageContainer>
            <Marginer margin={40} />

            <ProjectName>{item.name}</ProjectName>
            <Marginer margin={7} />

            <ProjectDescription>{item.description}</ProjectDescription>
            <Marginer margin={20} />

            <Button
              link={item.buttonText === 'see more' ? item.href : undefined}
              trueButton
              text={item.buttonText}
            ></Button>
          </ProjectItem>
        ))}
      </MainPageProjectsTabletContainer>
    </>
  );
};

export default MainPageProjectsTablet;
