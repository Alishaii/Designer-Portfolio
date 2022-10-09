import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MinimalProjectImageDesktopContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const MinimalProjectImageDesktop = () => {
  return (
    <MinimalProjectImageDesktopContainer>
      <Image src={'/images/Minimal/main/desktop.jpg'} alt="" width={1400} height={580} layout={'responsive'} />
    </MinimalProjectImageDesktopContainer>
  );
};

export default MinimalProjectImageDesktop;
