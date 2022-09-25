import React from 'react';
import styled from 'styled-components';

interface MarginerProps {
  margin: number;
}

const MarginerContainer = styled.div`
  margin-top: ${(props: MarginerProps) => `${props.margin}px`};
`;

const Marginer: React.FC<MarginerProps> = ({ margin }) => {
  return <MarginerContainer margin={margin} />;
};

export default Marginer;
