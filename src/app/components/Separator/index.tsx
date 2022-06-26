import React from "react";
import { SeparatorContainer } from "./styles";

interface SeparatorProps {
  horizontalMarginInPercent?: number;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  return <SeparatorContainer horizontalMarginInPercent={props.horizontalMarginInPercent} />;
};
