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

export const MainInfo = () => {
  return (
    <MainInfoContainer>
      <CreativeAreas>CREATIVE AREAS</CreativeAreas>
      <CreativeAreasContent>
        <CreativeAreasContentToken>UX/UI DESIGN</CreativeAreasContentToken>
        <CreativeAreasContentToken>EDITIRIAL DESIGN</CreativeAreasContentToken>
        <CreativeAreasContentToken primary>
          GRAPHIC DESIGNER
        </CreativeAreasContentToken>
      </CreativeAreasContent>

      <Projects>PROJECTS</Projects>
      <ProjectsContent>
        {projectsData.projectsData.map((project) => (
          <ProjectsContentToken key={project.id}>
            <ProjectsContentTokenTitle>
              <p>{project.name}</p>
              <p>{project.year}</p>
            </ProjectsContentTokenTitle>

            <ProjectsContentTokenDescription>
              {project.description}
            </ProjectsContentTokenDescription>

            <ProjectsContentTokenImage src={project.img}  />
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
