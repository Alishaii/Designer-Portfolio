import React from 'react';
import styled from 'styled-components';
import Marginer from '../Marginer';
import ProjectAdditionalInfo from '../ProjectAdditionalInfo';
import ProjectTitle from '../ProjectTitle';

import { ProjectDescriptionProps } from './ProjectDescription';

const Margin = styled.div`
  grid-column: 1 / span 3;
`;

const Title = styled.div`
  padding-left: 80px;
`;

const BriefDescription = styled.p`
  grid-column: span 2;

  font-weight: 300;
  font-size: 28px;
  line-height: 120%;

  padding-top: 12px;

  white-space: pre-line;
`;

const AdditionalInfo = styled.div`
  grid-column: 1 / span 3;
  padding-left: 80px;
`;

const Description = styled.p`
  grid-column: 1 / span 3;

  font-weight: 300;
  font-size: 36px;
  line-height: 120%;

  margin-top: 190px;

  @media only screen and (min-width: 1700px) {
    margin-top: 240px;
  }

  @media only screen and (min-width: 1800px) {
    margin-top: 290px;
  }
`;

const ProblemSolutionResearchGrid = styled.div`
  grid-column: 1 / span 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Problem = styled.div`
  grid-row: span 2;

  & > div {
    padding-left: 60px;
    padding-right: 10%;
  }
`;

const ProblemTitle = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 110%;
`;

const ProblemDescription = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;

  padding-right: 20%;
`;

const ProblemGoals = styled.div`
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
  }
`;

const ProblemGoalsTitle = styled.p``;

const ProblemGoalsDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProblemGoalsDescriptionItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProblemGoalsDescriptionItemText = styled.p``;

const ProblemGoalsDescriptionItemDot = styled.p`
  margin: 0 10px;
`;

const ProblemTasks = styled.div`
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
  }
`;

const ProblemTasksTitle = styled.p``;

const ProblemTasksDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProblemTaskDescriptionItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProblemTaskDescriptionItemText = styled.p``;

const ProblemTaskDescriptionItemDot = styled.p`
  margin: 0 10px;
`;

const Solution = styled.div``;

const SolutionTitle = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 110%;
`;

const SolutionDescription = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;

  padding-right: 20%;
`;

const Research = styled.div``;

const ResearchTitle = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 110%;
`;

const ResearchDescription = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;

  padding-right: 20%;
`;

const ProjectDescriptionDesktop: React.FC<ProjectDescriptionProps> = ({ projectDescription }) => {
  return (
    <>
      <Margin>
        <Marginer margin={44} />
      </Margin>

      <Title>
        <ProjectTitle title={projectDescription.title} subtitle={projectDescription.subtitle}></ProjectTitle>
      </Title>

      <BriefDescription>{projectDescription.smallDescription}</BriefDescription>
      <Margin>
        <Marginer margin={100} />
      </Margin>

      <AdditionalInfo>
        <ProjectAdditionalInfo projectDescription={projectDescription} />
      </AdditionalInfo>

      <Description>{projectDescription.description}</Description>
      <Margin>
        <Marginer margin={50} />
      </Margin>

      <ProblemSolutionResearchGrid>
        <Problem>
          <ProblemTitle>Problem</ProblemTitle>
          <Marginer margin={8} />

          <ProblemDescription>{projectDescription.problem.description}</ProblemDescription>
          <Marginer margin={30} />

          <ProblemGoals>
            <ProblemGoalsTitle>Goals</ProblemGoalsTitle>
            <Marginer margin={10} />
            <ProblemGoalsDescription>
              {projectDescription.problem.goals.map((item, index) => (
                <ProblemGoalsDescriptionItem key={index}>
                  <ProblemGoalsDescriptionItemDot>•</ProblemGoalsDescriptionItemDot>
                  <ProblemGoalsDescriptionItemText>{item}</ProblemGoalsDescriptionItemText>
                </ProblemGoalsDescriptionItem>
              ))}
            </ProblemGoalsDescription>
          </ProblemGoals>
          <Marginer margin={20} />

          <ProblemTasks>
            <ProblemTasksTitle>Tasks</ProblemTasksTitle>
            <Marginer margin={10} />
            <ProblemTasksDescription>
              {projectDescription.problem.tasks.map((item, index) => (
                <ProblemTaskDescriptionItem key={index}>
                  <ProblemTaskDescriptionItemDot>•</ProblemTaskDescriptionItemDot>
                  <ProblemTaskDescriptionItemText>{item}</ProblemTaskDescriptionItemText>
                </ProblemTaskDescriptionItem>
              ))}
            </ProblemTasksDescription>
          </ProblemTasks>
        </Problem>

        <Solution>
          <SolutionTitle>Solution</SolutionTitle>
          <Marginer margin={8} />
          <SolutionDescription>{projectDescription.solution}</SolutionDescription>
          <Marginer margin={50} />
        </Solution>

        <Research>
          <ResearchTitle>Research</ResearchTitle>
          <Marginer margin={8} />
          <ResearchDescription>{projectDescription.research}</ResearchDescription>
        </Research>
      </ProblemSolutionResearchGrid>
    </>
  );
};

export default ProjectDescriptionDesktop;
