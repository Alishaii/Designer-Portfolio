import React from "react";
import { Separator } from "../../../../components/Separator";
import { VerticalMarginer } from "../../../../components/VerticalMarginer";
import { Title } from "../styles";
import { MinimalPageContainer, PgeLocation, Date } from "./styles";

export const MinimalPage = () => {
  return (
    <MinimalPageContainer>
      <VerticalMarginer marginInPx={92} />
      <Title>Minimal</Title>

      <VerticalMarginer marginInPx={40} />
      <Separator horizontalMarginInPercent={4} />

      <VerticalMarginer marginInPx={10} />
      <PgeLocation>
        Landing page / <span> minimal</span>
      </PgeLocation>
      <Date>2021</Date>


    </MinimalPageContainer>
  );
};
