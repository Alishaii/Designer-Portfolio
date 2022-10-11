import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const HoobProjectContentTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentTablet = () => {
  return (
    <HoobProjectContentTabletContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/tablet/1.jpg'}
          priority
          alt=""
          width={640}
          height={5597}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image src={'/images/Hoob/content/tablet/2.jpg'} priority alt="" width={600} height={301} layout={'responsive'} />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/tablet/3.jpg'}
          priority
          alt=""
          width={640}
          height={1264}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/tablet/4.jpg'}
          priority
          alt=""
          width={640}
          height={286}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/tablet/5.jpg'}
        priority
        alt=""
        width={600}
        height={1394}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/tablet/6.jpg'}
          priority
          alt=""
          width={640}
          height={388}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/tablet/7.jpg'}
        priority
        alt=""
        width={620}
        height={2162}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/tablet/8.jpg'}
          priority
          alt=""
          width={640}
          height={533}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </HoobProjectContentTabletContainer>
  );
};

export default HoobProjectContentTablet;
