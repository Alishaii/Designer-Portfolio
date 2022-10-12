import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Hoob/content/laptop/1.jpg';
import imageTwo from '../../../public/images/Hoob/content/laptop/2.jpg';
import imageThree from '../../../public/images/Hoob/content/laptop/3.jpg';
import imageFour from '../../../public/images/Hoob/content/laptop/4.jpg';
import imageFive from '../../../public/images/Hoob/content/laptop/5.jpg';
import imageSix from '../../../public/images/Hoob/content/laptop/6.jpg';
import imageSeven from '../../../public/images/Hoob/content/laptop/7.jpg';
import imageEight from '../../../public/images/Hoob/content/laptop/8.jpg';

const HoobProjectContentLaptopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentLaptop = () => {
  return (
    <HoobProjectContentLaptopContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={1000} height={2083} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={920} height={320} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={1000} height={1264} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={1000} height={378} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageFive} priority alt="" width={920} height={1576} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={1000} height={606} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageSeven} priority alt="" width={920} height={2504} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageEight} priority alt="" width={1000} height={834} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </HoobProjectContentLaptopContainer>
  );
};

export default HoobProjectContentLaptop;
