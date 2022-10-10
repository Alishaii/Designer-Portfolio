import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const MinimalProjectContentTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentTablet = () => {
  return (
    <MinimalProjectContentTabletContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/1.jpg'}
          priority
          alt=""
          width={640}
          height={3789}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/tablet/2.jpg'}
        priority
        alt=""
        width={600}
        height={301}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/3.jpg'}
          priority
          alt=""
          width={640}
          height={1264}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/4.jpg'}
          priority
          alt=""
          width={640}
          height={286}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/tablet/5.jpg'}
        priority
        alt=""
        width={600}
        height={1681}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/6.jpg'}
          priority
          alt=""
          width={640}
          height={370}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/7.jpg'}
          priority
          alt=""
          width={640}
          height={388}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/8.jpg'}
          priority
          alt=""
          width={640}
          height={1084}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/tablet/9.jpg'}
          priority
          alt=""
          width={640}
          height={534}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </MinimalProjectContentTabletContainer>
  );
};

export default MinimalProjectContentTablet;
