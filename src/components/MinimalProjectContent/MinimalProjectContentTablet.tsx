import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Minimal/content/tablet/1.jpg';
import imageTwo from '../../../public/images/Minimal/content/tablet/2.jpg';
import imageThree from '../../../public/images/Minimal/content/tablet/3.jpg';
import imageFour from '../../../public/images/Minimal/content/tablet/4.jpg';
import imageFive from '../../../public/images/Minimal/content/tablet/5.jpg';
import imageSix from '../../../public/images/Minimal/content/tablet/6.jpg';
import imageSeven from '../../../public/images/Minimal/content/tablet/7.jpg';
import imageEight from '../../../public/images/Minimal/content/tablet/8.jpg';
import imageNine from '../../../public/images/Minimal/content/tablet/9.jpg';

const MinimalProjectContentTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const MinimalProjectContentTablet = () => {
  return (
    <MinimalProjectContentTabletContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={640} height={3789} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={600} height={301} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={640} height={1264} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={640} height={286} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageFive} priority alt="" width={600} height={1681} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={640} height={370} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageSeven} priority alt="" width={640} height={388} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageEight} priority alt="" width={640} height={1084} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageNine} priority alt="" width={640} height={534} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </MinimalProjectContentTabletContainer>
  );
};

export default MinimalProjectContentTablet;
