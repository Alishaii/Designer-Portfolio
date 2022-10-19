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
  padding-right: 60px;
  min-height: 130px;
`;

const Category = styled.div`
  ${commonStyles}

  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
`;

const SkillsAndDescription = styled.div`
  ${commonStyles}

  grid-column: span 2;
`;

const Skills = styled.div`
  display: flex;
  align-items: start;
  column-gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Description = styled.div`
  line-height: 110%;
`;

const MainPageSkillsTablet = () => {
  return (
    <>
      <Title>
        <MainPageSectionTitle>SKILLS</MainPageSectionTitle>
      </Title>

      <Margin>
        <Marginer margin={30} />
      </Margin>

      <Category>Programs</Category>
      <SkillsAndDescription>
        <Skills>
          {programs.map((item, index) => (
            <Button key={index} text={item}></Button>
          ))}
        </Skills>
        <Description>{programsDescription}</Description>
        <Marginer margin={30} />
      </SkillsAndDescription>

      <Category>Personal qualities</Category>
      <SkillsAndDescription>
        <Skills>
          {personalQualities.map((item, index) => (
            <Button key={index} text={item}></Button>
          ))}
        </Skills>
        <Description>{personalQualitiesDescription}</Description>
        <Marginer margin={30} />
      </SkillsAndDescription>

      <Category>Intrrests</Category>
      <SkillsAndDescription>
        <Skills>
          {interests.map((item, index) => (
            <Button key={index} text={item}></Button>
          ))}
        </Skills>
        <Description>{interestsDescription}</Description>
      </SkillsAndDescription>
    </>
  );
};

export default MainPageSkillsTablet;
