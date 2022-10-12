import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Hoob/content/tablet/1.jpg';
import imageTwo from '../../../public/images/Hoob/content/tablet/2.jpg';
import imageThree from '../../../public/images/Hoob/content/tablet/3.jpg';
import imageFour from '../../../public/images/Hoob/content/tablet/4.jpg';
import imageFive from '../../../public/images/Hoob/content/tablet/5.jpg';
import imageSix from '../../../public/images/Hoob/content/tablet/6.jpg';
import imageSeven from '../../../public/images/Hoob/content/tablet/7.jpg';
import imageEight from '../../../public/images/Hoob/content/tablet/8.jpg';

const HoobProjectContentTabletContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentTablet = () => {
  return (
    <HoobProjectContentTabletContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={640} height={5597} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={600} height={301} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={640} height={1264} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={640} height={286} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageFive} priority alt="" width={600} height={1394} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={640} height={388} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageSeven} priority alt="" width={620} height={2162} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageEight} priority alt="" width={640} height={533} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </HoobProjectContentTabletContainer>
  );
};

export default HoobProjectContentTablet;
