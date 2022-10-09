import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MinimalProjectImageLaptopContainer = styled.div`
  position: absolute;
  width: 100vw;
  transform: translateX(-6.25%);
  z-index: -1;
`;

const MinimalProjectImageLaptop = () => {
  return (
    <MinimalProjectImageLaptopContainer>
      <Image src={'/images/Minimal/main/laptop.jpg'} alt="" width={1000} height={580} layout={'responsive'} />
    </MinimalProjectImageLaptopContainer>
  );
};

export default MinimalProjectImageLaptop;
