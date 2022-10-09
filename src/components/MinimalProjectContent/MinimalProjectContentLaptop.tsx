import React from 'react';
import styled from 'styled-components';
import NoHorizontalPadding from '../NoHorizontalPadding';
import Image from 'next/image';

const MinimalProjectContentLaptopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentLaptop = () => {
  return (
    <MinimalProjectContentLaptopContainer>
      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/1.jpg'}
          priority
          alt=""
          width={1000}
          height={1474}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/laptop/2.jpg'}
        priority
        alt=""
        width={920}
        height={335}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/3.jpg'}
          priority
          alt=""
          width={1000}
          height={1264}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/4.jpg'}
          priority
          alt=""
          width={1000}
          height={378}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <Image
        src={'/images/Minimal/content/laptop/5.jpg'}
        priority
        alt=""
        width={920}
        height={1913}
        layout={'responsive'}
      />

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/6.jpg'}
          priority
          alt=""
          width={1000}
          height={374}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/7.jpg'}
          priority
          alt=""
          width={1000}
          height={606}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/8.jpg'}
          priority
          alt=""
          width={1000}
          height={1504}
          layout={'responsive'}
        />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image
          src={'/images/Minimal/content/laptop/9.jpg'}
          priority
          alt=""
          width={1000}
          height={834}
          layout={'responsive'}
        />
      </NoHorizontalPadding>
    </MinimalProjectContentLaptopContainer>
  );
};

export default MinimalProjectContentLaptop;
