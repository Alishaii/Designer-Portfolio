import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Link from '../Link';

const LinkedinAndEmail = styled.p`
  grid-column: span 2;

  min-height: 180px;

  font-weight: 300;
  font-size: 20px;
  line-height: 26px;

  display: flex;
  align-items: center;
`;

const PhoneAndArrowUp = styled.div`
  min-height: 180px;
  border-top: 1px solid black;

  font-weight: 300;
  font-size: 20px;
  line-height: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Phone = styled.p``;

const ArrowUp = styled.div`
  cursor: pointer;
  margin-right: 12px;
`;

const FooterTablet = () => {
  return (
    <>
      <LinkedinAndEmail id="footer">
        linkedin.com/alina.llbarannykova/ <br />
        alina.llbarannykova@gmail.com
      </LinkedinAndEmail>

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
    </>
  );
};

export default FooterTablet;
