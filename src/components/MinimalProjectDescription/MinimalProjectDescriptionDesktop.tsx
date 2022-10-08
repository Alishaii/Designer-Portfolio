import React from 'react';
import styled from 'styled-components';
import Marginer from '../Marginer';
import ProjectTitle from '../ProjectTitle';

import * as minimal from '../../constants/MinimalPage/minimal';
import MinimalProjectAdditionalInfo from '../MinimalProjectAdditionalInfo';

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

  padding-right: 35%;

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

const Problem = styled.div`
  grid-row: span 2;
  grid-column: span 2;
`;

const ProblemTitle = styled.p`
  font-size: 36px;
  line-height: 110%;
`;

const ProblemDescription = styled.p``;

const ProblemGoals = styled.div``;

const ProblemGoalsTitle = styled.p``;

const ProblemGoalsDescription = styled.p``;

const ProblemTasks = styled.div``;

const ProblemTasksTitle = styled.p``;

const ProblemTasksDescription = styled.p``;

const Solution = styled.div``;

const SolutionTitle = styled.p`
  font-size: 36px;
  line-height: 110%;
`;

const SolutionDescription = styled.p``;

const Research = styled.div``;

const ResearchTitle = styled.p`
  font-size: 36px;
  line-height: 110%;
`;

const ResearchDescription = styled.p``;

const MinimalProjectDescriptionDesktop = () => {
  return (
    <>
      <Margin>
        <Marginer margin={44} />
      </Margin>

      <Title>
        <ProjectTitle title={minimal.title} subtitle={minimal.subtitle}></ProjectTitle>
      </Title>

      <BriefDescription>{minimal.smallDescription}</BriefDescription>
      <Margin>
        <Marginer margin={100} />
      </Margin>

      <AdditionalInfo>
        <MinimalProjectAdditionalInfo />
      </AdditionalInfo>

      <Description>{minimal.description}</Description>
      <Margin>
        <Marginer margin={50} />
      </Margin>

      <Problem>
        <ProblemTitle>Problem</ProblemTitle>
        <Marginer margin={8} />

        <ProblemDescription>{minimal.problem.description}</ProblemDescription>
        <ProblemGoals>
          <ProblemGoalsTitle>Goals</ProblemGoalsTitle>
          <ProblemGoalsDescription>{minimal.problem.goals}</ProblemGoalsDescription>
        </ProblemGoals>
        <ProblemTasks>
          <ProblemTasksTitle>Tasks</ProblemTasksTitle>
          <ProblemTasksDescription>{minimal.problem.tasks}</ProblemTasksDescription>
        </ProblemTasks>
      </Problem>

      <Solution>
        <SolutionTitle>Solution</SolutionTitle>
        <Marginer margin={8} />
        <SolutionDescription>{minimal.solution}</SolutionDescription>
        <Marginer margin={50} />
      </Solution>

      <Research>
        <ResearchTitle>Research</ResearchTitle>
        <Marginer margin={8} />
        <ResearchDescription>{minimal.research}</ResearchDescription>
      </Research>
    </>
  );
};

export default MinimalProjectDescriptionDesktop;
