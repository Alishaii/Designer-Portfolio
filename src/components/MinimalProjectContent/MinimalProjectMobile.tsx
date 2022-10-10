import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const MinimalProjectContentMobileContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentMobile = () => {
  return (
    <MinimalProjectContentMobileContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/1.jpg'}
          priority
          alt=""
          width={340}
          height={1843}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/mobile/2.jpg'}
        priority
        alt=""
        width={320}
        height={334}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/3.jpg'}
          priority
          alt=""
          width={340}
          height={710}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/4.jpg'}
          priority
          alt=""
          width={340}
          height={446}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/mobile/5.jpg'}
        priority
        alt=""
        width={320}
        height={913}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/6.jpg'}
          priority
          alt=""
          width={340}
          height={580}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/7.jpg'}
          priority
          alt=""
          width={340}
          height={520}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/8.jpg'}
          priority
          alt=""
          width={340}
          height={590}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/mobile/9.jpg'}
          priority
          alt=""
          width={340}
          height={520}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </MinimalProjectContentMobileContainer>
  );
};

export default MinimalProjectContentMobile;
