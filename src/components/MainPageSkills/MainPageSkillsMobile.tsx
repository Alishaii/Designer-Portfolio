import React from 'react';
import styled from 'styled-components';
import MainPageSectionTitle from '../MainPageSectionTitle';
import Marginer from '../Marginer';
import * as skillsConstants from '../../constants/skills';
import Button from '../Button';

const MainPageSkillsMobileContainer = styled.div`
  grid-column: span 3;
`;

const Section = styled.section`
  border-top: 1px solid black;
`;

const SectionTitle = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 10px;
`;

const Description = styled.p`
  font-weight: 300;
  line-height: 110%;
`;

const MainPageSkillsMobile = () => {
  const descriptions = [
    skillsConstants.programsDescription,
    skillsConstants.personalQualitiesDescription,
    skillsConstants.interestsDescription
  ];
  const skills = [skillsConstants.programs, skillsConstants.personalQualities, skillsConstants.interests];

  return (
    <MainPageSkillsMobileContainer>
      <MainPageSectionTitle>SKILLS</MainPageSectionTitle>
      <Marginer margin={30} />

      {['Programs', `Personal qualities`, 'Interests'].map((item, index) => (
        <Section key={index}>
          <Marginer margin={20} />

          <SectionTitle>{item}</SectionTitle>
          <Marginer margin={20} />

          <Skills>
            {skills[index].map((item, index) => (
              <Button key={index} text={item} />
            ))}
          </Skills>
          <Marginer margin={20} />

          <Description>{descriptions[index]}</Description>
          <Marginer margin={25} />
        </Section>
      ))}
    </MainPageSkillsMobileContainer>
  );
};

export default MainPageSkillsMobile;
