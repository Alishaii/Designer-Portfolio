import styled from "styled-components";

interface SkillExampleProps {
  primary?: boolean;
}

export const MainInfoMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  padding: 0 10px 50px 10px;
`;

export const Title = styled.div`
  color: white;
  font-style: italic;
  font-weight: 200;
  font-size: 36px;
  line-height: 120%;

  margin-bottom: 40px;
`;

export const CreativeAreas = styled.div`
  color: white;
`;

export const CreativeAreasContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreativeAreasContentToken = styled.div`
  height: 85px;
  border-top: 1px solid #d4d4d4;

  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 120%;

  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: 1px solid #d4d4d4;
  }
`;

// -------------------------------------------------------------------------------------

export const Projects = styled.div`
  color: white;
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ProjectsContentToken = styled.div`
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
  padding-bottom: 40px;
`;

export const ProjectsContentTokenImage = styled.img`
  width: 100%;
`;

// -------------------------------------------------------------------------------------

export const Skills = styled.div``;

export const SkillExample = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: SkillExampleProps) =>
    props.primary ? "#89F856" : "inherit"};
  border: ${(props: SkillExampleProps) =>
    props.primary ? "1px solid #89F856" : "1px solid #ffffff"};
  color: ${(props: SkillExampleProps) => (props.primary ? "black " : "white")};
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
`;

export const SkillsContentToken = styled.div`
  border-top: 1px solid white;
`;

export const SkillsContentTokenName = styled.p`
  padding: 20px 0px 15px 0px;
  color: white;
`;

export const SkillsContentTokenDescription = styled.p`
  padding-right: 20%;
  padding-bottom: 30px;
  color: white;
`;

export const SkillExamples = styled.div`
  padding-right: 20%;
  display: flex;
  row-gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
