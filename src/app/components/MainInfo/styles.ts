import styled from "styled-components";

interface CreativeAreasContentTokenProps {
  primary?: boolean;
}

interface SkillExampleProps {
  primary?: boolean;
}

export const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 32% 68%;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "top-left top-right"
    "middle-left middle-right"
    "bottom-left bottom-right";
`;

// -------------------------------------------------------------------------------------

export const CreativeAreas = styled.div`
  grid-area: top-left;

  display: grid;
  padding-left: 11%;
  padding-top: 180px;
  padding-bottom: 290px;

  color: white;
  font-style: italic;
  font-weight: 200;
  font-size: 64px;
  line-height: 120%;

  @media (max-width: 1260px) {
    font-size: 45px;
  }
`;

export const CreativeAreasContent = styled.div`
  grid-area: top-right;

  display: flex;
  flex-direction: column;

  margin: 180px 5.6% 0 5.6%;
`;

export const CreativeAreasContentToken = styled.div`
  height: 85px;

  display: flex;
  align-items: center;

  padding-left: ${(props: CreativeAreasContentTokenProps) => (props.primary ? "2%" : "0px")};

  color: ${(props: CreativeAreasContentTokenProps) => (props.primary ? "black" : "#FFFFFF")};
  border-bottom: ${(props: CreativeAreasContentTokenProps) =>
    props.primary ? "1px solid #89F856" : "1px solid #D5D5D5"};
  background-color: ${(props: CreativeAreasContentTokenProps) => (props.primary ? "#89F856" : "inherit")};

  font-style: ${(props: CreativeAreasContentTokenProps) => (props.primary ? "italic" : "normal")};
  font-weight: 200;
  font-size: 20px;
  line-height: 120%;
`;

// -------------------------------------------------------------------------------------

export const Projects = styled.div`
  grid-area: middle-left;

  display: grid;
  padding-left: 11%;
  padding-bottom: 200px;

  color: white;
  font-style: italic;
  font-weight: 200;
  font-size: 64px;
  line-height: 120%;

  @media (max-width: 1260px) {
    font-size: 45px;
  }
`;

export const ProjectsContent = styled.div`
  grid-area: middle-right;

  margin: 0 5.6%;

  display: flex;
  gap: 60px;
  overflow-x: scroll;
  margin-bottom: 200px;
`;

export const ProjectsContentToken = styled.div`
  min-width: 350px;

  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
  color: white;

  border-top: 1px solid white;
`;

export const ProjectsContentTokenTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 20px 0px;
`;

export const ProjectsContentTokenDescription = styled.p`
  height: 68px;
  padding-bottom: 40px;
`;

export const ProjectsContentTokenImage = styled.img`
  width: 100%;
  height: 250px;
`;

// -------------------------------------------------------------------------------------

export const Skills = styled.div`
  grid-area: bottom-left;

  display: grid;
  padding-left: 11%;

  color: white;
  font-style: italic;
  font-weight: 200;
  font-size: 64px;
  line-height: 120%;

  @media (max-width: 1260px) {
    font-size: 45px;
  }
`;

export const SkillsContent = styled.div`
  grid-area: bottom-right;

  margin: 0 5.6%;

  display: grid;
  grid-template-columns: 18% 53% 29%;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "top-left top-center top-right"
    "middle-left middle-center middle-right"
    "bottom-left bottom-center bottom-right";
`;

export const SkillExample = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: SkillExampleProps) => (props.primary ? "#89F856" : "inherit")};
  border: ${(props: SkillExampleProps) => (props.primary ? "1px solid #89F856" : "1px solid #ffffff")};
  color: ${(props: SkillExampleProps) => (props.primary ? "black " : "white")};
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
`;

export const Programs = styled.div`
  grid-area: top-left;
  min-height: 150px;

  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const ProgramsExamples = styled.div`
  margin-bottom: auto;
  grid-area: top-center;
  padding-right: 10%;
  padding-bottom: 20px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const ProgramsText = styled.p`
  grid-area: top-right;
  color: white;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const PersonalQualities = styled.div`
  grid-area: middle-left;
  min-height: 150px;

  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const PersonalQualitiesExamples = styled.div`
  margin-bottom: auto;
  grid-area: middle-center;
  padding-right: 10%;
  padding-bottom: 20px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const PersonalQualitiesText = styled.p`
  grid-area: middle-right;
  color: white;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const Interests = styled.div`
  grid-area: bottom-left;
  min-height: 150px;

  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const InterestsExamples = styled.div`
  margin-bottom: auto;
  grid-area: bottom-center;
  padding-right: 10%;
  padding-bottom: 20px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;

export const InterestsText = styled.p`
  grid-area: bottom-right;
  color: white;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;

  padding-top: 20px;
  border-top: 1px solid #d4d4d4;
`;
