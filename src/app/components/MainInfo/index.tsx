import React from "react";
import {
  CreativeAreas,
  CreativeAreasContent,
  CreativeAreasContentToken,
  Interests,
  InterestsExamples,
  InterestsText,
  MainInfoContainer,
  PersonalQualities,
  PersonalQualitiesExamples,
  PersonalQualitiesText,
  Programs,
  ProgramsExamples,
  ProgramsText,
  Projects,
  ProjectsContent,
  ProjectsContentToken,
  ProjectsContentTokenDescription,
  ProjectsContentTokenImage,
  ProjectsContentTokenTitle,
  SkillExample,
  Skills,
  SkillsContent,
} from "./styles";
import * as skillsData from "../../constants/skillsData";
import * as projectsData from "../../constants/projectsData";
import { Link } from "react-router-dom";

export const MainInfo = () => {
  return (
    <MainInfoContainer>
      <CreativeAreas>CREATIVE AREAS</CreativeAreas>
      <CreativeAreasContent>
        <CreativeAreasContentToken primary>
          UX/UI DESIGN
        </CreativeAreasContentToken>
        <CreativeAreasContentToken>EDITIRIAL DESIGN</CreativeAreasContentToken>
        <CreativeAreasContentToken>GRAPHIC DESIGNER</CreativeAreasContentToken>
      </CreativeAreasContent>

      <Projects id="projects">PROJECTS</Projects>
      <ProjectsContent>
        {projectsData.projectsData.map((project) => (
          <ProjectsContentToken key={project.id}>
            <Link to={project.link}>
              <ProjectsContentTokenTitle>
                <p>{project.name}</p>
                <p>{project.year}</p>
              </ProjectsContentTokenTitle>
            </Link>

            <ProjectsContentTokenDescription>
              {project.description}
            </ProjectsContentTokenDescription>

            <Link to={project.link}>
              <ProjectsContentTokenImage src={project.img} />
            </Link>
          </ProjectsContentToken>
        ))}
      </ProjectsContent>

      <Skills>SKILLS</Skills>
      <SkillsContent>
        <Programs>Programs</Programs>
        <ProgramsExamples>
          {skillsData.programsExamples.map((item) => (
            <SkillExample key={item.id} primary={item.primary}>
              {item.name}
            </SkillExample>
          ))}
        </ProgramsExamples>
        <ProgramsText>{skillsData.programsText}</ProgramsText>

        <PersonalQualities>Personal Qualities</PersonalQualities>
        <PersonalQualitiesExamples>
          {skillsData.personalQualitiesExamples.map((item) => (
            <SkillExample key={item.id} primary={item.primary}>
              {item.name}
            </SkillExample>
          ))}
        </PersonalQualitiesExamples>
        <PersonalQualitiesText>
          {skillsData.personalQualitiesText}
        </PersonalQualitiesText>

        <Interests>Interests</Interests>
        <InterestsExamples>
          {skillsData.interestsExamples.map((item) => (
            <SkillExample key={item.id} primary={item.primary}>
              {item.name}
            </SkillExample>
          ))}
        </InterestsExamples>
        <InterestsText>{skillsData.interestsText}</InterestsText>
      </SkillsContent>
    </MainInfoContainer>
  );
};
