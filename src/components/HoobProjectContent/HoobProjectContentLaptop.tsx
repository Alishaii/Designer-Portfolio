import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const HoobProjectContentLaptopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentLaptop = () => {
  return (
    <HoobProjectContentLaptopContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/laptop/1.jpg'}
          priority
          alt=""
          width={1000}
          height={2083}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image src={'/images/Hoob/content/laptop/2.jpg'} priority alt="" width={920} height={320} layout={'responsive'} />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/laptop/3.jpg'}
          priority
          alt=""
          width={1000}
          height={1264}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/laptop/4.jpg'}
          priority
          alt=""
          width={1000}
          height={378}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/laptop/5.jpg'}
        priority
        alt=""
        width={920}
        height={1576}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/laptop/6.jpg'}
          priority
          alt=""
          width={1000}
          height={606}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Hoob/content/laptop/7.jpg'}
        priority
        alt=""
        width={920}
        height={2504}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Hoob/content/laptop/8.jpg'}
          priority
          alt=""
          width={1000}
          height={834}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </HoobProjectContentLaptopContainer>
  );
};

export default HoobProjectContentLaptop;
