import React from "react";
import { VerticalMarginerContainer } from "./styles";

interface VerticalMarginerProps {
  marginInPx: number;
}

export const VerticalMarginer: React.FC<VerticalMarginerProps> = (props) => {
  return <VerticalMarginerContainer marginInPx={props.marginInPx} />;
};
