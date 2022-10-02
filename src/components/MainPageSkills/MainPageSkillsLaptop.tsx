import React from 'react';
import styled from 'styled-components';
import {
  interests,
  interestsDescription,
  personalQualities,
  personalQualitiesDescription,
  programs,
  programsDescription
} from '../../constants/skills';
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

const CategoryAndSkills = styled.div`
  ${commonStyles}

  grid-column: span 2;
  display: flex;
`;

const Category = styled.div`
  flex: 1;

  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
`;

const Skills = styled.div`
  flex: 1.5;

  display: flex;
  align-items: start;
  column-gap: 20px;
  flex-wrap: wrap;
`;

const Description = styled.div`
  ${commonStyles}
  padding-right: 10px;
`;

const MainPageSkillsLaptop = () => {
  return (
    <>
      <Title>
        <MainPageSectionTitle>SKILLS</MainPageSectionTitle>
      </Title>

      <Margin>
        <Marginer margin={40} />
      </Margin>

      <CategoryAndSkills>
        <Category>Programs</Category>
        <Skills>
          {programs.map((item, index) => (
            <Button key={index} text={item}></Button>
          ))}
        </Skills>
      </CategoryAndSkills>
      <Description>{programsDescription}</Description>

      <CategoryAndSkills>
        <Category>Personal qualities</Category>
        <Skills>
          {personalQualities.map((item, index) => (
            <Button key={index} text={item}></Button>
          ))}
        </Skills>
      </CategoryAndSkills>
      <Description>{personalQualitiesDescription}</Description>

      <CategoryAndSkills>
        <Category>Intrrests</Category>
        <Skills>
          {interests.map((item, index) => (
            <Button key={index} text={item}></Button>
          ))}
        </Skills>
      </CategoryAndSkills>
      <Description>{interestsDescription}</Description>
    </>
  );
};

export default MainPageSkillsLaptop;
