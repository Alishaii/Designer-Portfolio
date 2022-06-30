import styled from "styled-components/macro";

interface VerticalMarginerProps {
  marginInPx: number;
}

export const VerticalMarginerContainer = styled.div`
  margin-top: ${(props: VerticalMarginerProps) => `${props.marginInPx}px`};
`;
