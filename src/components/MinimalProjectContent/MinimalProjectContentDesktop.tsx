import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const MinimalProjectContentDesktopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentDesktop = () => {
  return (
    <MinimalProjectContentDesktopContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/1.jpg'}
          priority
          alt=""
          width={1600}
          height={2115}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/desktop/2.jpg'}
        priority
        alt=""
        width={1400}
        height={390}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/3.jpg'}
          priority
          alt=""
          width={1600}
          height={790}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/4.jpg'}
          priority
          alt=""
          width={1600}
          height={378}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/desktop/5.jpg'}
        priority
        alt=""
        width={1400}
        height={1943}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/6.jpg'}
          priority
          alt=""
          width={1600}
          height={374}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/7.jpg'}
          priority
          alt=""
          width={1600}
          height={970}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/8.jpg'}
          priority
          alt=""
          width={1600}
          height={1584}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/desktop/9.jpg'}
          priority
          alt=""
          width={1600}
          height={1335}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </MinimalProjectContentDesktopContainer>
  );
};

export default MinimalProjectContentDesktop;
