import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Minimal/content/desktop/1.jpg';
import imageTwo from '../../../public/images/Minimal/content/desktop/2.jpg';
import imageThree from '../../../public/images/Minimal/content/desktop/3.jpg';
import imageFour from '../../../public/images/Minimal/content/desktop/4.jpg';
import imageFive from '../../../public/images/Minimal/content/desktop/5.jpg';
import imageSix from '../../../public/images/Minimal/content/desktop/6.jpg';
import imageSeven from '../../../public/images/Minimal/content/desktop/7.jpg';
import imageEight from '../../../public/images/Minimal/content/desktop/8.jpg';
import imageNine from '../../../public/images/Minimal/content/desktop/9.jpg';

const MinimalProjectContentDesktopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentDesktop = () => {
  return (
    <MinimalProjectContentDesktopContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={1600} height={2115} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={1400} height={390} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={1600} height={790} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={1600} height={378} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageFive} priority alt="" width={1400} height={1943} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={1600} height={374} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageSeven} priority alt="" width={1600} height={970} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageEight} priority alt="" width={1600} height={1584} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageNine} priority alt="" width={1600} height={1335} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </MinimalProjectContentDesktopContainer>
  );
};

export default MinimalProjectContentDesktop;
