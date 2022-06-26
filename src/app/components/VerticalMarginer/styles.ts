import styled from "styled-components";

interface VerticalMarginerProps {
  marginInPx: number;
}

export const VerticalMarginerContainer = styled.div`
  margin-top: ${(props: VerticalMarginerProps) => `${props.marginInPx}px`};
`;
