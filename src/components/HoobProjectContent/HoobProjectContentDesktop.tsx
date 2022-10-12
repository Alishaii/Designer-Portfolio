import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Hoob/content/desktop/1.jpg';
import imageTwo from '../../../public/images/Hoob/content/desktop/2.jpg';
import imageThree from '../../../public/images/Hoob/content/desktop/3.jpg';
import imageFour from '../../../public/images/Hoob/content/desktop/4.jpg';
import imageFive from '../../../public/images/Hoob/content/desktop/5.jpg';
import imageSix from '../../../public/images/Hoob/content/desktop/6.jpg';
import imageSeven from '../../../public/images/Hoob/content/desktop/7.jpg';
import imageEight from '../../../public/images/Hoob/content/desktop/8.jpg';

const HoobProjectContentDesktopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentDesktop = () => {
  return (
    <HoobProjectContentDesktopContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={1600} height={3080} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={1400} height={390} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={1600} height={790} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={1600} height={378} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageFive} priority alt="" width={1400} height={1656} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={1600} height={970} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageSeven} priority alt="" width={1400} height={1484} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageEight} priority alt="" width={1600} height={1335} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </HoobProjectContentDesktopContainer>
  );
};

export default HoobProjectContentDesktop;
