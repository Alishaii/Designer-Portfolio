import React from "react";
import {
  CreativeAreas,
  CreativeAreasContent,
  CreativeAreasContentToken,
  MainInfoMobileContainer,
  Projects,
  ProjectsContent,
  ProjectsContentToken,
  ProjectsContentTokenDescription,
  ProjectsContentTokenImage,
  ProjectsContentTokenTitle,
  SkillExample,
  SkillExamples,
  Skills,
  SkillsContent,
  SkillsContentToken,
  SkillsContentTokenDescription,
  SkillsContentTokenName,
  Title,
} from "./styles";
import * as projectsData from "../../constants/projectsData";
import * as skillsData from "../../constants/skillsData";
import { Link } from "react-router-dom";

export const MainInfoMobile = () => {
  return (
    <MainInfoMobileContainer>
      <CreativeAreas>
        <Title>
          CREATIVE <br /> AREAS
        </Title>
        <CreativeAreasContent>
          <CreativeAreasContentToken>UI/UX DESIGN</CreativeAreasContentToken>
          <CreativeAreasContentToken>EDITIRAL DESIGN</CreativeAreasContentToken>
          <CreativeAreasContentToken>GRAPHIC DESIGNER</CreativeAreasContentToken>
        </CreativeAreasContent>
      </CreativeAreas>

      <Projects id="projects">
        <Title>PROJECTS</Title>
        <ProjectsContent>
          {projectsData.projectsData.map((project) => (
            <ProjectsContentToken key={project.id}>
              <Link to={project.link}>
                <ProjectsContentTokenTitle>
                  <p>{project.name}</p>
                  <p>{project.year}</p>
                </ProjectsContentTokenTitle>
              </Link>

              <ProjectsContentTokenDescription>{project.description}</ProjectsContentTokenDescription>

              <Link to={project.link}>
                <ProjectsContentTokenImage src={project.img} />
              </Link>
            </ProjectsContentToken>
          ))}
        </ProjectsContent>
      </Projects>

      <Skills>
        <Title>SKILLS</Title>
        <SkillsContent>
          <SkillsContentToken>
            <SkillsContentTokenName>Programs</SkillsContentTokenName>
            <SkillsContentTokenDescription>{skillsData.programsText}</SkillsContentTokenDescription>
            <SkillExamples>
              {skillsData.programsExamples.map((e) => (
                <SkillExample key={e.id} primary={e.primary}>
                  {e.name}
                </SkillExample>
              ))}
            </SkillExamples>
          </SkillsContentToken>

          <SkillsContentToken>
            <SkillsContentTokenName>Personal qualities</SkillsContentTokenName>
            <SkillsContentTokenDescription>{skillsData.personalQualitiesText}</SkillsContentTokenDescription>
            <SkillExamples>
              {skillsData.personalQualitiesExamples.map((e) => (
                <SkillExample key={e.id} primary={e.primary}>
                  {e.name}
                </SkillExample>
              ))}
            </SkillExamples>
          </SkillsContentToken>

          <SkillsContentToken>
            <SkillsContentTokenName>Interests</SkillsContentTokenName>
            <SkillsContentTokenDescription>{skillsData.interestsText}</SkillsContentTokenDescription>
            <SkillExamples>
              {skillsData.interestsExamples.map((e) => (
                <SkillExample key={e.id} primary={e.primary}>
                  {e.name}
                </SkillExample>
              ))}
            </SkillExamples>
          </SkillsContentToken>
        </SkillsContent>
      </Skills>
    </MainInfoMobileContainer>
  );
};
