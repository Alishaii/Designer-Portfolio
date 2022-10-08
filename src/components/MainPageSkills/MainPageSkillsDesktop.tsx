import React from 'react';
import styled from 'styled-components';
import {
  interests,
  interestsDescription,
  personalQualities,
  personalQualitiesDescription,
  programs,
  programsDescription
} from '../../constants/MainPage/skills';
import Button from '../Button';
import MainPageSectionTitle from '../MainPageSectionTitle';
import Marginer from '../Marginer';

const Title = styled.div`
  grid-column: span 3;
`;

const Margin = styled.div`
  grid-column: span 3;
`;

const commonStyles = `
  border-top: 1px solid black;
  padding-top: 20px;
  padding-right: 100px;
  min-height: 130px;
`;

const Category = styled.div`
  ${commonStyles}

  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
`;

const Skills = styled.div`
  ${commonStyles}

  display: flex;
  align-items: start;
  column-gap: 20px;
  flex-wrap: wrap;
`;

const Description = styled.div`
  ${commonStyles}
  line-height: 110%;
`;

const MainPageSkillsDesktop = () => {
  return (
    <>
      <Title>
        <MainPageSectionTitle>SKILLS</MainPageSectionTitle>
      </Title>

      <Margin>
        <Marginer margin={40} />
      </Margin>

      <Category>Programs</Category>
      <Skills>
        {programs.map((item, index) => (
          <Button key={index} text={item}></Button>
        ))}
      </Skills>
      <Description>{programsDescription}</Description>

      <Category>Personal qualities</Category>
      <Skills>
        {personalQualities.map((item, index) => (
          <Button key={index} text={item}></Button>
        ))}
      </Skills>
      <Description>{personalQualitiesDescription}</Description>

      <Category>Intrrests</Category>
      <Skills>
        {interests.map((item, index) => (
          <Button key={index} text={item}></Button>
        ))}
      </Skills>
      <Description>{interestsDescription}</Description>
    </>
  );
};

export default MainPageSkillsDesktop;
