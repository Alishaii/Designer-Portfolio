import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Marginer from '../Marginer';
import Link from '../Link';

const FooterMobileContainer = styled.div`
  grid-column: span 3;
`;

const LinkedinAndEmail = styled.p``;

const Phone = styled.p``;

const PhoneAndArrowUp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArrowUp = styled.div`
  cursor: pointer;
  margin-top: 8px;
  margin-right: 2px;
`;

const FooterMobile = () => {
  return (
    <FooterMobileContainer id="footer">
      <Marginer margin={30} />

      <LinkedinAndEmail>
        linkedin.com/alina.llbarannykova/ <br />
        alina.llbarannykova@gmail.com
      </LinkedinAndEmail>
      <Marginer margin={18} />

      <PhoneAndArrowUp>
        <Phone>
          +48 536 166 614 <br />
          Poland, Warsaw
        </Phone>

        <Link href={'#header'}>
          <ArrowUp>
            <Image src="/images/MainPage/arrow_up.svg" alt="" width={22} height={30} />
          </ArrowUp>
        </Link>
      </PhoneAndArrowUp>
    </FooterMobileContainer>
  );
};

export default FooterMobile;
