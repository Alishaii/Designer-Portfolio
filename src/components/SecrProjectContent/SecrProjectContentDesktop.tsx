import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Secr/content/desktop/1.jpg';
import imageTwo from '../../../public/images/Secr/content/desktop/2.jpg';
import imageThree from '../../../public/images/Secr/content/desktop/3.jpg';
import imageFour from '../../../public/images/Secr/content/desktop/4.jpg';
import imageFive from '../../../public/images/Secr/content/desktop/5.jpg';
import imageSix from '../../../public/images/Secr/content/desktop/6.jpg';

const MinimalProjectContentDesktopContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentDesktop = () => {
  return (
    <MinimalProjectContentDesktopContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={1601} height={3289} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={1400} height={390} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={1600} height={990} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={1600} height={2038} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFive} priority alt="" width={1600} height={1129} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={1600} height={1225} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </MinimalProjectContentDesktopContainer>
  );
};

export default MinimalProjectContentDesktop;
