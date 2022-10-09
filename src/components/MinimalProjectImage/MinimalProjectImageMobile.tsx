import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NoHorizontalPadding from '../NoHorizontalPadding';

const MinimalProjectImageMobileContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectImageMobile = () => {
  return (
    <MinimalProjectImageMobileContainer>
      <NoHorizontalPadding>
        <Image src={'/images/Minimal/main/mobile.jpg'} alt="" width={340} height={370} layout={'responsive'} />
      </NoHorizontalPadding>
    </MinimalProjectImageMobileContainer>
  );
};

export default MinimalProjectImageMobile;
