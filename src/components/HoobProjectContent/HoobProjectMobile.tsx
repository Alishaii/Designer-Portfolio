import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const HoobProjectContentMobileContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentMobile = () => {
  return (
    <HoobProjectContentMobileContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/mobile/1.jpg'}
          priority
          alt=""
          width={340}
          height={3014}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image src={'/images/Hoob/content/mobile/2.jpg'} priority alt="" width={320} height={334} layout={'responsive'} />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/mobile/3.jpg'}
          priority
          alt=""
          width={340}
          height={710}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/mobile/4.jpg'}
          priority
          alt=""
          width={340}
          height={446}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image src={'/images/Hoob/content/mobile/5.jpg'} priority alt="" width={320} height={758} layout={'responsive'} />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/mobile/6.jpg'}
          priority
          alt=""
          width={340}
          height={520}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/mobile/7.jpg'}
        priority
        alt=""
        width={320}
        height={1229}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/mobile/8.jpg'}
          priority
          alt=""
          width={340}
          height={520}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </HoobProjectContentMobileContainer>
  );
};

export default HoobProjectContentMobile;
