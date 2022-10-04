import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Marginer from '../Marginer';

const FooterMobileContainer = styled.div`
  grid-column: span 3;
  border-top: 1px solid black;
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
    <FooterMobileContainer>
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

        <ArrowUp>
          <Image src="/images/MainPage/arrow_up.svg" alt="" width={22} height={30} />
        </ArrowUp>
      </PhoneAndArrowUp>
    </FooterMobileContainer>
  );
};

export default FooterMobile;
