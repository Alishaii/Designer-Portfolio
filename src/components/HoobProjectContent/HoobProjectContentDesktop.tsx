import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const HoobProjectContentDesktopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentDesktop = () => {
  return (
    <HoobProjectContentDesktopContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/desktop/1.jpg'}
          priority
          alt=""
          width={1600}
          height={3080}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/desktop/2.jpg'}
        priority
        alt=""
        width={1400}
        height={390}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/desktop/3.jpg'}
          priority
          alt=""
          width={1600}
          height={790}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/desktop/4.jpg'}
          priority
          alt=""
          width={1600}
          height={378}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/desktop/5.jpg'}
        priority
        alt=""
        width={1400}
        height={1656}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/desktop/6.jpg'}
          priority
          alt=""
          width={1600}
          height={970}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/desktop/7.jpg'}
        priority
        alt=""
        width={1400}
        height={1484}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/desktop/8.jpg'}
          priority
          alt=""
          width={1600}
          height={1335}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </HoobProjectContentDesktopContainer>
  );
};

export default HoobProjectContentDesktop;
