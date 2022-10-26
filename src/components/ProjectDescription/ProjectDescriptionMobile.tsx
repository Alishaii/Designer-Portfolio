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
  grid-column: 1 / span 3;
`;

const BriefDescription = styled.p`
  grid-column: 1 / span 3;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;

  padding-top: 12px;

  white-space: pre-line;
`;

const Description = styled.p`
  grid-column: 1 / span 3;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
`;

const Problem = styled.div`
  grid-column: 1 / span 3;

  padding-right: 8%;
`;

const ProblemTitle = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 110%;
`;

const ProblemDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
`;

const ProblemGoals = styled.div`
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 110%;
  }
`;

const ProblemGoalsTitle = styled.p``;

const ProblemGoalsDescription = styled.div`
  padding-right: 2%;
  display: flex;
  flex-direction: column;
`;

const ProblemGoalsDescriptionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const ProblemGoalsDescriptionItemText = styled.p``;

const ProblemGoalsDescriptionItemDot = styled.p`
  margin: 0 10px;
`;

const ProblemTasks = styled.div`
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 110%;
  }
`;

const ProblemTasksTitle = styled.p``;

const ProblemTasksDescription = styled.div`
  padding-right: 2%;
  display: flex;
  flex-direction: column;
`;

const ProblemTaskDescriptionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const ProblemTaskDescriptionItemText = styled.p``;

const ProblemTaskDescriptionItemDot = styled.p`
  margin: 0 10px;
`;

const Solution = styled.div`
  grid-column: 1 / span 3;
`;

const SolutionTitle = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 110%;
`;

const SolutionDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
`;

const Research = styled.div`
  grid-column: 1 / span 3;
`;

const ResearchTitle = styled.p`
  font-family: Plain Regular;
  font-size: 36px;
  line-height: 110%;
`;

const ResearchDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
`;

const ProjectDescriptionMobile: React.FC<ProjectDescriptionProps> = ({
  projectDescription,
  noProblemSolutionResearchGrid
}) => {
  return (
    <>
      <Margin>
        <Marginer margin={20} />
      </Margin>

      <Title>
        <ProjectTitle title={projectDescription.title} subtitle={projectDescription.subtitle}></ProjectTitle>
      </Title>
      <Margin>
        <Marginer margin={20} />
      </Margin>

      <BriefDescription>{projectDescription.smallDescription}</BriefDescription>
      <Margin>
        <Marginer margin={30} />
      </Margin>

      <ProjectAdditionalInfo projectDescription={projectDescription} />
      <Margin>
        <Marginer margin={50} />
      </Margin>

      <Description>{projectDescription.description}</Description>
      <Margin>
        <Marginer margin={50} />
      </Margin>

      {!noProblemSolutionResearchGrid && (
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
          <Marginer margin={15} />

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
      )}
      {!noProblemSolutionResearchGrid && (
        <Margin>
          <Marginer margin={30} />
        </Margin>
      )}

      {!noProblemSolutionResearchGrid && (
        <Solution>
          <SolutionTitle>Solution</SolutionTitle>
          <Marginer margin={8} />
          <SolutionDescription>{projectDescription.solution}</SolutionDescription>
        </Solution>
      )}
      {!noProblemSolutionResearchGrid && (
        <Margin>
          <Marginer margin={30} />
        </Margin>
      )}

      {!noProblemSolutionResearchGrid && (
        <Research>
          <ResearchTitle>Research</ResearchTitle>
          <Marginer margin={8} />
          <ResearchDescription>{projectDescription.research}</ResearchDescription>
        </Research>
      )}
    </>
  );
};

export default ProjectDescriptionMobile;
