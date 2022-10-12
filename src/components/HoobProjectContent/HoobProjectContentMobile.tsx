import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import NoHorizontalPadding from '../NoHorizontalPadding';

import imageOne from '../../../public/images/Hoob/content/mobile/1.jpg';
import imageTwo from '../../../public/images/Hoob/content/mobile/2.jpg';
import imageThree from '../../../public/images/Hoob/content/mobile/3.jpg';
import imageFour from '../../../public/images/Hoob/content/mobile/4.jpg';
import imageFive from '../../../public/images/Hoob/content/mobile/5.jpg';
import imageSix from '../../../public/images/Hoob/content/mobile/6.jpg';
import imageSeven from '../../../public/images/Hoob/content/mobile/7.jpg';
import imageEight from '../../../public/images/Hoob/content/mobile/8.jpg';

const HoobProjectContentMobileContainer = styled.div`
  grid-column: 1 / span 3;
`;

const HoobProjectContentMobile = () => {
  return (
    <HoobProjectContentMobileContainer>
      <NoHorizontalPadding>
        <Image src={imageOne} priority alt="" width={340} height={3014} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageTwo} priority alt="" width={320} height={334} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageThree} priority alt="" width={340} height={710} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <NoHorizontalPadding>
        <Image src={imageFour} priority alt="" width={340} height={446} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageFive} priority alt="" width={320} height={758} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageSix} priority alt="" width={340} height={520} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>

      <Image src={imageSeven} priority alt="" width={320} height={1229} layout={'responsive'} placeholder={'blur'} />

      <NoHorizontalPadding>
        <Image src={imageEight} priority alt="" width={340} height={520} layout={'responsive'} placeholder={'blur'} />
      </NoHorizontalPadding>
    </HoobProjectContentMobileContainer>
  );
};

export default HoobProjectContentMobile;
