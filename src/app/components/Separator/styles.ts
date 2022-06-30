import styled from "styled-components/macro";

interface SeparatorProps {
  horizontalMarginInPercent?: number;
}

export const SeparatorContainer = styled.div`
  border: 1px solid #d5d5d5;
  margin-left: ${(props: SeparatorProps) => `${props.horizontalMarginInPercent}%`};
  margin-right: ${(props: SeparatorProps) => `${props.horizontalMarginInPercent}%`};
`;
