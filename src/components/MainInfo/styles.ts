import styled from "styled-components";

export const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const MainInfoToken = styled.div`
  display: flex;
`;

export const CreativeAreas = styled.div`
  grid-row: 1;
  grid-column: 1;

  color: white;
`;

export const CreativeAreasContent = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

export const Projects = styled.div`
  grid-row: 2;
  grid-column: 1;
`;

export const ProjectsContent = styled.div`
  grid-row: 2;
  grid-column: 1;
`;

export const Skills = styled.div`
  grid-row: 3;
  grid-column: 1;
`;

export const SkillsContent = styled.div`
  grid-row: 3;
  grid-column: 2;
`;
