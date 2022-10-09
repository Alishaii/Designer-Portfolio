import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NoHorizontalPadding from '../NoHorizontalPadding';

const MinimalProjectImageTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectImageTablet = () => {
  return (
    <MinimalProjectImageTabletContainer>
      <NoHorizontalPadding>
        <Image src={'/images/Minimal/main/tablet.jpg'} alt="" width={640} height={530} layout={'responsive'} />
      </NoHorizontalPadding>
    </MinimalProjectImageTabletContainer>
  );
};

export default MinimalProjectImageTablet;
