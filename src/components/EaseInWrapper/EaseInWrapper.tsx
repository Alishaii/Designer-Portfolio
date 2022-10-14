import React from 'react';
import styled from 'styled-components';

interface EaseInWrapperProps {
  children: React.ReactElement[] | React.ReactElement;
  durationInSeconds?: number;
}

const EaseInWrapperContainer = styled.div`
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      transform: translateY(0);
    }
  }
  animation: ${(props: EaseInWrapperProps) => `fade ${props.durationInSeconds}s ease`};
`;

const EaseInWrapper: React.FC<EaseInWrapperProps> = ({ children, durationInSeconds }) => {
  return <EaseInWrapperContainer durationInSeconds={durationInSeconds || 0.9}>{children}</EaseInWrapperContainer>;
};

export default EaseInWrapper;
