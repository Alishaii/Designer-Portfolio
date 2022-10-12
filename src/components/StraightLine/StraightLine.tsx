import React from 'react';
import styled from 'styled-components';

const StraightLineContainer = styled.div`
  grid-column: 1 / span 3;
  border-top: 1px solid black;
`;

const StraightLine = () => {
  return <StraightLineContainer></StraightLineContainer>;
};

export default StraightLine;
